import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const faqItems = [
  { q: 'professional.faq.q1', a: 'professional.faq.a1' },
  { q: 'professional.faq.q2', a: 'professional.faq.a2' },
  { q: 'professional.faq.q3', a: 'professional.faq.a3' },
  { q: 'professional.faq.q4', a: 'professional.faq.a4' },
];

export default function Professional() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {t('professional.hero.label')}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground-950 mb-5">
              {t('professional.title')}
            </h1>
            <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
              {t('professional.subtitle')}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                  {t('professional.brochure.label')}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 leading-tight mb-6">
                  {t('professional.brochure.title')}
                </h2>
                <p className="text-sm md:text-base text-foreground-600 leading-relaxed mb-8">
                  {t('professional.brochure.desc')}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-primary-500 mt-0.5 flex-shrink-0">
                      <i className="ri-file-list-3-line"></i>
                    </span>
                    <span className="text-sm text-foreground-600">{t('professional.brochure.item1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-primary-500 mt-0.5 flex-shrink-0">
                      <i className="ri-file-list-3-line"></i>
                    </span>
                    <span className="text-sm text-foreground-600">{t('professional.brochure.item2')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-primary-500 mt-0.5 flex-shrink-0">
                      <i className="ri-file-list-3-line"></i>
                    </span>
                    <span className="text-sm text-foreground-600">{t('professional.brochure.item3')}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 text-background-50 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-primary-600 transition-all duration-300"
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-download-line"></i>
                  </span>
                  {t('professional.download')}
                </button>
                <p className="mt-4 text-xs text-foreground-400">
                  {t('professional.brochure.note')}
                </p>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Premium%20skincare%20product%20catalog%20and%20brochure%20spread%20on%20white%20marble%20surface%2C%20elegant%20editorial%20layout%2C%20soft%20natural%20lighting%2C%20minimalist%20professional%20product%20photography%2C%20clean%20clinical%20aesthetic%2C%20no%20distracting%20elements%2C%20high%20detail&width=800&height=600&seq=pro-brochure-01&orientation=landscape"
                  alt="Technical Brochure"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
                {t('professional.faq.label')}
              </span>
              <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 mb-4">
                {t('professional.faq')}
              </h2>
              <p className="text-sm md:text-base text-foreground-500">
                {t('professional.faq.subtitle')}
              </p>
            </div>
            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-background-100 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-foreground-950">
                      {t(item.q)}
                    </span>
                    <span className="w-5 h-5 flex items-center justify-center text-foreground-400 flex-shrink-0">
                      <i className={`ri-${openFaq === idx ? 'subtract' : 'add'}-line`}></i>
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-foreground-500 leading-relaxed">
                        {t(item.a)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 mb-5">
              {t('professional.partner.title')}
            </h2>
            <p className="text-sm md:text-base text-foreground-500 max-w-xl mx-auto leading-relaxed mb-8">
              {t('professional.partner.desc')}
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-secondary-950 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-accent-400 transition-all duration-300"
            >
              {t('professional.partner.cta')}
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