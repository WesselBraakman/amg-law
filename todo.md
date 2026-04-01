# AGM LAW - Modern Law Firm Website Redesign

## Design Guidelines

### Design References
- **Modern law firm websites**: Clean, authoritative, dark-toned with gold accents
- **Style**: Dark Elegance + Professional + Mediterranean

### Color Palette
- Primary: #0F1729 (Deep Navy - background)
- Secondary: #1A2744 (Dark Blue - cards/sections)
- Accent: #C9A96E (Gold - highlights, CTAs, borders)
- Accent Light: #E8D5B0 (Light Gold - hover states)
- Text Primary: #FFFFFF (White)
- Text Secondary: #94A3B8 (Slate Gray)
- Surface: #162036 (Card backgrounds)

### Typography
- Headings: Playfair Display (serif, elegant, authoritative)
- Body: Inter (sans-serif, clean, readable)

### Key Component Styles
- Navigation: Transparent on hero, solid dark on scroll
- Cards: Dark surface with gold border accent on hover
- Buttons: Gold background with dark text, or outlined gold
- Sections: Full-width with generous padding

### Images (CDN URLs)
1. hero-athens-skyline.jpg - https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/87ff14e7-f241-418f-8917-a5f38624c4cd.png
2. column-justice.jpg - https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/ef87792a-d0d9-474c-ac5f-8fa8d3e04085.png
3. naxos-island.jpg - https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/bbacc6ff-364a-4400-8555-ce88baf8f0f0.png
4. law-office-interior.jpg - https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/52311395-8724-4551-bf2f-e8b8e28e3b94.png

---

## Development Tasks

### Files to Create/Modify:
1. **src/pages/Index.tsx** - Main single-page app with all sections (Hero, The Firm, Specialization, Contact, Footer)
2. **src/components/Navbar.tsx** - Sticky navigation with language toggle (GR/EN)
3. **src/components/HeroSection.tsx** - Full-screen hero with background image, firm name, tagline
4. **src/components/TheFirmSection.tsx** - About the firm + team members
5. **src/components/SpecializationSection.tsx** - Practice areas grid with expandable details
6. **src/components/ContactSection.tsx** - Contact info, form, map
7. **src/components/Footer.tsx** - Copyright, social links
8. **src/lib/translations.ts** - All bilingual content (Greek + English)

### Architecture:
- Single page app with smooth scroll navigation
- React Context for language state (GR/EN)
- All text content stored in translations.ts
- Responsive: mobile-first with breakpoints for tablet/desktop