import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LabCredibility() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Clean%20modern%20laboratory%20interior%20with%20white%20surfaces%2C%20soft%20ambient%20lighting%2C%20minimalist%20scientific%20equipment%2C%20sterile%20clinical%20environment%2C%20blurred%20background%2C%20professional%20cosmetic%20research%20lab%2C%20bright%20and%20airy%20atmosphere%2C%20no%20people&width=1800&height=900&seq=trandmi-lab-bg&orientation=landscape"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background-50/95 via-background-50/85 to-background-50/60"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {t('home.lab.label')}
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 leading-tight mb-6">
              {t('home.lab.title')}
            </h2>
            <p className="text-sm md:text-base text-foreground-600 leading-relaxed mb-8">
              {t('home.lab.desc')}
            </p>
            <Link
              to="/laboratory"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 cursor-pointer whitespace-nowrap transition-colors"
            >
              {t('home.lab.cta')}
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-background-50/80 backdrop-blur-sm rounded-lg p-5 text-center">
              <span className="block font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-1">
                {t('home.lab.stat1')}
              </span>
              <span className="block text-[10px] font-medium text-foreground-500 leading-tight">
                {t('home.lab.stat1desc')}
              </span>
            </div>
            <div className="bg-background-50/80 backdrop-blur-sm rounded-lg p-5 text-center">
              <span className="block font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-1">
                {t('home.lab.stat2')}
              </span>
              <span className="block text-[10px] font-medium text-foreground-500 leading-tight">
                {t('home.lab.stat2desc')}
              </span>
            </div>
            <div className="bg-background-50/80 backdrop-blur-sm rounded-lg p-5 text-center">
              <span className="block font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-1">
                {t('home.lab.stat3')}
              </span>
              <span className="block text-[10px] font-medium text-foreground-500 leading-tight">
                {t('home.lab.stat3desc')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}