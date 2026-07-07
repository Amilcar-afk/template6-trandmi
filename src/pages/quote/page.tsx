import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useTranslation } from 'react-i18next';

const roleOptions = [
  { value: 'clinic', label: 'quote.role.clinic' },
  { value: 'distributor', label: 'quote.role.distributor' },
  { value: 'spa', label: 'quote.role.spa' },
  { value: 'other', label: 'quote.role.other' },
];

export default function Quote() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem('website_alt') as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setStatus('success');
      return;
    }

    const formData = new FormData(form);
    formData.delete('website_alt');

    const company = (formData.get('company') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const country = (formData.get('country') as string)?.trim();
    const role = formData.get('role') as string;
    const products = (formData.get('products') as string)?.trim();

    if (!company || !email || !country || !role || !products) {
      setFormError(t('quote.error.required'));
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError(t('quote.error.email'));
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setFormError('');

    try {
      const payload = new URLSearchParams();
      formData.forEach((value, key) => {
        payload.append(key, value as string);
      });

      const response = await fetch('https://readdy.ai/api/form/d96mg6v0d76aer3t567g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = serverMsg && (serverMsg.includes('spam') || serverMsg.includes('form data is spam'));

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setFormError(serverMsg || t('quote.error.generic'));
        setStatus('error');
      }
    } catch {
      setFormError(t('quote.error.generic'));
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground-950 mb-5">
              {t('quote.title')}
            </h1>
            <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
              {t('quote.subtitle')}
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[700px] mx-auto">
            {status === 'success' ? (
              <div className="bg-background-100 rounded-lg p-8 md:p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
                  <span className="w-7 h-7 flex items-center justify-center text-primary-600">
                    <i className="ri-check-line text-xl"></i>
                  </span>
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground-950 mb-3">
                  {t('quote.success.title')}
                </h2>
                <p className="text-sm text-foreground-500 leading-relaxed">
                  {t('quote.success.desc')}
                </p>
              </div>
            ) : (
              <form
                id="quote-form-d96mg6v0d76aer3t567g"
                data-readdy-form="d96mg6v0d76aer3t567g"
                onSubmit={handleSubmit}
                className="bg-background-100 rounded-lg p-6 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground-700 mb-2">
                      {t('quote.company')} <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder={t('quote.company.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-2">
                      {t('quote.email')} <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder={t('quote.email.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-foreground-700 mb-2">
                      {t('quote.country')} <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder={t('quote.country.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-foreground-700 mb-2">
                      {t('quote.role')} <span className="text-primary-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{t('quote.role.placeholder')}</option>
                      {roleOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {t(opt.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="products" className="block text-sm font-medium text-foreground-700 mb-2">
                    {t('quote.products')} <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="products"
                    name="products"
                    required
                    className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder={t('quote.products.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-foreground-700 mb-2">
                    {t('quote.volume')}
                  </label>
                  <input
                    type="text"
                    id="volume"
                    name="volume"
                    className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder={t('quote.volume.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-2">
                    {t('quote.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                    placeholder={t('quote.message.placeholder')}
                  />
                  <p className="mt-1.5 text-xs text-foreground-400 text-right">
                    {t('quote.message.max')}
                  </p>
                </div>

                <input
                  type="text"
                  name="website_alt"
                  className="form-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                />

                {status === 'error' && formError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <p className="text-sm text-red-700">{formError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-background-50 text-sm font-semibold rounded-md cursor-pointer whitespace-nowrap hover:bg-primary-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 flex items-center justify-center animate-spin">
                        <i className="ri-loader-4-line"></i>
                      </span>
                      {t('quote.submitting')}
                    </>
                  ) : (
                    <>
                      {t('quote.submit')}
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-send-plane-line"></i>
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}