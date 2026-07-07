import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const categories = [
  { key: 'home.categories.all', icon: 'https://trandmi.com/web/upload/wp/167417_en/p__categoryIco_01.png' },
  { key: 'home.categories.allInOne', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/46b17146fb061fcce3b4bafae4c98b47.png' },
  { key: 'home.categories.ampoule', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/ecf7932cb21b31a2135f4e742940c82d.png' },
  { key: 'home.categories.cream', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/8f543cdb0a3de3fb3a60bf32d84f2dc3.png' },
  { key: 'home.categories.peeling', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/bb68cb23b5b1f23aecd3651acdb09906.png' },
  { key: 'home.categories.mask', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/5de3851cdd86afc365c7453f9dba0f22.png' },
  { key: 'home.categories.kit', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/d8e6b46c58fb71b049fda5fc1ad6fd31.png' },
  { key: 'home.categories.device', icon: 'https://trandmi.com/web/upload/category/editor/2023/11/14/00935719abdab1aa8838d9c0737b93c6.png' },
];

export default function CategoryBrowse() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-background-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-xl md:text-3xl font-semibold text-foreground-950 mb-3">
            {t('home.categories.title')}
          </h2>
          <p className="text-sm text-foreground-500">
            {t('home.categories.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              to="/products"
              className="group flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background-100 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-50 group-hover:scale-105">
                <img
                  src={cat.icon}
                  alt={t(cat.key)}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <span className="text-xs md:text-sm text-foreground-600 text-center font-medium group-hover:text-primary-600 transition-colors">
                {t(cat.key)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}