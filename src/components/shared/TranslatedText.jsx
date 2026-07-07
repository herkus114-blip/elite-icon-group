import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

const cache = {};

export default function TranslatedText({ text, as: Tag = 'span', className = '', ...props }) {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    if (language === 'en' || !text) {
      setTranslated(text);
      return;
    }
    const key = `${language}:${text}`;
    if (cache[key]) {
      setTranslated(cache[key]);
      return;
    }
    let cancelled = false;
    base44.integrations.Core.InvokeLLM({
      prompt: `Translate the following text to ${language}. Return ONLY the translated text, nothing else, no quotes, no explanation.\n\nText: ${text}`,
    }).then(result => {
      if (!cancelled && mountedRef.current) {
        cache[key] = result;
        setTranslated(result);
      }
    });
    return () => { cancelled = true; };
  }, [language, text]);

  return <Tag className={className} {...props}>{translated}</Tag>;
}