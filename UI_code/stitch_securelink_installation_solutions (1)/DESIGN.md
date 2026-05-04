---
name: Sentinel Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607e'
  primary: '#000f22'
  on-primary: '#ffffff'
  primary-container: '#0a2540'
  on-primary-container: '#768dad'
  inverse-primary: '#b0c8eb'
  secondary: '#994700'
  on-secondary: '#ffffff'
  secondary-container: '#fb7800'
  on-secondary-container: '#592600'
  tertiary: '#000f21'
  on-tertiary: '#ffffff'
  tertiary-container: '#012544'
  on-tertiary-container: '#718db1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b0c8eb'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#314865'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68b'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753400'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#acc9ef'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#2c4869'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

This design system is built on the pillars of **security, technical precision, and reliability**. The brand personality is authoritative yet accessible, catering to both high-stakes enterprise clients and safety-conscious homeowners. 

The aesthetic follows a **Corporate Modern** direction with a heavy emphasis on **Minimalism**. By utilizing ample whitespace and a restricted, high-contrast color palette, the UI communicates transparency and professional rigor. The visual language avoids decorative clutter, ensuring that the critical information—service capabilities, security specifications, and contact actions—remains the primary focus.

## Colors

The palette is anchored by **Deep Atlantic Blue (#0A2540)**, a color that evokes stability and trust, commonly associated with the security and technology sectors. This is paired with a high-visibility **Signal Orange (#FF7A00)** used exclusively for primary calls-to-action and critical status indicators, creating a functional hierarchy that guides the user toward conversion.

- **Primary:** Used for navigation backgrounds, headings, and primary brand surfaces.
- **Secondary/Accent:** Reserved for buttons, active states, and highlights.
- **Backgrounds:** A pure white base is supplemented by a soft neutral (#F8FAFC) for section staggering and card backgrounds to maintain a clean, "laboratory" feel.
- **Support:** Tertiary blues are utilized for secondary UI elements like icons or borders to maintain tonal consistency without the weight of the primary dark blue.

## Typography

The design system utilizes **Inter** exclusively to lean into its systematic, utilitarian character. As a typeface designed for screens, it ensures maximum legibility for technical data and service lists.

- **Headlines:** Set with tighter letter-spacing and heavier weights to project strength and confidence.
- **Body Text:** Optimized with a generous line height (1.5-1.6) to ensure readability in long-form service descriptions or technical specifications.
- **Labels:** Small-scale uppercase labels are used for "Service Categories" or "Status Indicators" in the admin panel to provide a clear visual distinction from standard body text.

## Layout & Spacing

This design system employs a **Fixed Grid** model for the desktop experience to maintain a structured, organized appearance reflective of organized network cabling. 

- **Grid:** A 12-column system with a 24px gutter.
- **Rhythm:** Spacing follows an 8px base unit. Section vertical padding is generous (80px+) to allow the "minimal" style to breathe and prevent the technical content from feeling overwhelming.
- **Alignment:** Content is primarily left-aligned to maintain a standard professional reading flow, with center-alignment reserved for hero sections and high-level marketing calls.

## Elevation & Depth

Visual hierarchy is achieved through **Ambient Shadows** and **Tonal Layers**. This system avoids heavy borders, opting instead for depth to separate the foreground from the background.

- **Surface Depth:** Cards and floating elements use a multi-layered shadow (0px 4px 20px rgba(10, 37, 64, 0.08)) that feels soft and modern rather than "muddy."
- **Layering:** The sticky navigation uses a subtle bottom border or a high-opacity backdrop blur to stay persistent without distracting from the content.
- **Interactive States:** On hover, cards should subtly lift (increased shadow spread) or shift color slightly to provide tactile feedback to the user.

## Shapes

The shape language balances the "hard" nature of hardware (cameras, servers) with the "soft" nature of modern software. A consistent **Rounded (Level 2)** application is used across all components.

- **8px Radius:** Standard for buttons, input fields, and small UI widgets.
- **12px Radius:** Standard for service cards, content containers, and images.
- **Pill:** Reserved exclusively for status tags (e.g., "Online," "Active") or small category badges to provide a distinct contrast against the predominantly rectangular grid.

## Components

### Buttons
- **Primary:** Background #FF7A00, Text White, 8px radius. Strong drop shadow on hover.
- **Secondary:** Transparent background, 2px border #0A2540, Text #0A2540.
- **Ghost:** Text #0A2540, no border. Used for less prominent actions in the admin panel.

### Service Cards
Cards feature a centered or top-left icon in #FF7A00. The card background is White or #F8FAFC with a 12px corner radius. The layout should be simple: Icon > H3 Title > Short Paragraph > "Learn More" link.

### Admin Data Tables
Tables focus on high density and clarity. 
- **Header:** Light grey background (#F1F5F9) with uppercase labels.
- **Rows:** White background with subtle 1px dividers.
- **Status Indicators:** Small dots or pill-shaped badges for "System Status" or "Connection Strength."

### Sticky Navigation
The bar remains fixed at the top with a pure white background. It includes the brand logo on the left, primary navigation links centered or right-aligned, and a prominent "Get a Quote" CTA button in #FF7A00 on the far right.

### Input Fields
Inputs should have a subtle 1px border (#E2E8F0) that transitions to #0A2540 on focus. Labels sit clearly above the input field, never inside as placeholders, to maintain accessibility.