import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary-900 text-foreground-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-heading text-2xl font-bold tracking-wide text-background-50 cursor-pointer"
            >
              TRANDMI
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground-300 max-w-xs">
              {t('footer.tagline')}
            </p>
            <p className="mt-4 text-xs text-foreground-400">
              {t('footer.territories')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/laboratory" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.laboratory')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/distribution" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.distribution')}
                </Link>
              </li>
              <li>
                <Link to="/professional" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.professional')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground-400 mb-5">
              Professional
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/quote" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.quote')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground-400 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('footer.legal')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground-300 hover:text-background-50 transition-colors cursor-pointer">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <LanguageSwitcher scrolled={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground-100/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground-400">
              {t('footer.copyright')}
            </p>
            <p className="text-xs text-foreground-500">
              Exclusive European Distribution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}