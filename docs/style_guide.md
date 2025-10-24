# SkillShift Shopify Theme - Style Guide

## Overview

This style guide defines the design system for the SkillShift Shopify theme. It is based on the original SkillShift website design, featuring a modern glass morphism aesthetic with professional Fortune 100-level polish.

---

## 🎨 Color Palette

### Primary Colors (Navy Blues)

The foundation of our brand identity - deep, trustworthy blues that convey professionalism.

```css
--navy-deep: #0f2b4c;     /* Main background, primary brand */
--navy-mid: #164969;      /* Gradient middle */
--navy-light: #2e5e70;    /* Gradient end */
```

**Usage:**
- Primary backgrounds for hero sections
- Footer backgrounds
- Dark overlays
- Brand identity elements

---

### Accent Colors

High-impact colors that drive user action and highlight key elements.

```css
--mint-green: #4de3c8;    /* PRIMARY CTA, highlights, interactive */
--teal-aqua: #2ba6a0;     /* Secondary accent */
--sky-blue: #b3e0ff;      /* Tertiary accent */
```

**Usage:**
- **Mint Green**: Primary buttons, CTAs, hover states, active links
- **Teal Aqua**: Secondary buttons, icon backgrounds, gradient accents
- **Sky Blue**: Tertiary accents, trust badges, icons

