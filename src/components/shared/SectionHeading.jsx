import FadeIn from './FadeIn';

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} max-w-3xl ${center ? 'mx-auto' : ''}`}>
      {label && (
        <FadeIn>
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-sans-body font-medium">{label}</span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className={`font-serif-display text-3xl md:text-4xl lg:text-5xl font-medium mt-4 leading-tight ${light ? 'text-white' : 'text-white'}`}>
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-white/50 font-sans-body text-base md:text-lg mt-6 leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}