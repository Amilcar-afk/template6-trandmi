import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/laboratory', label: t('nav.laboratory') },
    { to: '/products', label: t('nav.products') },
    { to: '/distribution', label: t('nav.distribution') },
    { to: '/professional', label: t('nav.professional') },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md border-b border-background-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap cursor-pointer"
            style={{ color: scrolled ? 'oklch(var(--foreground-950))' : 'white' }}
          >
            TRANDMI
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  location.pathname === link.to
                    ? scrolled
                      ? 'text-primary-600'
                      : 'text-white'
                    : scrolled
                      ? 'text-foreground-600 hover:text-foreground-950'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher scrolled={scrolled} />
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 dark:text-foreground-950 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-primary-600 transition-colors duration-200"
            >
              {t('nav.quote')}
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-sm"></i>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
            style={{ color: scrolled ? 'oklch(var(--foreground-950))' : 'white' }}
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background-50 z-40 flex flex-col">
          <nav className="flex flex-col gap-1 px-6 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-4 text-base font-medium rounded-md cursor-pointer transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-foreground-700 hover:bg-background-100 hover:text-foreground-950'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-6">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary-500 text-background-50 dark:text-foreground-950 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-primary-600 transition-colors duration-200"
            >
              {t('nav.quote')}
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-sm"></i>
              </span>
            </Link>
          </div>
          <div className="px-6 pt-8 border-t border-background-200 mt-6">
            <LanguageSwitcher scrolled={true} />
          </div>
        </div>
      )}
    </header>
  );
}