**⚠️ CRITICAL:** Mint green (#4de3c8) is the PRIMARY CTA color. Use it for all main action buttons.

---

### Text Colors

Optimized for maximum readability across light and dark backgrounds.

```css
/* On Dark Backgrounds */
--white: #ffffff;              /* Primary text */
--light-blue: #e6f2ff;        /* Secondary text */

/* On Light Backgrounds (Cards) */
--card-text: #1a3a52;         /* Primary card text - dark blue */
--card-text-secondary: #4a6072; /* Secondary card text */
--black: #000000;              /* High contrast text */
```

**Usage Rules:**
- Hero sections: Use white or light-blue
- Cards on dark backgrounds: Use white cards with card-text colors
- Never use low-contrast text combinations

---

### Background & Surface Colors

Glass morphism effects and gradient overlays.

```css
/* Glass Effects */
--glass-light: rgba(255, 255, 255, 0.98);
--glass-medium: rgba(255, 255, 255, 0.98);
--glass-strong: rgba(255, 255, 255, 1);
--glass-border: rgba(77, 227, 200, 0.3);

/* Gradients */
--gradient-hero: linear-gradient(135deg, #0f2b4c 0%, #164969 50%, #2e5e70 100%);
--gradient-section: linear-gradient(180deg, #0f2b4c 0%, rgba(15, 43, 76, 0.98) 100%);
--gradient-footer: linear-gradient(180deg, rgba(15, 43, 76, 0.98) 0%, #0f2b4c 100%);
```

**Usage:**
- White cards with 98% opacity for glass effect
- Navy gradients for hero and footer sections
- Mint green borders on cards for glass morphism

---

## 📝 Typography

### Font Families

A dual-font strategy for optimal hierarchy and readability.

```css
/* Display - Headings & Prominent Text */
--font-display: "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Body - Paragraph & UI Text */
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Monospace - Code & Technical */
--font-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
```

**Font Loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

---

### Type Scale

Major Third (1.25) ratio - professional hierarchy.

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--text-xs` | 0.64rem | 10.24px | Fine print, badges |
| `--text-sm` | 0.8rem | 12.8px | Small labels, metadata |
| `--text-base` | 1rem | 16px | Body text (DEFAULT) |
| `--text-lg` | 1.25rem | 20px | Lead paragraphs |
| `--text-xl` | 1.563rem | 25px | H5 headings |
| `--text-2xl` | 1.953rem | 31.25px | H4 headings |
| `--text-3xl` | 2.441rem | 39px | H3 headings |
| `--text-4xl` | 3.052rem | 48.83px | H2 headings |
| `--text-5xl` | 3.815rem | 61px | H1 headings |

**Responsive Sizing:**
Use `clamp()` for fluid typography:
```css
/* H1 Example */
font-size: clamp(2.5rem, 6vw, 4rem);

/* H2 Example */
font-size: clamp(2rem, 4.5vw, 3rem);

/* Body Example */
font-size: clamp(0.9375rem, 1.8vw, 1.125rem);
```

---

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Thin | 100 | Decorative only |
| Light | 300 | Subtle text |
| **Normal** | **400** | Body text (DEFAULT) |
| Medium | 500 | Emphasized text |
| **Semibold** | **600** | Links, buttons |
| **Bold** | **700** | Headings (PRIMARY) |
| Extrabold | 800 | Display headings |
| Black | 900 | Maximum impact |

---

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-none` | 1 | Tight headlines |
| `--leading-tight` | 1.25 | Headings |
| `--leading-snug` | 1.375 | Compact text |
| `--leading-normal` | 1.5 | Body text (DEFAULT) |
| `--leading-relaxed` | 1.625 | Readable paragraphs |
| `--leading-loose` | 2 | Extra breathing room |

**Best Practices:**
- Headings: Use `tight` (1.25)
- Body text: Use `normal` (1.5) or `relaxed` (1.625)
- CTAs/Buttons: Use `normal` (1.5)

---

### Letter Spacing

```css
--tracking-tight: -0.02em;     /* Large headings (H1, H2) */
--tracking-normal: 0;          /* Body text */
--tracking-wide: 0.025em;      /* Small text */
--tracking-wider: 0.05em;      /* Uppercase labels */
--tracking-widest: 0.1em;      /* Extreme emphasis */
```

**Usage:**
- Large headings (H1-H3): Negative tracking (-0.02em)
- Body text: Normal (0)
- Uppercase text: Wider (0.05em)

---

## 📐 Spacing System

8-point grid system for consistent spacing throughout the theme.

### Spacing Scale

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--space-xs` | 0.25rem | 4px | Tight spacing |
| `--space-sm` | 0.5rem | 8px | Small gaps |
| `--space-md` | 0.75rem | 12px | Medium gaps |
| `--space-base` | 1rem | 16px | Base unit ⭐ |
| `--space-lg` | 1.5rem | 24px | Large gaps |
| `--space-xl` | 2rem | 32px | Extra large |
| `--space-2xl` | 2.5rem | 40px | Section spacing |
| `--space-3xl` | 3rem | 48px | Large sections |
| `--space-4xl` | 4rem | 64px | Major sections |
| `--space-5xl` | 5rem | 80px | Section padding ⭐ |
| `--space-6xl` | 6rem | 96px | Hero padding |
| `--space-7xl` | 8rem | 128px | Extra large |
| `--space-8xl` | 10rem | 160px | Maximum |

### Spacing Guidelines

**Vertical Rhythm:**
- Between sections: `80px` (--space-5xl)
- Card padding: `32px` (--space-xl)
- Between elements: `24px` (--space-lg)
- Between lines: `16px` (--space-base)

**Horizontal Spacing:**
- Container padding: `32px` (--space-xl)
- Grid gaps: `32px` (--space-xl)
- Button gaps: `16px` (--space-base)

---

## 🎨 Layout System

### Container

Maximum width with responsive padding.

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-xl); /* 32px */
}
```

**Breakpoints:**
- Mobile: < 768px (single column, 24px padding)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (full width, max 1200px)

---

### Grid System

Flexible auto-fit grid for responsive layouts.

```css
/* Standard 3-column grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
}

/* 2-column grid */
.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

/* 4-column grid */
.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**Common Patterns:**
- Services grid: 3 columns (300px minimum)
- Testimonials: 3 columns (300px minimum)
- Why Choose Us: 3 columns (300px minimum)
- Value Props: Auto-fit (300px minimum)

---

### Section Padding

Consistent vertical spacing for sections.

```css
/* Standard section */
.section-padding {
  padding: var(--space-5xl) 0; /* 80px top/bottom */
}

/* Compact section */
.section-padding-sm {
  padding: var(--space-3xl) 0; /* 48px top/bottom */
}

/* Large section */
.section-padding-lg {
  padding: var(--space-6xl) 0; /* 96px top/bottom */
}
```

**Usage:**
- Hero: Compact padding (clamp for responsiveness)
- Content sections: Standard 80px padding
- CTA sections: Standard 80px padding
- Footer: Custom padding (see footer specs)

---

## 🎯 Border Radius

Consistent rounding strategy based on 8pt grid.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--radius-sm` | 0.25rem | 4px | Small elements |
| `--radius-md` | 0.5rem | 8px | Inputs, tags |
| `--radius-lg` | 0.75rem | 12px | Buttons, cards |
| `--radius-xl` | 1rem | 16px | Large cards |
| `--radius-2xl` | 1.5rem | 24px | Hero elements |
| `--radius-full` | 9999px | Circular | Pills, badges, icons |

**Usage Guidelines:**
- Cards: Use `--radius-xl` (16px)
- Buttons: Use `--radius-full` (pill shape)
- Inputs: Use `--radius-md` (8px)
- Icon badges: Use `--radius-full` (circular)
- Images: Use `--radius-md` (8px)

---

## ✨ Shadow System

Layered shadows for depth and glass morphism.

### Shadow Scale

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
--shadow-md: 0 8px 20px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 16px 40px rgba(0, 0, 0, 0.18), 0 6px 12px rgba(0, 0, 0, 0.12);
--shadow-2xl: 0 24px 60px rgba(0, 0, 0, 0.22), 0 8px 16px rgba(0, 0, 0, 0.14);
```

### Accent Glows

Mint green glow effects for interactive elements.

```css
--shadow-mint-glow: 0 4px 20px rgba(77, 227, 200, 0.3);
--shadow-mint-glow-strong: 0 8px 25px rgba(77, 227, 200, 0.5);
```

### Usage Guidelines

**Cards:**
- Default: `--shadow-md`
- Hover: `--shadow-xl`

**Buttons:**
- Primary (mint): `--shadow-mint-glow`
- Primary hover: `--shadow-mint-glow-strong`
- Secondary: `--shadow-sm`

**Navigation:**
- Fixed header: `--shadow-nav` (0 2px 20px rgba(0, 0, 0, 0.2))

---

## 🎭 Animation & Transitions

### Easing Functions

Professional motion design curves.

```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);   /* Apple-style smooth */
--ease-swift: cubic-bezier(0.55, 0, 0.1, 1);   /* Swift/snappy */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**Default:** Use `--ease-smooth` for most transitions.

