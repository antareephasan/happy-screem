# Organized Relume Components

This directory contains consolidated, enhanced Relume components optimized for Payload CMS integration.

## Overview

**Problem Solved:** The original Relume exports contained 55+ component files across 16 page folders with significant duplication. Similar components (e.g., 7 header variants) differed only in minor details like layout or button count.

**Solution:** Consolidated similar components into flexible, configurable variants with:
- Full color scheme support
- Toggleable features (buttons, images, sections)
- TypeScript type safety
- Reduced from 55+ files to ~10 core components

## Folder Structure

```
organized-components/
├── GlobalComponents/          # Site-wide components
│   ├── Navigation/
│   │   └── Navbar.tsx        # Enhanced navbar with color schemes
│   ├── Footer/
│   │   └── Footer.tsx        # Enhanced footer with color schemes
│   └── CTA/
│       └── CTA.tsx           # Unified CTA (merged 3 variants)
│
├── ReusableComponents/        # Page building blocks
│   ├── Headers/
│   │   └── Header.tsx        # Unified header (merged 7 variants)
│   └── Layouts/
│       ├── TwoColumnLayout.tsx    # Two-column layouts (merged 10+ variants)
│       └── FeatureGrid.tsx        # Feature grids (merged icon/image variants)
│
├── utils/                     # Helper utilities
│   ├── cn.ts                 # Tailwind class merging
│   └── colorSchemes.ts       # Color scheme system
│
├── types/                     # TypeScript definitions
│   └── components.ts         # All component prop types
│
└── index.ts                  # Main export file
```

## Component Consolidation Map

### Headers (7 → 1)
- ✅ **header-01** → `Header` with `layout="split"`, `imagePosition="right"`
- ✅ **header-05** → `Header` with `layout="fullscreen"`, `showOverlay`
- ✅ **header-46** → `Header` with `layout="simple"`, `showButtons={false}`
- ✅ **header-47** → `Header` with custom props
- ✅ **header-50** → `Header` with `layout="fullscreen"`, `showTagline`
- ✅ **header-54** → `Header` with custom props
- ✅ **header-62** → `Header` with custom props

### Layouts (10+ → 2)
- ✅ **layout-01** → `TwoColumnLayout` with `showTagline`, `showButtons`
- ✅ **layout-03** → `TwoColumnLayout` with `showButtons={false}`
- ✅ **layout-192** → `TwoColumnLayout` with `imagePosition="left"`
- ✅ **layout-238** → `FeatureGrid` with `itemType="icon"`, `columns={3}`
- ✅ **layout-239** → `FeatureGrid` with `itemType="image"`, `columns={3}`
- And more...

### CTAs (3 → 1)
- ✅ **cta-02** → `CTA` with `layout="split"`, `showForm`
- ✅ **cta-20** → `CTA` with custom props
- ✅ **cta-26** → `CTA` with custom props

### Global Components
- ✅ **navbar-06** → `Navbar` (enhanced with color schemes)
- ✅ **footer-03** → `Footer` (enhanced with color schemes)

## Usage Examples

### Header Component

```tsx
import { Header } from '@/Relume/organized-components';

// Split layout with image on right
<Header
  layout="split"
  imagePosition="right"
  tagline="Welcome"
  heading="Transform Your Digital Life"
  description="Learn to balance screen time..."
  image={{ src: "/hero.jpg", alt: "Hero" }}
  buttons={[
    { text: "Get Started", variant: "default" },
    { text: "Learn More", variant: "secondary" }
  ]}
  colorScheme="light"
/>

// Fullscreen with background
<Header
  layout="fullscreen"
  heading="Beautiful Hero Section"
  description="..."
  image={{ src: "/background.jpg", alt: "Background" }}
  showOverlay
  overlayOpacity={0.6}
  colorScheme="dark"
/>

// Simple text-only
<Header
  layout="simple"
  heading="About Us"
  description="..."
  showButtons={false}
  colorScheme="light"
/>
```

### TwoColumnLayout Component

```tsx
import { TwoColumnLayout } from '@/Relume/organized-components';

// Image on right, with buttons
<TwoColumnLayout
  heading="Our Mission"
  description="..."
  image={{ src: "/mission.jpg", alt: "Mission" }}
  buttons={[
    { text: "Learn More", variant: "secondary" }
  ]}
  colorScheme="light"
/>

// Image on left, no buttons
<TwoColumnLayout
  imagePosition="left"
  tagline="Our Story"
  heading="How We Started"
  description="..."
  image={{ src: "/story.jpg", alt: "Story" }}
  showButtons={false}
  colorScheme="primary"
/>
```

### FeatureGrid Component

