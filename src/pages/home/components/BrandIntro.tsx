import { useTranslation } from 'react-i18next';

export default function BrandIntro() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Elegant%20minimalist%20still%20life%20of%20premium%20skincare%20products%20on%20a%20white%20marble%20surface%2C%20soft%20natural%20window%20light%2C%20delicate%20botanical%20accents%2C%20clinical%20yet%20warm%20composition%2C%20clean%20aesthetic%2C%20editorial%20product%20photography%2C%20no%20text%20no%20people&width=800&height=1000&seq=trandmi-brand-intro&orientation=portrait"
              alt="Trandmi skincare products"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {t('home.intro.label')}
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 leading-tight mb-6">
              {t('home.intro.title')}
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                {t('home.intro.p1')}
              </p>
              <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                {t('home.intro.p2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}