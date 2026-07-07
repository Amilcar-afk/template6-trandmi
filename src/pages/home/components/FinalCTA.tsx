import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Soft%20abstract%20gradient%20background%20with%20flowing%20white%20and%20pale%20blue%20tones%2C%20minimalist%20composition%2C%20smooth%20ethereal%20texture%2C%20clean%20clinical%20aesthetic%2C%20subtle%20light%20reflections%2C%20no%20objects%2C%20no%20text%2C%20pure%20atmospheric%20background&width=1800&height=900&seq=trandmi-cta-bg&orientation=landscape"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/70 to-secondary-900/85"></div>

      <div className="relative z-10 max-w-[700px] mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-white leading-tight mb-5">
          {t('home.cta.title')}
        </h2>
        <p className="text-sm md:text-base text-white/70 leading-relaxed mb-10 max-w-lg mx-auto">
          {t('home.cta.subtitle')}
        </p>
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-secondary-950 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-accent-400 transition-all duration-300"
        >
          {t('home.cta.button')}
          <span className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-line"></i>
          </span>
        </Link>
      </div>
    </section>
  );
}