import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useTranslation } from 'react-i18next';
import { products } from '@/mocks/products';

interface ProductCardData {
  id: string;
  name: string;
  category: string;
  isSkincarePro: boolean;
  shortDescription: string;
  imageUrl: string;
  tags: string[];
}

function ProductCard({ name, category, isSkincarePro, shortDescription, imageUrl, tags }: ProductCardData) {
  return (
    <div className={`group bg-background-50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] ${isSkincarePro ? 'ring-1 ring-accent-300/60' : ''}`}>
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-background-100 flex items-center justify-center p-6">
        {isSkincarePro && (
          <span className="absolute top-3 left-3 z-10 inline-block px-2.5 py-1 bg-accent-500 text-secondary-950 text-[10px] font-bold uppercase tracking-wider rounded">
            Skincare Pro
          </span>
        )}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary-600 mb-2">
          {category}
        </span>
        <h3 className="font-heading text-base font-semibold text-foreground-950 mb-2 leading-snug">
          {name}
        </h3>
        <p className="text-xs text-foreground-500 leading-relaxed">
          {shortDescription}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.slice(0, 3).map((tag) => (
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
  );
}

export default function ProductsPage() {
  const { t } = useTranslation();

  const catalogProducts = products.filter((p) => !p.isSkincarePro);
  const proProducts = products.filter((p) => p.isSkincarePro);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground-950 mb-5">
              {t('products.title')}
            </h1>
            <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed mb-6">
              {t('products.subtitle')}
            </p>
            <p className="inline-block text-xs text-foreground-400 italic border border-background-200 rounded-full px-4 py-1.5">
              {t('products.disclaimer')}
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-20 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {catalogProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {proProducts.length > 0 && (
          <section className="py-16 md:py-24 px-6 md:px-10 bg-background-100">
            <div className="max-w-[1200px] mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-0.5 bg-accent-500"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                    {t('products.skincarePro')}
                  </span>
                </div>
                <p className="text-sm text-foreground-500 max-w-lg">
                  {t('products.skincareProDesc')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {proProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}