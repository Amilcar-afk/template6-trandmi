# Trandmi — European B2B Brand Showcase

## 1. Project Description
A premium institutional B2B showcase website for Trandmi, a Korean skincare brand distributed exclusively in Europe (France, Germany, Italy, Belgium) through a professional partner network. The site is a lead-generation platform targeting clinics, institutes, and professional distributors — it is NOT a direct e-commerce store. No cart, no checkout, no public pricing. Every page drives visitors toward submitting a quote request.

## 2. Page Structure
- `/` — Home (hero video, brand intro, product teaser, lab credibility strip, testimonials, primary CTA)
- `/laboratory` — The Laboratory (Korean lab history, R&D, certifications, manufacturing, video slot)
- `/products` — Products / Range (catalog grid of 11 products, Skincare Pro subsection, professional-only framing)
- `/distribution` — Distribution & Exclusivity (territory map/list, positioning, partner framing)
- `/professional` — Professional Space (downloadable brochures, B2B FAQ, optional gated content)
- `/quote` — Request a Quote (dedicated conversion form: company, country, role, product interest, volume, message)
- `/contact` — Contact (general form, soft redirect for individual inquiries)
- `*` — 404 Not Found

## 3. Core Features
- [ ] Multi-language support: FR / EN / IT / DE with persistent language switcher
- [ ] Sticky header with language switcher and persistent "Request a Quote" CTA
- [ ] Video hero background on Home page
- [ ] Product catalog grid (11 products, presented not sold)
- [ ] "Skincare Pro" professional-only line subsection
- [ ] Trust signals throughout: lab heritage, certifications, exclusive distribution badges
- [ ] Smooth scroll and subtle parallax between sections
- [ ] Micro-interactions on hover for product cards and CTAs
- [ ] Quote request form (primary conversion)
- [ ] Contact form
- [ ] Downloadable brochure/PDF section in Professional Space
- [ ] B2B FAQ section
- [ ] SEO-friendly structure across four languages
- [ ] Footer with legal pages, language switcher, territories, contact

## 4. Data Model Design
No database needed. This is a static showcase website with form submissions handled externally.

## 5. Backend / Third-party Integration Plan
- No Supabase required (static showcase, no user accounts, no database)
- No Shopify (not an e-commerce store)
- No Stripe (no payments)
- Forms: Readdy Form integration for Quote Request and Contact forms

## 6. Development Phase Plan

### Phase 1: Foundation + Home + Products
- Goal: Core brand presence — header, footer, Home page, Product catalog, i18n setup
- Deliverable: Working Home page with hero, product teaser, lab strip, sticky header, footer, and full Products/Range page

### Phase 2: Laboratory + Distribution + Professional Space
- Goal: Credibility and B2B pathway pages
- Deliverable: Laboratory page, Distribution & Exclusivity page, Professional Space page with FAQ

### Phase 3: Quote Request + Contact + Polish
- Goal: Conversion forms and final refinements
- Deliverable: Quote Request page, Contact page, form integration, animations, SEO, responsive polish