# 🚀 COMPLETE AI AGENCY LANDING PAGE TEMPLATE

## 📋 TABLE OF CONTENTS
1. [Overview](#overview)
2. [Complete Setup Instructions](#complete-setup-instructions)
3. [Placeholder Configuration](#placeholder-configuration)
4. [Component Breakdown](#component-breakdown)
5. [Full Source Code](#full-source-code)
6. [Styling & Design System](#styling--design-system)
7. [Deployment Guide](#deployment-guide)

---

## 🎯 OVERVIEW

This is a **production-ready, premium AI agency landing page** built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The design features:

- **Animated 3D Neural Network Hero** with custom WebGL shaders
- **Interactive Service Toggle** with animated cards
- **Audio Showcase** with real voice agent demos
- **Testimonials Carousel** with infinite scroll
- **Process Timeline** with hover animations
- **Booking Section** with embedded Calendly
- **FAQ Accordion** with smooth transitions
- **Floating Navigation** with pill-style design
- **Background Effects** including gradients, blur, and particle effects
- **Dark Theme** with purple/violet accent colors

### Tech Stack:
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2
- Tailwind CSS 3.4.1
- Framer Motion 11.0.0
- Three.js & React Three Fiber
- GSAP for advanced animations
- Lucide React for icons

---

## 🔧 COMPLETE SETUP INSTRUCTIONS

### Step 1: Create New Vite React TypeScript Project

```bash
npm create vite@latest my-agency-site -- --template react-ts
cd my-agency-site
```

### Step 2: Install All Required Dependencies

```bash
npm install @gsap/react @number-flow/react @radix-ui/react-avatar @radix-ui/react-slot @react-three/drei @react-three/fiber @splinetool/react-spline @splinetool/runtime @supabase/supabase-js @tsparticles/react @tsparticles/slim @vapi-ai/web canvas-confetti class-variance-authority clsx framer-motion gsap lucide-react motion react react-dom tailwind-merge three
```

### Step 3: Install Dev Dependencies

```bash
npm install -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals postcss tailwindcss typescript typescript-eslint vite
```

### Step 4: Configure Tailwind CSS

Create or update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" },
          "100%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
```

### Step 5: Update src/index.css

Import Google Fonts and add custom styles:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .gradient-text {
    @apply bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .premium-button {
    @apply relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98];
  }

  .tech-card {
    @apply bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10;
  }

  .animate-infinite-scroll:hover {
    animation-play-state: paused;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #8b5cf6, #a855f7);
  border-radius: 4px;
}
```

---

## 🎨 PLACEHOLDER CONFIGURATION

### CRITICAL PLACEHOLDERS TO REPLACE:

#### 1. AGENCY NAME
**Current:** `RapidXAI`
**Replace in:**
- All section headings
- Logo component
- Footer
- Meta tags

**Example:**
```javascript
// Before
<h1>RapidXAI</h1>

// After
<h1>{{YOUR_AGENCY_NAME}}</h1>
```

#### 2. THEME COLORS
**Current:** Purple/Violet gradient (`#8b5cf6` to `#a855f7`)
**Find & Replace:**
- `purple-600` → `{{PRIMARY_COLOR}}-600`
- `purple-500` → `{{PRIMARY_COLOR}}-500`
- `purple-400` → `{{PRIMARY_COLOR}}-400`
- `violet-600` → `{{SECONDARY_COLOR}}-600`
- `violet-500` → `{{SECONDARY_COLOR}}-500`
- `violet-400` → `{{SECONDARY_COLOR}}-400`

**Available Tailwind Colors:**
- `blue` - Professional tech feel
- `emerald` - Growth/sustainability
- `cyan` - Modern/innovative
- `rose` - Creative/design
- `amber` - Warm/approachable
- `teal` - Healthcare/wellness

#### 3. HERO SECTION TEXT
```javascript
// Current
title: "Ship AI agents & MVPs that compound"
description: "We help founders automate conversations and validate ideas—fast."

// Replace with
title: "{{YOUR_HERO_HEADLINE}}"
description: "{{YOUR_VALUE_PROPOSITION}}"
badgeText: "{{YOUR_BADGE_TEXT}}"
```

#### 4. CALL-TO-ACTION LINKS
**Current:**
- Primary CTA: `https://calendly.com/shreyasrajsony11/30min`
- Secondary CTA: `https://calendly.com/shreyasrajsony11/consultation-with-shreyas-raj`

**Replace with:**
```javascript
const primaryCTA = () => {
  window.open('{{YOUR_BOOKING_LINK}}', '_blank');
};

const secondaryCTA = () => {
  window.open('{{YOUR_PAID_CONSULTATION_LINK}}', '_blank');
};
```

#### 5. CONTACT INFORMATION
**Current:**
- Phone: `+91 9307512816`
- WhatsApp: `https://wa.me/919307512816`

**Replace in BookingSection.tsx:**
```javascript
<a href="tel:{{YOUR_PHONE_NUMBER}}">
  {{YOUR_PHONE_NUMBER}}
</a>
<a href="https://wa.me/{{YOUR_WHATSAPP_NUMBER}}">
  WhatsApp
</a>
```

#### 6. SERVICE DESCRIPTIONS

**AI Voice Agents:**
```javascript
// Current
title: "AI Voice Agents (Inbound + Outbound)"
description: "Your always-on receptionist + SDR—polite, persistent..."

// Replace with
title: "{{YOUR_SERVICE_1_TITLE}}"
description: "{{YOUR_SERVICE_1_DESCRIPTION}}"
```

**MVP & Micro-SaaS:**
```javascript
// Current
title: "MVP & Micro-SaaS (Validation > Vanity)"
description: "Ship the smallest thing that proves the biggest thing."

// Replace with
title: "{{YOUR_SERVICE_2_TITLE}}"
description: "{{YOUR_SERVICE_2_DESCRIPTION}}"
```

#### 7. CLIENT LOGOS
**Replace in ClientsSection.tsx:**
```javascript
const clients = [
  {
    name: "{{CLIENT_1_NAME}}",
    logo: "{{CLIENT_1_LOGO_URL}}",
    title: "{{CLIENT_1_INDUSTRY}}"
  },
  // Add more clients...
];
```

#### 8. AUDIO RECORDINGS
**Replace in AudioShowcase.tsx:**
```javascript
const recordings = [
  {
    id: 'demo-1',
    title: '{{DEMO_1_TITLE}}',
    description: '{{DEMO_1_DESCRIPTION}}',
    scenario: '{{DEMO_1_SCENARIO}}',
    outcome: '{{DEMO_1_OUTCOME}}',
    url: '{{DEMO_1_AUDIO_URL}}'
  },
  // Add more recordings...
];
```

#### 9. TESTIMONIALS
**Create/update testimonials-columns-1.tsx:**
```javascript
export const firstColumn = [
  {
    name: "{{TESTIMONIAL_1_NAME}}",
    username: "@{{TESTIMONIAL_1_HANDLE}}",
    body: "{{TESTIMONIAL_1_TEXT}}",
    img: "{{TESTIMONIAL_1_AVATAR_URL}}"
  },
  // Add more...
];
```

#### 10. FAQ CONTENT
**Replace in FAQSection.tsx:**
```javascript
const faqs = [
  {
    q: "{{FAQ_1_QUESTION}}",
    a: "{{FAQ_1_ANSWER}}"
  },
  // Add more FAQs...
];
```

---

## 🧩 COMPONENT BREAKDOWN

### 1. HERO SECTION (Neural Network Hero)
**File:** `src/components/ui/hero-odyssey.tsx`

**Features:**
- Animated WebGL shader background (neural network visualization)
- GSAP text animations with split text effects
- Responsive badge with "New" indicator
- Two CTA buttons (primary and secondary)
- Micro-details list at bottom

**Key Props:**
```typescript
interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{
    text: string;
    href?: string;
    primary?: boolean;
    onClick?: () => void;
  }>;
  microDetails?: Array<string>;
}
```

**Customization:**
```javascript
<HeroSection
  title="{{YOUR_HEADLINE}}"
  description="{{YOUR_DESCRIPTION}}"
  badgeText="{{YOUR_BADGE}}"
  ctaButtons={[
    { text: "Get started", onClick: primaryCTA, primary: true },
    { text: "View showcase", onClick: secondaryCTA }
  ]}
  microDetails={["{{DETAIL_1}}", "{{DETAIL_2}}", "{{DETAIL_3}}"]}
/>
```

---

### 2. FEATURES SECTION (Enhanced)
**File:** `src/components/ui/features-enhanced.tsx`

**Features:**
- 6 feature cards in bento grid layout
- 24/7 availability showcase with custom SVG
- Security badge with icon
- Speed indicator with progress bar
- AI conversation mockup
- MVP architecture diagram

**Customization:**
Replace card content:
```javascript
// Card 1: 24/7 Always Available
<span className="text-5xl">{{YOUR_METRIC}}</span>
<h2>{{YOUR_FEATURE_TITLE}}</h2>

// Card 2: Enterprise Security
<h2>{{SECURITY_TITLE}}</h2>
<p>{{SECURITY_DESCRIPTION}}</p>

// Continue for all 6 cards...
```

---

### 3. SERVICES SECTION (Animated Toggle)
**File:** `src/components/sections/ServicesSection.tsx`

**Features:**
- Toggle between two service offerings
- Animated card diagram (Visual2 component)
- Service-specific icons and bullet points
- CTA button that scrolls to booking section

**Customization:**
```javascript
// Service 1
{
  icon: Phone,
  title: "{{SERVICE_1_TITLE}}",
  description: "{{SERVICE_1_DESCRIPTION}}",
  features: [
    { icon: Target, text: "{{FEATURE_1}}" },
    { icon: Phone, text: "{{FEATURE_2}}" },
    // Add more features...
  ]
}

// Service 2
{
  icon: Rocket,
  title: "{{SERVICE_2_TITLE}}",
  description: "{{SERVICE_2_DESCRIPTION}}",
  features: [
    { icon: Target, text: "{{FEATURE_1}}" },
    { icon: Star, text: "{{FEATURE_2}}" },
    // Add more features...
  ]
}
```

---

### 4. PROCESS SECTION (Timeline)
**File:** `src/components/sections/ProcessSection.tsx`

**Features:**
- 4-step process timeline
- Animated cards with hover effects
- Step numbers with badges
- Connecting lines between steps

**Customization:**
```javascript
const phases = [
  {
    step: "01",
    title: "{{STEP_1_TITLE}}",
    description: "{{STEP_1_DESCRIPTION}}",
    color: "from-purple-600 to-violet-600",
    icon: Target
  },
  // Add 3 more steps...
];
```

---

### 5. AUDIO SHOWCASE
**File:** `src/components/ui/audio-showcase.tsx`

**Features:**
- Custom audio player with play/pause
- Progress bar with time display
- Scenario and outcome cards
- Fallback browser controls
- Grid layout (2 columns on desktop)

**Customization:**
```javascript
const recordings = [
  {
    id: 'unique-id',
    title: '{{RECORDING_TITLE}}',
    description: '{{RECORDING_DESCRIPTION}}',
    scenario: '{{WHAT_HAPPENS}}',
    outcome: '{{RESULT}}',
    url: '{{AUDIO_FILE_URL}}'  // Use .mp3, .wav, or .ogg
  },
  // Add more recordings...
];
```

**Audio File Requirements:**
- Format: MP3, WAV, or OGG
- Recommended: MP3 at 128kbps
- Max file size: 10MB per file
- Host on: Catbox.moe, CDN, or your server

---

### 6. TESTIMONIALS SECTION
**File:** `src/components/ui/testimonials-section.tsx`

**Features:**
- 3-column infinite scroll carousel
- Different scroll speeds per column
- Gradient mask for smooth edges
- Testimonial cards with avatars

**Setup:**
1. Create `src/components/ui/testimonials-columns-1.tsx`:

```typescript
export const firstColumn = [
  {
    name: "{{NAME}}",
    username: "@{{HANDLE}}",
    body: "{{TESTIMONIAL_TEXT}}",
    img: "{{AVATAR_URL}}"
  },
  // Add 5-8 testimonials per column
];

export const secondColumn = [
  // Same structure
];

export const thirdColumn = [
  // Same structure
];
```

2. Each column scrolls at different speeds (15s, 19s, 17s)
3. Testimonials automatically loop infinitely

---

### 7. CLIENTS SECTION (Infinite Scroll)
**File:** `src/components/sections/ClientsSection.tsx`

**Features:**
- Horizontal infinite scroll
- Logo cards with hover effects
- Gradient masks on edges
- Pause on hover

**Customization:**
```javascript
const clients = [
  {
    name: "{{CLIENT_NAME}}",
    title: "{{CLIENT_INDUSTRY}}",
    company: "{{CLIENT_COMPANY}}",
    logo: "{{LOGO_IMAGE_URL}}"
  },
  // Add 6-12 clients
];
```

**Logo Requirements:**
- Format: PNG with transparent background
- Size: 200x100px recommended
- Style: Monochrome or white logos work best
- Host on: ImgBB, Imgur, or your CDN

---

### 8. BOOKING SECTION
**File:** `src/components/sections/BookingSection.tsx`

**Features:**
- Left: What to expect list
- Right: Booking card with CTA
- Direct contact info (phone & WhatsApp)
- Two booking options

**Customization:**
```javascript
const features = [
  "{{EXPECTATION_1}}",
  "{{EXPECTATION_2}}",
  "{{EXPECTATION_3}}",
  "{{EXPECTATION_4}}",
  "{{EXPECTATION_5}}"
];

// Contact info
<a href="tel:{{YOUR_PHONE}}">{{YOUR_PHONE_DISPLAY}}</a>
<a href="https://wa.me/{{YOUR_WHATSAPP_NUMBER}}">WhatsApp</a>
```

**Calendly Integration:**
1. Sign up at calendly.com
2. Create event types
3. Get booking links
4. Replace in primaryCTA and secondaryCTA functions

---

### 9. FAQ SECTION
**File:** `src/components/sections/FAQSection.tsx`

**Features:**
- Accordion-style Q&A
- Smooth expand/collapse animations
- Chevron indicators
- CTA button at bottom

**Customization:**
```javascript
const faqs = [
  {
    q: "{{QUESTION_1}}",
    a: "{{ANSWER_1}}"
  },
  {
    q: "{{QUESTION_2}}",
    a: "{{ANSWER_2}}"
  },
  // Add 4-10 FAQs
];
```

---

### 10. NAVIGATION BAR
**File:** Inline in `src/App.tsx`

**Features:**
- Fixed floating pill-style nav
- Logo, navigation links, CTA button
- Mobile hamburger menu
- Smooth scroll on scroll

**Customization:**
```javascript
const navigation = [
  { name: '{{NAV_ITEM_1}}', page: 'home' },
  { name: '{{NAV_ITEM_2}}', page: 'services' },
  { name: '{{NAV_ITEM_3}}', page: 'pricing' },
  // Add more nav items
];
```

---

## 📦 FULL SOURCE CODE

### Main App Component
**File:** `src/App.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { Bot, Code, ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './components/ui/logo';
import GradientButton from './components/ui/button-1';

// Import all section components
import { HeroSection } from './components/ui/hero-odyssey';
import { FeaturesEnhanced } from './components/ui/features-enhanced';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AudioShowcase } from './components/ui/audio-showcase';
import { TestimonialsSection } from './components/ui/testimonials-section';
import { ClientsSection } from './components/sections/ClientsSection';
import { BookingSection } from './components/sections/BookingSection';
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/sections/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<'voice' | 'mvp'>('voice');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // REPLACE THESE WITH YOUR BOOKING LINKS
  const primaryCTA = () => {
    window.open('{{YOUR_CALENDLY_LINK}}', '_blank');
  };

  const secondaryCTA = () => {
    window.open('{{YOUR_PAID_CONSULTATION_LINK}}', '_blank');
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
        <div className="flex items-center gap-4">
          {/* Logo Pill */}
          <div className={`relative transition-all duration-500 group hover:scale-105 ${
            isScrolled
              ? 'bg-gray-900/95 backdrop-blur-3xl border border-gray-600/60 shadow-2xl shadow-purple-500/30'
              : 'bg-gray-900/70 backdrop-blur-2xl border border-gray-700/50'
          } rounded-full px-3 py-1.5`}>
            <button className="relative z-10">
              <Logo size="lg" showText={false} />
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className={`hidden xl:flex relative transition-all duration-500 ${
            isScrolled
              ? 'bg-gray-900/95 backdrop-blur-3xl border border-gray-600/60 shadow-2xl shadow-purple-500/30'
              : 'bg-gray-900/70 backdrop-blur-2xl border border-gray-700/50'
          } rounded-full px-1 py-0.5`}>
            <div className="flex items-center space-x-0.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="px-3 py-1.5 rounded-full transition-all duration-300 font-semibold text-sm text-gray-300 hover:text-white hover:bg-white/15"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <GradientButton
            width="200px"
            height="50px"
            onClick={primaryCTA}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-white">
              <Bot className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </div>
          </GradientButton>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 border border-gray-700/60 bg-gray-900/98 backdrop-blur-3xl rounded-2xl shadow-2xl min-w-[280px]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold transition-all duration-300 w-full text-left rounded-xl text-gray-300 hover:text-white hover:bg-white/15"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <HeroSection
        title="{{YOUR_HERO_HEADLINE}}"
        description="{{YOUR_HERO_DESCRIPTION}}"
        badgeText="{{YOUR_BADGE_TEXT}}"
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
      />

      <FeaturesEnhanced />

      <ServicesSection
        activeService={activeService}
        setActiveService={setActiveService}
        scrollToBooking={scrollToBooking}
      />

      <ProcessSection
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
      />

      <AudioShowcase primaryCTA={primaryCTA} />

      <TestimonialsSection />

      <ClientsSection primaryCTA={primaryCTA} />

      <BookingSection
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
      />

      <FAQSection
        openFaq={openFaq}
        toggleFaq={toggleFaq}
        primaryCTA={primaryCTA}
      />

      <Footer
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
      />
    </div>
  );
}

export default App;
```

---

### Gradient Button Component
**File:** `src/components/ui/button-1.tsx`

```typescript
import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  width = '200px',
  height = '50px',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      style={{
        width,
        height,
        background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #8b5cf6 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 3s ease infinite',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
      }}
    >
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </button>
  );
};

export default GradientButton;
```

---

### Logo Component
**File:** `src/components/ui/logo.tsx`

```typescript
import React from 'react';
import { Bot } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Bot className={`${sizeClasses[size]} text-purple-400`} />
        <div className="absolute inset-0 bg-purple-500/30 blur-lg rounded-full"></div>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold gradient-text`}>
          {{YOUR_AGENCY_NAME}}
        </span>
      )}
    </div>
  );
};
```

---

### Footer Component
**File:** `src/components/sections/Footer.tsx`

```typescript
import React from 'react';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export const Footer: React.FC<FooterProps> = ({ primaryCTA, secondaryCTA }) => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold gradient-text">{{YOUR_AGENCY_NAME}}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {{YOUR_COMPANY_TAGLINE}}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-purple-400">AI Voice Agents</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400">MVP Development</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-purple-400">Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-purple-400">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:{{YOUR_EMAIL}}" className="hover:text-purple-400">{{YOUR_EMAIL}}</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:{{YOUR_PHONE}}" className="hover:text-purple-400">{{YOUR_PHONE}}</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{{YOUR_LOCATION}}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {{YOUR_AGENCY_NAME}}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

---

## 🎨 STYLING & DESIGN SYSTEM

### Color Palette

**Primary Colors:**
```css
--purple-600: #8b5cf6
--purple-500: #a855f7
--purple-400: #c084fc
--violet-600: #7c3aed
--violet-500: #8b5cf6
--violet-400: #a78bfa
```

**Neutral Colors:**
```css
--gray-950: #0a0a0f
--gray-900: #18181b
--gray-800: #27272a
--gray-700: #3f3f46
--gray-600: #52525b
```

**To Change Theme Colors:**

1. **Find & Replace in all files:**
   - `purple-600` → `{{YOUR_PRIMARY}}-600`
   - `purple-500` → `{{YOUR_PRIMARY}}-500`
   - `purple-400` → `{{YOUR_PRIMARY}}-400`
   - `violet-600` → `{{YOUR_SECONDARY}}-600`
   - `violet-500` → `{{YOUR_SECONDARY}}-500`

2. **Update gradient-text in index.css:**
```css
.gradient-text {
  @apply bg-gradient-to-r from-{{YOUR_PRIMARY}}-400 via-{{YOUR_SECONDARY}}-400 to-{{YOUR_PRIMARY}}-400 bg-clip-text text-transparent;
}
```

3. **Update shadows:**
```css
shadow-{{YOUR_PRIMARY}}-500/30
shadow-{{YOUR_PRIMARY}}-500/40
```

### Typography System

**Fonts:**
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Monospace:** JetBrains Mono

**Font Weights:**
- Extra Light: 200
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Font Sizes:**
```css
Hero Title: 5xl-7xl (48px-72px)
Section Headings: 5xl-6xl (48px-60px)
Subsections: 3xl-4xl (30px-36px)
Body Large: 2xl-3xl (24px-30px)
Body: xl-2xl (20px-24px)
Body Small: lg-xl (18px-20px)
Captions: sm-base (14px-16px)
```

---

## 🚀 DEPLOYMENT GUIDE

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Vercel auto-detects Vite
5. Click "Deploy"

### Option 2: Netlify

1. Push code to GitHub
2. Go to netlify.com
3. "New site from Git"
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: Custom Server

```bash
# Build for production
npm run build

# Upload the 'dist' folder to your server
# Point your domain to the server
# Configure nginx or Apache to serve the files
```

### Environment Variables

If you add Supabase, Vapi, or other services:

Create `.env` file:
```env
VITE_SUPABASE_URL={{YOUR_SUPABASE_URL}}
VITE_SUPABASE_ANON_KEY={{YOUR_SUPABASE_KEY}}
VITE_VAPI_API_KEY={{YOUR_VAPI_KEY}}
```

---

## 📝 FINAL CHECKLIST

Before going live, replace ALL of these:

- [ ] Agency name in all components
- [ ] Theme colors (purple/violet to your brand)
- [ ] Hero headline and description
- [ ] Service titles and descriptions
- [ ] Process steps (4 phases)
- [ ] Client logos (6-12 clients)
- [ ] Audio recordings (4 demos)
- [ ] Testimonials (15-24 total across 3 columns)
- [ ] FAQ questions and answers (6-10 FAQs)
- [ ] Contact information (phone, email, WhatsApp)
- [ ] Calendly booking links (2 CTAs)
- [ ] Footer content
- [ ] Meta tags in index.html
- [ ] Favicon

---

## 🎯 PROMPT FOR CLAUDE/BOLT

Use this exact prompt in Claude Code or Bolt.new:

```
Create a premium AI agency landing page with these features:

1. HERO SECTION
- Animated WebGL shader background (neural network visualization)
- Hero headline: "{{YOUR_HEADLINE}}"
- Description: "{{YOUR_DESCRIPTION}}"
- Badge with "{{YOUR_BADGE_TEXT}}"
- Two CTA buttons: "{{CTA_1_TEXT}}" and "{{CTA_2_TEXT}}"
- Micro-details: ["{{DETAIL_1}}", "{{DETAIL_2}}", "{{DETAIL_3}}"]

2. FEATURES SECTION
- Bento grid layout with 6 cards
- Feature 1: 24/7 availability with large metric
- Feature 2: Enterprise security with shield icon
- Feature 3: Lightning fast with progress bar
- Feature 4: AI voice intelligence with conversation mockup
- Feature 5: MVP excellence with architecture diagram
- Feature 6: Analytics dashboard preview

3. SERVICES SECTION
- Toggle between two services: "{{SERVICE_1}}" and "{{SERVICE_2}}"
- Animated card diagram that changes with toggle
- Bullet points for each service
- CTA button that scrolls to booking

4. PROCESS SECTION
- 4-step timeline with these phases:
  Step 1: "{{PHASE_1}}" - {{PHASE_1_DESCRIPTION}}
  Step 2: "{{PHASE_2}}" - {{PHASE_2_DESCRIPTION}}
  Step 3: "{{PHASE_3}}" - {{PHASE_3_DESCRIPTION}}
  Step 4: "{{PHASE_4}}" - {{PHASE_4_DESCRIPTION}}
- Connecting lines between steps
- Hover animations on cards

5. AUDIO SHOWCASE
- 4 audio players in 2x2 grid
- Custom play/pause controls
- Progress bars
- Scenario and outcome cards
- Audio files: {{AUDIO_URL_1}}, {{AUDIO_URL_2}}, {{AUDIO_URL_3}}, {{AUDIO_URL_4}}

6. TESTIMONIALS
- 3-column infinite scroll
- Different scroll speeds (15s, 19s, 17s)
- Gradient mask on top/bottom
- Avatar, name, username, testimonial text
- 6-8 testimonials per column

7. CLIENTS SECTION
- Horizontal infinite scroll of client logos
- Pause on hover
- Client names: {{CLIENT_1}}, {{CLIENT_2}}, {{CLIENT_3}}, etc.
- Logo URLs: {{LOGO_1}}, {{LOGO_2}}, {{LOGO_3}}, etc.

8. BOOKING SECTION
- Left: "What to expect" with 5 bullet points
- Right: Booking card with calendar icon
- Direct contact: Phone {{YOUR_PHONE}} and WhatsApp {{YOUR_WHATSAPP}}
- Two booking options: Free discovery call and $250 deep-dive

9. FAQ SECTION
- Accordion with smooth animations
- 6-10 questions:
  Q1: {{FAQ_1_Q}} - {{FAQ_1_A}}
  Q2: {{FAQ_2_Q}} - {{FAQ_2_A}}
  [continue for all FAQs]
- CTA button at bottom

10. FOOTER
- 4 columns: Company, Services, Company, Contact
- Social links
- Copyright info
- Privacy and Terms links

DESIGN SYSTEM:
- Theme colors: {{PRIMARY_COLOR}} (like purple-600) and {{SECONDARY_COLOR}} (like violet-600)
- Font: Playfair Display for headings, Inter for body
- Dark theme: bg-gray-950
- Gradient text: from-{{PRIMARY}}-400 via-{{SECONDARY}}-400
- Hover effects: scale-105, shadow-2xl
- Animations: fade-in, slide-up, infinite-scroll
- Border radius: rounded-2xl, rounded-3xl
- Backdrop blur on cards

NAVIGATION:
- Fixed floating pill at top
- Logo on left
- Nav links in center pill
- CTA button on right
- Mobile hamburger menu
- Smooth scroll to sections

CTAs:
- Primary CTA opens: {{CALENDLY_LINK_1}}
- Secondary CTA opens: {{CALENDLY_LINK_2}}

Use React, TypeScript, Vite, Tailwind CSS, Framer Motion, Three.js, GSAP, and Lucide React icons.

Make it production-ready with professional animations, responsive design, and accessibility features.
```

---

## 💡 TIPS & BEST PRACTICES

### Performance Optimization

1. **Lazy load images:**
```javascript
<img
  src={logo}
  loading="lazy"
  alt="Client logo"
/>
```

2. **Optimize audio files:**
- Use MP3 at 128kbps
- Keep files under 5MB
- Preload metadata only

3. **Code splitting:**
```javascript
const HeroSection = React.lazy(() => import('./components/ui/hero-odyssey'));
```

### SEO Optimization

Update `index.html`:
```html
<head>
  <title>{{YOUR_AGENCY_NAME}} - {{YOUR_TAGLINE}}</title>
  <meta name="description" content="{{YOUR_META_DESCRIPTION}}" />
  <meta property="og:title" content="{{YOUR_OG_TITLE}}" />
  <meta property="og:description" content="{{YOUR_OG_DESCRIPTION}}" />
  <meta property="og:image" content="{{YOUR_OG_IMAGE_URL}}" />
</head>
```

### Accessibility

1. Add alt text to all images
2. Use semantic HTML (nav, section, article)
3. Ensure color contrast ratio > 4.5:1
4. Add aria-labels to buttons
5. Test keyboard navigation

---

## 🐛 TROUBLESHOOTING

### Issue: Animations not working
**Solution:** Check if Framer Motion is installed:
```bash
npm install framer-motion
```

### Issue: Audio files not playing
**Solution:**
1. Check audio URL is accessible
2. Use HTTPS for audio URLs
3. Add CORS headers if self-hosting
4. Test in multiple browsers

### Issue: WebGL shader not rendering
**Solution:**
1. Check browser supports WebGL
2. Update Three.js: `npm install three@latest`
3. Check console for errors

### Issue: Build fails
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📧 SUPPORT

For questions or issues:
- Check browser console for errors
- Verify all placeholders are replaced
- Test in multiple browsers
- Ensure all dependencies are installed

---

## 🎉 CONGRATULATIONS!

You now have a complete, production-ready AI agency landing page that you can customize and deploy in minutes.

**Remember to:**
1. Replace ALL placeholders with your content
2. Update theme colors to match your brand
3. Test on mobile devices
4. Optimize images and audio files
5. Set up analytics (Google Analytics, Plausible, etc.)
6. Configure forms and Calendly
7. Add your logo and favicon
8. Test all CTAs and links

**Happy building! 🚀**
