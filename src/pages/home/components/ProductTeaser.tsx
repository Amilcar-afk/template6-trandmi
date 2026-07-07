import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '@/mocks/products';

const featuredProducts = products.filter((p) => !p.isSkincarePro).slice(0, 4);

export default function ProductTeaser() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-background-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground-950 mb-4">
            {t('home.products.title')}
          </h2>
          <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto">
            {t('home.products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-background-50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-background-100 flex items-center justify-center p-6">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary-600 mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground-950 mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  {item.shortDescription}
                </p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-0.5 bg-background-100 text-foreground-500 text-[10px] font-medium rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 cursor-pointer whitespace-nowrap transition-colors"
          >
            {t('home.products.viewAll')}
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}