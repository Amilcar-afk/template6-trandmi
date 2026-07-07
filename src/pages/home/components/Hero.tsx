import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Abstract%20close-up%20macro%20photography%20of%20skincare%20texture%20with%20soft%20cream%20and%20droplet%20details%2C%20white%20and%20pale%20blue%20color%20palette%2C%20clinical%20yet%20artistic%20composition%2C%20diffused%20natural%20light%2C%20minimalist%20aesthetic%2C%20silky%20smooth%20surfaces%2C%20no%20text%2C%20no%20people%2C%20abstract%20liquid%20texture%20photography&width=1800&height=1200&seq=trandmi-hero-bg&orientation=landscape"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55"></div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-white/80 mb-6">
            Trandmi
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight text-white mb-6">
            {t('home.hero.tagline')}
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 text-background-50 dark:text-foreground-950 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-primary-600 transition-all duration-300"
            >
              {t('home.hero.cta')}
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-md cursor-pointer whitespace-nowrap hover:bg-white/10 transition-all duration-300"
            >
              {t('home.hero.secondary')}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}