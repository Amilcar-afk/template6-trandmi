import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'de', label: 'DE' },
];

interface LanguageSwitcherProps {
  scrolled: boolean;
}

export default function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-semibold tracking-wide rounded cursor-pointer whitespace-nowrap transition-colors duration-200 ${
            i18n.language === lang.code
              ? scrolled
                ? 'bg-primary-100 text-primary-700'
                : 'bg-white/20 text-white'
              : scrolled
                ? 'text-foreground-500 hover:text-foreground-950'
                : 'text-white/60 hover:text-white'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}