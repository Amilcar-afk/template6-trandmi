import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Laboratory() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {t('laboratory.hero.label')}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground-950 mb-5">
              {t('laboratory.title')}
            </h1>
            <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
              {t('laboratory.subtitle')}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20clean%20skincare%20research%20laboratory%20interior%20with%20white%20surfaces%20and%20soft%20natural%20lighting%2C%20minimalist%20scientific%20equipment%20and%20glassware%2C%20sterile%20clinical%20environment%2C%20bright%20airy%20atmosphere%2C%20no%20people%2C%20professional%20cosmetic%20research%20lab%2C%20editorial%20photography%20style%2C%20high%20detail&width=800&height=1000&seq=lab-philosophy-01&orientation=portrait"
                  alt="Trandmi Research Laboratory"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                  {t('laboratory.philosophy.label')}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 leading-tight mb-6">
                  {t('laboratory.philosophy.title')}
                </h2>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                    {t('laboratory.philosophy.p1')}
                  </p>
                  <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                    {t('laboratory.philosophy.p2')}
                  </p>
                  <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                    {t('laboratory.philosophy.p3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                {t('laboratory.certifications.label')}
              </span>
              <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 mb-4">
                {t('laboratory.certifications.title')}
              </h2>
              <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
                {t('laboratory.certifications.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background-100 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <span className="w-6 h-6 flex items-center justify-center text-primary-600">
                    <i className="ri-shield-check-line text-lg"></i>
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-2">
                  {t('laboratory.certifications.isoTitle')}
                </h3>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {t('laboratory.certifications.isoDesc')}
                </p>
              </div>
              <div className="bg-background-100 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-5">
                  <span className="w-6 h-6 flex items-center justify-center text-accent-600">
                    <i className="ri-flask-line text-lg"></i>
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-2">
                  {t('laboratory.certifications.gmpTitle')}
                </h3>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {t('laboratory.certifications.gmpDesc')}
                </p>
              </div>
              <div className="bg-background-100 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mb-5">
                  <span className="w-6 h-6 flex items-center justify-center text-secondary-600">
                    <i className="ri-global-line text-lg"></i>
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-2">
                  {t('laboratory.certifications.euTitle')}
                </h3>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {t('laboratory.certifications.euDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                  {t('laboratory.manufacturing.label')}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 leading-tight mb-6">
                  {t('laboratory.manufacturing.title')}
                </h2>
                <p className="text-sm md:text-base text-foreground-600 leading-relaxed mb-6">
                  {t('laboratory.manufacturing.p1')}
                </p>
                <p className="text-sm md:text-base text-foreground-600 leading-relaxed mb-8">
                  {t('laboratory.manufacturing.p2')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background-50 rounded-lg p-5 text-center">
                    <span className="block font-heading text-xl font-bold text-foreground-950 mb-1">
                      {t('laboratory.manufacturing.stat1')}
                    </span>
                    <span className="block text-xs text-foreground-500">
                      {t('laboratory.manufacturing.stat1desc')}
                    </span>
                  </div>
                  <div className="bg-background-50 rounded-lg p-5 text-center">
                    <span className="block font-heading text-xl font-bold text-foreground-950 mb-1">
                      {t('laboratory.manufacturing.stat2')}
                    </span>
                    <span className="block text-xs text-foreground-500">
                      {t('laboratory.manufacturing.stat2desc')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://readdy.ai/api/search-image?query=Clean%20modern%20cosmetic%20manufacturing%20facility%20with%20stainless%20steel%20equipment%2C%20bright%20sterile%20environment%2C%20white%20and%20silver%20tones%2C%20professional%20skincare%20production%20line%2C%20soft%20even%20lighting%2C%20no%20people%2C%20editorial%20industrial%20photography%2C%20high%20detail&width=800&height=600&seq=lab-manufacturing-01&orientation=landscape"
                  alt="Manufacturing Facility"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                {t('laboratory.research.label')}
              </span>
              <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 mb-4">
                {t('laboratory.research.title')}
              </h2>
              <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
                {t('laboratory.research.desc')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background-100 rounded-lg p-8">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="w-5 h-5 flex items-center justify-center text-primary-600">
                    <i className="ri-microscope-line"></i>
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-3">
                  {t('laboratory.research.rndTitle')}
                </h3>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {t('laboratory.research.rndDesc')}
                </p>
              </div>
              <div className="bg-background-100 rounded-lg p-8">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                  <span className="w-5 h-5 flex items-center justify-center text-accent-600">
                    <i className="ri-test-tube-line"></i>
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-3">
                  {t('laboratory.research.qualityTitle')}
                </h3>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {t('laboratory.research.qualityDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 mb-5">
              {t('laboratory.cta.title')}
            </h2>
            <p className="text-sm md:text-base text-foreground-500 max-w-xl mx-auto leading-relaxed mb-8">
              {t('laboratory.cta.desc')}
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-background-50 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-primary-600 transition-all duration-300"
            >
              {t('laboratory.cta.button')}
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}