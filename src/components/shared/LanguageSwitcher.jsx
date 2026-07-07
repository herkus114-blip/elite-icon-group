import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧', gtCode: null },
  { code: 'ar', label: 'العربية', flag: '🇦🇪', gtCode: 'ar' },
  { code: 'zh', label: '中文', flag: '🇨🇳', gtCode: 'zh-CN' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', gtCode: 'fr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', gtCode: 'es' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', gtCode: 'de' },
  { code: 'ko', label: '한국어', flag: '🇰🇷', gtCode: 'ko' },
];

function triggerGoogleTranslate(langCode) {
  // Restore to English first
  const restoreCookie = () => {
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + 1);
    document.cookie = `googtrans=; expires=${expiry.toGMTString()}; path=/`;
    document.cookie = `googtrans=; expires=${expiry.toGMTString()}; path=/; domain=${location.hostname}`;
  };

  if (!langCode) {
    restoreCookie();
    window.location.reload();
    return;
  }

  document.cookie = `googtrans=/en/${langCode}`;
  document.cookie = `googtrans=/en/${langCode}; domain=${location.hostname}`;

  // Use the hidden Google Translate select element
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  } else {
    window.location.reload();
  }
}

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (lang) => {
    setCurrent(lang);
    setOpen(false);
    triggerGoogleTranslate(lang.gtCode);
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-300 text-xs font-sans-body uppercase tracking-widest"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{current.flag} {current.code.toUpperCase()}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-40 bg-[#0F1F38] border border-white/10 shadow-xl z-50 py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full text-left px-4 py-2.5 text-xs font-sans-body flex items-center gap-2.5 transition-colors duration-200 ${
                  current.code === lang.code ? 'text-gold bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}