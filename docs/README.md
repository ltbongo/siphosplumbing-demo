# Sipho's Plumbing — Demo Website

## Overview

Single-page responsive brochure website for **Sipho's Plumbing**, a test/demo project for Pretoria East plumbing services. Built as a production-ready static site with mobile-first design.

## Quick Start

Open `index.html` in any browser. No build step required.

```bash
open index.html              # macOS
xdg-open index.html          # Linux
start index.html             # Windows
```

## What's Included

| Feature | Status |
|---------|--------|
| Mobile-responsive layout | ✅ |
| Sticky header with phone CTA | ✅ |
| Services section (6 services) | ✅ |
| Service area coverage (24 suburbs) | ✅ |
| Testimonials (3 reviews) | ✅ |
| Contact form with validation | ✅ |
| Local SEO (Schema.org) | ✅ |
| WCAG 2.1 AA accessible | ✅ |
| GA4 tracking ready | ✅ |
| Demo mode notice | ✅ |

## Configuration

All placeholders are easy to find-and-replace:

1. **Phone number**: Search for `012 000 0000` and replace with real number
2. **WhatsApp**: Replace `27120000000` in WhatsApp URLs
3. **Email**: Replace `sipho@example.co.za`
4. **GA4 ID**: Replace `G-XXXXXXXXXX` in the script tag
5. **Business details**: Update Schema.org JSON-LD in `<head>`

## Live Preview

The site is ready for review at:
```
file:///opt/data/profiles/frontend-developer/work/sipho-plumbing/index.html
```

## Design Tokens

- **Primary blue**: `#0055A4`
- **Accent orange**: `#E8792B`
- **WhatsApp green**: `#25D366`
- **Fonts**: Inter (body), Playfair Display (headlines)

## Next Steps for Production

1. Replace placeholder contact details with real info
2. Configure GA4 measurement ID
3. Connect contact form to backend (Formspree, Netlify Forms, etc.)
4. Add real images to `images/` folder
5. Deploy to Dokploy per hosting directive
6. Run Lighthouse audit and optimize if needed

## Testing

To verify responsiveness:
- Open in Chrome DevTools
- Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
- Test at 375px, 768px, 1024px, 1440px widths
- Check sticky CTAs appear on mobile viewport

To verify accessibility:
- Use browser DevTools Accessibility panel
- Test keyboard navigation (Tab through all interactive elements)
- Run axe-core or Lighthouse accessibility audit

---

**Demo build — not for production use.** Contact details are placeholders.