```tsx
import { FeatureGrid } from '@/Relume/organized-components';

// Icon-based features
<FeatureGrid
  columns={3}
  itemType="icon"
  heading="Our Services"
  features={[
    {
      icon: { src: "/icon1.svg", alt: "Service 1" },
      title: "Service One",
      description: "Description...",
      button: { text: "Learn More", variant: "link" }
    },
    // ...more features
  ]}
  showItemButtons
  colorScheme="light"
/>

// Image-based features with bottom CTA
<FeatureGrid
  columns={2}
  itemType="image"
  features={[
    {
      image: { src: "/feature1.jpg", alt: "Feature 1" },
      title: "Feature One",
      description: "Description..."
    },
    // ...more features
  ]}
  showBottomButtons
  bottomButtons={[
    { text: "View All", variant: "secondary" }
  ]}
  colorScheme="secondary"
/>
```

### Navbar Component

```tsx
import { Navbar } from '@/Relume/organized-components';

<Navbar
  logo={{ src: "/logo.svg", alt: "Logo" }}
  links={[
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
  ]}
  buttons={[
    { text: "Sign In", variant: "secondary" },
    { text: "Get Started", variant: "default" }
  ]}
  colorScheme="light"
/>
```

### Footer Component

```tsx
import { Footer } from '@/Relume/organized-components';

<Footer
  logo={{ src: "/logo.svg", alt: "Logo" }}
  address="123 Main St, Amsterdam"
  phone="0800 123 4567"
  email="info@example.com"
  linkSections={[
    {
      title: "Products",
      links: [
        { text: "Features", href: "/features" },
        { text: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" }
      ]
    }
  ]}
  socialLinks={[
    { platform: 'facebook', href: '#' },
    { platform: 'instagram', href: '#' }
  ]}
  colorScheme="dark"
/>
```

### CTA Component

```tsx
import { CTA } from '@/Relume/organized-components';

// With email form
<CTA
  layout="split"
  heading="Subscribe to Our Newsletter"
  description="Get weekly tips..."
  showForm
  formPlaceholder="Enter your email"
  formButtonText="Subscribe"
  image={{ src: "/newsletter.jpg", alt: "Newsletter" }}
  colorScheme="primary"
/>

// With buttons
<CTA
  layout="centered"
  heading="Ready to Get Started?"
  description="Join thousands of happy customers"
  showForm={false}
  showButtons
  buttons={[
    { text: "Start Free Trial", variant: "default" },
    { text: "Schedule Demo", variant: "secondary" }
  ]}
  colorScheme="secondary"
/>
```

## Color Schemes

All components support the following color schemes:

- **`light`** (default) - Light background, dark text
- **`dark`** - Dark background, light text
- **`primary`** - Primary brand color background
- **`secondary`** - Secondary brand color background
- **`custom`** - Provide custom colors

### Using Custom Colors

```tsx
<Header
  heading="Custom Styled Header"
  colorScheme={{
    variant: 'custom',
    customColors: {
      background: '#f0f0f0',
      text: '#333333',
      accent: '#007bff',
      border: '#cccccc'
    }
  }}
/>
```

## Toggleable Features

All components have commented toggleable features:

```tsx
// Example from Header component
{/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
{showTagline && tagline && (
  <p className="font-semibold">{tagline}</p>
)}

{/* TOGGLEABLE: Buttons section - controlled by showButtons prop */}
{showButtons && buttons && buttons.length > 0 && (
  <div className="flex gap-4">
    {buttons.map((button, index) => (
      <Button key={index}>{button.text}</Button>
    ))}
  </div>
)}

{/* TOGGLEABLE: Image - controlled by showImage prop */}
{showImage && image && (
  <img src={image.src} alt={image.alt} />
)}
```

## Payload CMS Integration

These components are designed to integrate seamlessly with Payload CMS:

### 1. Global Components → Payload Globals

```typescript
// payload.config.ts
{
  globals: [
    {
      slug: 'navigation',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'text', type: 'text' },
            { name: 'href', type: 'text' }
          ]
        }
      ]
    }
  ]
}
```

### 2. Reusable Components → Payload Blocks

```typescript
// payload.config.ts
{
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            {
              slug: 'header',
              fields: [
                { name: 'layout', type: 'select', options: ['split', 'fullscreen', 'simple'] },
                { name: 'heading', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'colorScheme', type: 'select', options: ['light', 'dark', 'primary'] }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Benefits

✅ **Reduced Duplication** - From 55+ files to ~10 core components
✅ **Flexible Configuration** - Props control all variations
✅ **Color Scheme Support** - Every component themeable
✅ **Toggleable Features** - Easy on/off for any feature
✅ **Type Safety** - Full TypeScript support
✅ **CMS Ready** - Designed for Payload integration
✅ **Maintainable** - Single source of truth for each pattern
✅ **Well Documented** - Inline comments explain all toggles

## Next Steps

1. Build remaining specialized components (Blog, Contact, Pricing, etc.)
2. Create Payload block configs for each component
3. Set up component prop mapping to Payload fields
4. Add Storybook for component documentation
5. Create component usage examples for content editors
