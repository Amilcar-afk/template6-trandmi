import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem('company_alt') as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setStatus('success');
      return;
    }

    const formData = new FormData(form);
    formData.delete('company_alt');

    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const subject = (formData.get('subject') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !subject || !message) {
      setFormError(t('contact.error.required'));
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError(t('contact.error.email'));
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

      const response = await fetch('https://readdy.ai/api/form/d96mg6v0d76aer3t5680', {
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
        setFormError(serverMsg || t('contact.error.generic'));
        setStatus('error');
      }
    } catch {
      setFormError(t('contact.error.generic'));
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
              {t('contact.title')}
            </h1>
            <p className="text-sm md:text-base text-foreground-500 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-6 md:px-10 bg-background-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                {status === 'success' ? (
                  <div className="bg-background-100 rounded-lg p-8 md:p-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
                      <span className="w-7 h-7 flex items-center justify-center text-primary-600">
                        <i className="ri-check-line text-xl"></i>
                      </span>
                    </div>
                    <h2 className="font-heading text-xl font-semibold text-foreground-950 mb-3">
                      {t('contact.success.title')}
                    </h2>
                    <p className="text-sm text-foreground-500 leading-relaxed">
                      {t('contact.success.desc')}
                    </p>
                  </div>
                ) : (
                  <form
                    id="contact-form-d96mg6v0d76aer3t5680"
                    data-readdy-form="d96mg6v0d76aer3t5680"
                    onSubmit={handleSubmit}
                    className="bg-background-100 rounded-lg p-6 md:p-10 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground-700 mb-2">
                          {t('contact.form.name')} <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder={t('contact.form.name.placeholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-2">
                          {t('contact.form.email')} <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder={t('contact.form.email.placeholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground-700 mb-2">
                        {t('contact.form.subject')} <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                        placeholder={t('contact.form.subject.placeholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-2">
                        {t('contact.form.message')} <span className="text-primary-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        maxLength={500}
                        required
                        className="w-full px-4 py-3 bg-background-50 border border-background-200 rounded-md text-sm text-foreground-950 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                        placeholder={t('contact.form.message.placeholder')}
                      />
                      <p className="mt-1.5 text-xs text-foreground-400 text-right">
                        {t('contact.form.message.max')}
                      </p>
                    </div>

                    <input
                      type="text"
                      name="company_alt"
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
                          {t('contact.submitting')}
                        </>
                      ) : (
                        <>
                          {t('contact.form.submit')}
                          <span className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-send-plane-line"></i>
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-2">
                <div className="bg-background-100 rounded-lg p-6 md:p-8 space-y-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-400 mb-4">
                      {t('contact.info.title')}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 flex items-center justify-center text-primary-500 mt-0.5 flex-shrink-0">
                          <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground-950">{t('contact.info.address.label')}</p>
                          <p className="text-sm text-foreground-500">{t('contact.info.address.value')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 flex items-center justify-center text-primary-500 mt-0.5 flex-shrink-0">
                          <i className="ri-mail-line"></i>
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground-950">{t('contact.info.email.label')}</p>
                          <p className="text-sm text-foreground-500">{t('contact.info.email.value')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 flex items-center justify-center text-primary-500 mt-0.5 flex-shrink-0">
                          <i className="ri-time-line"></i>
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground-950">{t('contact.info.hours.label')}</p>
                          <p className="text-sm text-foreground-500">{t('contact.info.hours.value')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-background-200">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-400 mb-3">
                      {t('contact.individuals.title')}
                    </h3>
                    <p className="text-sm text-foreground-500 leading-relaxed">
                      {t('contact.individuals')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}