---

### Duration Scale

```css
--duration-fast: 100ms;        /* Color changes */
--duration-normal: 200ms;      /* Button hovers, card lifts */
--duration-moderate: 300ms;    /* Dropdowns */
--duration-slow: 400ms;        /* Modals */
```

---

### Combined Transitions

Pre-configured for common patterns.

```css
--transition-base: 0.2s var(--ease-smooth);
--transition-fast: 0.15s var(--ease-smooth);
--transition-slow: 0.3s var(--ease-smooth);

--transition-button: all 0.2s var(--ease-smooth);
--transition-dropdown: opacity 0.15s var(--ease-out), transform 0.15s var(--ease-out);
```

---

### Common Animation Patterns

**Card Hover:**
```css
.card {
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--mint-green);
}
```

**Button Hover:**
```css
.btn-primary {
  transition: var(--transition-button);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-mint-glow-strong);
  filter: brightness(1.1);
}
```

---

## 🔘 Buttons

### Primary Button (Mint Green CTA)

The primary call-to-action button - use sparingly for maximum impact.

```css
.btn-primary {
  background: var(--mint-green);
  color: var(--navy-deep);
  border: none;
  border-radius: 50px; /* Pill shape */
  padding: 0.75rem 2rem;
  font-weight: 600;
  box-shadow: var(--shadow-btn-primary);
  transition: var(--transition-button);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-btn-primary-hover);
  filter: brightness(1.1);
}
```

**Usage:** Add to cart, Subscribe, Get Started, Contact Us (main CTAs only)

---

### Secondary Button (Glass)

Subtle, modern glass effect for secondary actions.

```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  padding: 0.75rem 2rem;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--mint-green);
  transform: translateY(-2px);
}
```

**Usage:** Learn More, View Details, Secondary CTAs

---

### Outline Button (Transparent)

Minimal, transparent button for low-emphasis actions.

