import { useTranslation } from 'react-i18next';
import { testimonials } from '@/mocks/testimonials';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-background-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 mb-4">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-background-100 rounded-lg p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="w-3.5 h-3.5 flex items-center justify-center text-accent-500">
                    <i className="ri-star-fill text-xs"></i>
                  </span>
                ))}
              </div>
              <blockquote className="text-sm text-foreground-600 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-background-200">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-primary-700">
                    {item.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-950">{item.name}</p>
                  <p className="text-xs text-foreground-500">
                    {item.role}, {item.institute}
                  </p>
                  <p className="text-[10px] text-foreground-400 mt-0.5">{item.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}