import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const territories = [
  {
    code: 'FR',
    nameKey: 'distribution.france',
    descKey: 'distribution.france.desc',
    flag: 'ri-flag-fill',
  },
  {
    code: 'DE',
    nameKey: 'distribution.germany',
    descKey: 'distribution.germany.desc',
    flag: 'ri-flag-fill',
  },
  {
    code: 'IT',
    nameKey: 'distribution.italy',
    descKey: 'distribution.italy.desc',
    flag: 'ri-flag-fill',
  },
  {
    code: 'BE',
    nameKey: 'distribution.belgium',
    descKey: 'distribution.belgium.desc',
    flag: 'ri-flag-fill',
  },
];

export default function Distribution() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {t('distribution.hero.label')}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground-950 mb-5">
              {t('distribution.title')}
            </h1>
            <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
              {t('distribution.subtitle')}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 mb-4">
                {t('distribution.territories')}
              </h2>
              <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
                {t('distribution.desc')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {territories.map((territory) => (
                <div
                  key={territory.code}
                  className="bg-background-50 rounded-lg p-8 text-center transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
                    <span className="w-7 h-7 flex items-center justify-center text-primary-600">
                      <i className={`${territory.flag} text-xl`}></i>
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground-950 mb-2">
                    {t(territory.nameKey)}
                  </h3>
                  <p className="text-sm text-foreground-500 leading-relaxed">
                    {t(territory.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20meeting%20in%20modern%20office%20with%20european%20city%20view%2C%20minimalist%20interior%2C%20soft%20natural%20lighting%2C%20two%20professionals%20discussing%20documents%2C%20clean%20editorial%20photography%20style%2C%20warm%20neutral%20tones%2C%20no%20distracting%20elements&width=800&height=600&seq=distribution-partner-01&orientation=landscape"
                  alt="Professional Partnership"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                  {t('distribution.partner.label')}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 leading-tight mb-6">
                  {t('distribution.partner.title')}
                </h2>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                    {t('distribution.partner.p1')}
                  </p>
                  <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                    {t('distribution.partner.p2')}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    <i className="ri-check-line"></i>
                    {t('distribution.partner.badge1')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-100 text-accent-700 text-xs font-medium rounded-full">
                    <i className="ri-check-line"></i>
                    {t('distribution.partner.badge2')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full">
                    <i className="ri-check-line"></i>
                    {t('distribution.partner.badge3')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-4">
              {t('distribution.individuals.label')}
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground-950 mb-4">
              {t('distribution.individuals.title')}
            </h2>
            <p className="text-sm md:text-base text-foreground-500 leading-relaxed mb-8">
              {t('distribution.individuals.desc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 cursor-pointer whitespace-nowrap transition-colors"
            >
              {t('distribution.individuals.cta')}
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