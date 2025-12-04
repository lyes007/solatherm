# Business Requirements Document (BRD)

**Project:** SolaTherm — Corporate website

**Prepared for:** SolaTherm (Tunis)

**Prepared by:** ChatGPT (draft)

**Date:** 28 November 2025

---

## 1. Executive Summary

SolaTherm is a Tunis-based solar energy agency that installs photovoltaic systems and solar solutions for residential and commercial customers. This BRD defines the requirements to build a modern, responsive, multilingual website that presents SolaTherm’s services, products, projects, financing offers, and contact channels; converts visitors into leads; and improves brand credibility and search visibility.

---

## 2. Background & Current Evidence

SolaTherm already maintains an active Facebook presence with photos, videos, promotions (including financing offers) and project posts. The website will centralize that content, provide lead capture and offer a professional company presentation to potential customers.


## 3. Project Objectives

1. Showcase SolaTherm’s services, products, and completed projects.
2. Increase qualified lead enquiries (contact form, quote request, WhatsApp click-to-chat).
3. Provide clear information about financing/instalment offers and technical specs.
4. Improve discoverability via SEO and local search (Tunis / Tunisia).
5. Offer an easy-to-use CMS for staff to add projects, products, offers and blog posts.

---

## 4. Stakeholders

- Client / Company Owner(s)
- Sales & Technical Team (will provide project data)
- Marketing Manager
- Web Developer / Designer
- Content Editor
- Hosting / IT Provider

---

## 5. Target Audience

- Homeowners in Tunis and Tunisia considering solar PV.
- Small & medium businesses looking to reduce electricity costs.
- Developers/contractors seeking solar partnerships.
- Public sector / NGOs interested in renewable projects.

---

## 6. Scope

### In-scope
- Corporate website: Home, About, Services, Products (catalog), Projects/Portfolio, Offers/Financing, Blog/News, FAQs, Contact, Request a Quote.
- Admin CMS for content management (products, projects, posts, team members, FAQs).
- Lead capture: forms, calendar booking (optional), WhatsApp link.
- Responsive UI for desktop + mobile.
- Basic SEO (meta tags, sitemap, structured data), Google Analytics/GA4, Google Search Console setup.
- Image and video gallery integration (migrate social media assets).

### Out-of-scope (unless requested)
- Full e-commerce checkout for selling hardware online.
- Custom ERP / inventory management beyond simple product catalog.
- Large integrations with third-party ERP or accounting systems.

---

## 7. Functional Requirements

### 7.1 Content & Pages
- **Home:** Hero with value proposition, CTA (Get a Quote), highlight of financing offer, short services overview, recent projects, testimonials, contact quickcard.
- **About:** Company mission, team, certifications, contact details, address and map.
- **Services:** List of services (site study, design, installation, maintenance, monitoring), each with dedicated detail page and downloadable spec sheet.
- **Products:** Catalog entries for panels, inverters, batteries, mounting systems, monitoring hardware. Each product: name, image gallery, specs (power, dimensions, warranty), price range (optional), tags.
- **Projects / Portfolio:** Case studies with images, location, system size (e.g., 3.24 kWc), brief description, customer testimonial.
- **Offers / Financing:** Detailed page describing instalment plans, partner institutions, eligibility, steps to apply, calculator example.
- **Blog / News / Resources:** Articles about solar benefits, maintenance tips, energy savings calculations, regulations.
- **FAQ:** Frequently asked questions about solar installation, warranties, permits, feed-in, net-metering.
- **Contact / Quote:** Multi-field enquiry form, file upload option (site photos), WhatsApp contact button, phone numbers, address, embedded Google Map.

### 7.2 Lead Management
- Form submissions emailed to configurable list and stored in CMS.
- CRM integration ready (Zapier / Make / direct API) to push leads to CRM or Google Sheets.
- Auto-response email to user after submission with next steps and approximate SLAs.

### 7.3 Technical Features
- Responsive design (mobile-first)
- Fast loading and image optimization
- Accessibility basics (WCAG AA preferred)
- Structured data (Organization, LocalBusiness, Product, Article)
- Social share metadata (Open Graph, Twitter Cards)
- Facebook Page widget or feed embed
- Analytics (GA4) and Tag Manager support