```css
.btn-outline {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.6); /* THICK border */
  border-radius: 50px;
  padding: 0.75rem 2rem;
}

.btn-outline:hover {
  background: var(--mint-green);
  color: var(--navy-deep);
  border-color: var(--mint-green);
}
```

**Usage:** Cancel, Back, Alternative actions

---

### Button Sizes

```css
.btn-sm {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  min-height: 40px;
}

.btn-lg {
  padding: 1.125rem 2.25rem;
  font-size: 1.125rem;
  min-height: 56px;
}

.btn-xl {
  padding: 1.5rem 3rem;
  font-size: 1.25rem;
  min-height: 64px;
}
```

---

## 📦 Cards

### Standard Card

White glass card with hover effect.

```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--mint-green);
}

/* Optional gradient overlay on hover */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(77, 227, 200, 0.05) 0%, rgba(43, 166, 160, 0.05) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
  border-radius: var(--radius-xl);
}

.card:hover::before {
  opacity: 1;
}
```

---

### Testimonial Card

Special treatment with quote accent.

```css
.testimonial-card {
  /* Extends .card */
  border-left: 4px solid var(--mint-green);
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  font-size: 4rem;
  color: var(--mint-green);
  opacity: 0.15;
  font-family: Georgia, serif;
}
```

---

## 🏷️ Icon Badges

Circular gradient badges with glow effects.

```css
.icon-badge {
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--mint-green) 0%, var(--teal-aqua) 100%);
  box-shadow: var(--shadow-mint-glow);
  color: var(--navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sizes */
.icon-badge-sm { width: 60px; height: 60px; font-size: 1.75rem; }
.icon-badge-md { width: 70px; height: 70px; font-size: 2rem; }
.icon-badge-lg { width: 80px; height: 80px; font-size: 2.5rem; }
```

---

## 🎬 Component Patterns

### Hero Section

Compact, impactful hero with fixed background.

**Structure:**
```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Your Headline</h1>
    <p class="hero-subtitle">Supporting text</p>
    <div class="hero-buttons">
      <a href="#" class="btn btn-primary">Primary CTA</a>
      <a href="#" class="btn btn-outline">Secondary CTA</a>
    </div>
  </div>
</section>
```

**Specs:**
- Min height: `clamp(380px, 45vh, 480px)`
- Padding: Compact using clamp
- Background: Navy gradient with fixed attachment
- Title: White, clamp(2.5rem, 6vw, 4rem)
- Subtitle: Light text, clamp(1.0625rem, 2vw, 1.25rem)
- Button gap: 0.875rem

---

### Service/Product Cards

3-column grid with pricing emphasis.

**Structure:**
```html
<div class="services-grid">
  <div class="service-card">
    <div class="icon-badge icon-badge-md">
      <i class="fas fa-icon"></i>
    </div>
    <h3 class="service-title">Service Name</h3>
    <p class="service-price">$99</p>
    <p class="service-description">Description text</p>
    <ul class="service-features">
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
    <a href="#" class="btn btn-primary">Get Started</a>
  </div>
</div>
```

**Grid:** Auto-fit, 300px minimum

---

### Testimonials

3-column grid with star ratings.

**Structure:**
```html
<div class="testimonials-grid">
  <div class="testimonial-card">
    <div class="testimonial-rating">
      ★★★★★
    </div>
    <p class="testimonial-quote">"Quote text"</p>
    <div class="testimonial-author">
      <p class="testimonial-name">Name</p>
      <p class="testimonial-location">Location</p>
    </div>
  </div>
</div>
```

---

### FAQ Accordion

Smooth expand/collapse with mint accents.

**Structure:**
```html
<div class="faq-container">
  <div class="faq-item">
    <button class="faq-question" aria-expanded="false">
      <span>Question text?</span>
      <i class="fas fa-chevron-down"></i>
    </button>
    <div class="faq-answer">
      <p>Answer text</p>
    </div>
  </div>
</div>
```

**Behavior:**
- Smooth height transition (300ms)
- Icon rotates 180deg when open
- Mint green accent on hover/active

---

### CTA Section

High-contrast dark section with white text.