---

## 8. Non-functional Requirements

- **Performance:** Page load under 3s on mobile 4G (aim under 2.5s).
- **Availability:** 99.9% uptime SLA from hosting.
- **Security:** HTTPS everywhere, regular backups, basic WAF rules, secure admin panel with 2FA.
- **Scalability:** Able to handle traffic spikes from campaigns.
- **Maintainability:** Use CMS with easy updates (WordPress, Strapi + Next.js, or Django Wagtail).

---

## 9. Content Model (data fields)

### Product
- Title
- SKU
- Category
- Short description
- Full description
- Technical specs (key/value)
- Images (gallery)
- Warranty
- Price or price range
- Tags

### Project
- Title
- Location
- System size (kW or kWp)
- Panels / Inverter models
- Photos (gallery)
- Date completed
- Testimonial
- Case study content

---

## 10. UX / UI / Sitemap

**Proposed sitemap:** Home / About / Services / Products / Projects / Offers / Blog / FAQ / Contact / Request a Quote

Provide top-nav with language switch and CTA button (Get a Quote). Footer: contact details, social icons, quick links, newsletter signup.

---

## 11. SEO & Content Recommendations

- Use keywords in Arabic and French: (e.g., "énergie solaire Tunis", "panneaux solaires Tunis", "installation photovoltaïque Tunisie", Arabic equivalents).
- Local SEO: Create Google Business Profile (if not already), include NAP (Name, Address, Phone) consistently.
- Structured data for projects and products to enable rich results.
- Publish technical blog posts: savings calculators, how solar works, case studies with before/after.

---

## 12. Integrations

- WhatsApp click-to-chat / API for customer messaging.
- Facebook Page embed to show social proof and posts.
- Google Maps for address.
- Optional: Payment provider for deposits (local Tunisian options) or invoicing integration.

---

## 13. KPIs / Success Metrics

- Monthly website sessions (baseline and target)
- Number of qualified leads per month
- Conversion rate (visitors → leads)
- Average time to contact a lead (response SLA)
- Bounce rate on lead pages

---

## 14. Accessibility & Legal

- Privacy Policy and Cookies page (GDPR-like compliance; Tunisia local requirements).
- Terms of Service for quotes and installations.
- Accessible navigation, alt text for images, readable contrast ratios.

---

## 15. Proposed Tech Stack Options

**Option A — Fast MVP (recommended for speed and editing):** WordPress + Elementor/Custom theme + WPForms + ACF + RankMath + WP-Rocket + Hosting (Cloudways / Kinsta)

**Option B — Custom (recommended if team prefers Django):** Django/Wagtail backend + Next.js frontend (ISR/SSG) + PostgreSQL + Vercel/Render for frontend and DigitalOcean for backend

**Option C — Headless CMS:** Strapi + Next.js + Vercel

Choice depends on team skillset and need for custom features.

---

## 16. Timeline (High-level)

- Discovery & content gathering: 1 week
- Design & wireframes: 1 week
- Development: 2–3 weeks (MVP)
- Content migration & testing: 1 week
- Launch & QA: 1 week

Total MVP: ~6–7 weeks (with approvals). Adjust if client requests faster or more features.

---

## 17. Acceptance Criteria

- All pages present and populated with agreed content.
- Contact forms functional and deliver leads to client mailbox/CRM.
- Site passes performance and accessibility checks.
- CMS accessible to client and content-editing documentation delivered.

---

## 18. Deliverables

- Fully functional website (staging + production)
- Admin user guide (PDF)
- Handover package (credentials, backups, DNS instructions)
- 30-day post-launch support window (optional)

---

## 19. Risks & Mitigations

- **Risk:** Delays in content (photos, specs). **Mitigation:** Start design with placeholders and use social media assets.
- **Risk:** Regulatory differences for incentives. **Mitigation:** Client to provide official documents; team to avoid legal claims on site.

---

## 20. Next steps

1. Confirm scope and preferred tech stack.
2. Give access to brand assets (logo, photos, videos, product sheets).
3. Provide final list of services and any certifications.
4. Approve sitemap and start discovery session.


---

*End of BRD (draft).*