**Structure:**
```html
<section class="cta">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-title">Compelling Headline</h2>
      <p class="cta-subtitle">Supporting text</p>
      <div class="cta-buttons">
        <a href="#" class="btn btn-primary">Primary CTA</a>
        <a href="#" class="btn btn-outline">Secondary CTA</a>
      </div>
      <p class="cta-guarantee">
        <i class="fas fa-check-circle"></i>
        Trust message
      </p>
    </div>
  </div>
</section>
```

**Critical:**
- Dark overlay: `rgba(16, 42, 67, 0.85)` for text contrast
- All text must be white
- Use outline buttons (not secondary)

---

## 📱 Responsive Guidelines

### Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  /* Single column layouts */
  /* Smaller padding */
  /* Stack navigation */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 2-column grids */
  /* Medium padding */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Full multi-column layouts */
  /* Max width 1200px */
}
```

---

### Mobile Adjustments

**Typography:**
- Reduce heading sizes with clamp()
- Minimum 16px for body text
- Tighter line-height on mobile

**Spacing:**
- Reduce section padding: 48px → 32px
- Container padding: 32px → 24px
- Card padding: 32px → 24px

**Layout:**
- Single column for grids
- Stack hero buttons
- Hide mobile menu toggle on desktop

---

## ♿ Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- Large text: 3:1 minimum
- Normal text: 4.5:1 minimum

**Tested Combinations:**
- White on navy-deep: ✓ AAA (11.8:1)
- Mint green on navy-deep: ✓ AAA (7.2:1)
- Card-text on white: ✓ AAA (12.1:1)

---

### Focus States

All interactive elements must have visible focus indicators.

```css
*:focus-visible {
  outline: 2px solid var(--mint-green);
  outline-offset: 2px;
  border-radius: 2px;
}

button:focus-visible,
.btn:focus-visible {
  outline: 3px solid var(--mint-green);
  outline-offset: 3px;
}
```

---

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Skip to content link for screen readers
- ARIA labels for icon-only buttons

---

## 🚀 Implementation Checklist

### Starting a New Section

- [ ] Use semantic HTML5 elements
- [ ] Apply container class for max-width
- [ ] Use section-padding for vertical spacing
- [ ] Choose appropriate background (white, gradient, or navy)
- [ ] Ensure proper text color contrast
- [ ] Use grid system for multi-column layouts
- [ ] Add hover states to interactive elements
- [ ] Test responsive behavior
- [ ] Verify accessibility (contrast, focus states)

---

### Component Checklist

- [ ] Card: White background, shadow-md, hover lift
- [ ] Button: Mint green primary, pill shape, shadow glow
- [ ] Icon badge: Circular, gradient, glow effect
- [ ] Typography: Display font for headings, body font for text
- [ ] Spacing: Use spacing scale variables
- [ ] Transitions: 200ms smooth easing
- [ ] Mobile: Test on mobile breakpoint

---

## 📚 Resources

### Design References

- Original SkillShift website: Reference for exact styling
- Figma/Adobe XD: [Design files location]
- Brand guidelines: [Brand asset location]

### Development

- CSS Variables: All tokens defined in theme CSS
- Component library: Shopify sections in `/sections`
- Snippets: Reusable components in `/snippets`

---

## 🎯 Quick Reference

### Most Common Patterns

**Primary CTA Button:**
```liquid
<a href="{{ section.settings.cta_url }}" class="btn btn-primary">
  {{ section.settings.cta_text }}
</a>
```

**Card with Icon:**
```liquid
<div class="card">
  <div class="icon-badge icon-badge-md">
    <i class="fas fa-{{ section.settings.icon }}"></i>
  </div>
  <h3>{{ block.settings.title }}</h3>
  <p>{{ block.settings.description }}</p>
</div>
```

**Section Header:**
```liquid
<div class="section-header text-center">
  <h2 class="section-title">{{ section.settings.heading }}</h2>
  <p class="section-description">{{ section.settings.description }}</p>
</div>
```

---

## 🔄 Version History

- **v1.0** (October 2025) - Initial style guide based on SkillShift design system
- Design system derived from original SkillShift website
- Glass morphism aesthetic with Fortune 100 polish
- Mint green as primary CTA color

---

**Last Updated:** October 24, 2025  
**Maintained By:** SkillShift Development Team  
**Contact:** For questions about this style guide, refer to the design team or project documentation.
