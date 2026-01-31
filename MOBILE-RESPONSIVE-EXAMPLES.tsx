// 📱 Mobile-Optimized Component Examples
// These are improved versions showing mobile-first responsive design

// ================================
// 1. RESPONSIVE HERO HEADLINE
// ================================

// Before (not mobile-friendly):
<h1 className="text-5xl md:text-7xl lg:text-8xl">
  Build Your Dream Business System
</h1>

// After (mobile-optimized):
<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-4 leading-tight">
  Build Your Dream Business System
</h1>
// - Starts at 3xl (30px) on tiny screens
// - Scales up gradually with each breakpoint
// - Added padding for edge breathing room
// - Tighter line-height for better mobile readability

// ================================
// 2. TOUCH-FRIENDLY BUTTONS
// ================================

// Before (too small on mobile):
<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
  Start Free Trial
</button>

// After (44x44px minimum):
<button className="min-w-[180px] min-h-[44px] px-6 py-3 bg-indigo-600 text-white rounded-xl text-base font-semibold active:scale-95 transition-transform">
  Start Free Trial
</button>
// - Minimum 44x44px touch target (Apple HIG)
// - Larger padding for better tap area
// - Bigger text (16px base)
// - Active scale feedback for touch

// ================================
// 3. RESPONSIVE GRID LAYOUTS
// ================================

// Before (breaks on mobile):
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map(...)}
</div>

// After (mobile-first):
<div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  {features.map(...)}
</div>
// - Single column on mobile (readable)
// - 2 columns on tablets
// - 3 columns on desktop
// - Smaller gap on mobile (saves space)

// ================================
// 4. MOBILE MENU WITH SAFE AREA
// ================================

// Add to mobile menu container:
<div className="fixed inset-0 bg-white z-50 pt-safe-top pb-safe-bottom px-4">
  <button 
    className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-gray-100"
    aria-label="Close menu"
  >
    <XIcon className="w-6 h-6" />
  </button>
  
  <nav className="mt-16 space-y-4">
    {navLinks.map(link => (
      <a 
        href={link.path}
        className="block min-h-[48px] px-4 py-3 text-lg font-medium rounded-xl hover:bg-gray-50"
      >
        {link.name}
      </a>
    ))}
  </nav>
</div>
// - Full screen overlay
// - Safe area padding (notched devices)
// - Large tap targets (48px height)
// - Close button is 44x44px

// ================================
// 5. RESPONSIVE IMAGES
// ================================

// Before (single image):
<img src="/screenshot.jpg" alt="POS System" />

// After (responsive with placeholder):
<div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
  <img 
    src="/screenshot.jpg" 
    alt="WK-Hub POS System Dashboard - Showing sales analytics and inventory management"
    className="w-full h-full object-cover"
    loading="lazy"
    srcSet="
      /screenshot-400.jpg 400w,
      /screenshot-800.jpg 800w,
      /screenshot-1200.jpg 1200w
    "
    sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      33vw
    "
  />
</div>
// - Maintains aspect ratio
// - Descriptive alt text (SEO)
// - Lazy loading (performance)
// - Multiple image sizes (responsive)
// - Appropriate sizing per breakpoint

// ================================
// 6. INTERACTIVE POS DEMO (Mobile-Optimized)
// ================================

// Product cards for mobile:
<div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-4">
  {products.map(product => (
    <button
      onClick={() => addToCart(product)}
      className="
        bg-white rounded-xl p-3 sm:p-4
        min-h-[100px] sm:min-h-[120px]
        flex flex-col items-center justify-center
        active:scale-95 transition-transform
        shadow-sm hover:shadow-md
      "
    >
      <span className="text-2xl sm:text-3xl mb-2">{product.emoji}</span>
      <span className="text-xs sm:text-sm font-medium truncate w-full text-center">
        {product.name}
      </span>
      <span className="text-xs sm:text-sm font-bold text-indigo-600">
        EGP {product.price}
      </span>
    </button>
  ))}
</div>
// - 2 columns on tiny screens (< 375px)
// - 3 columns on standard phones
// - Smaller gaps on mobile
// - Minimum height for consistent sizing
// - Scaled down text on mobile

// ================================
// 7. PRICING CARDS (Mobile Stack)
// ================================

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
  {pricingPlans.map((plan, index) => (
    <div 
      className={`
        relative bg-white rounded-3xl p-6 sm:p-8
        border-2 transition-all
        ${plan.featured 
          ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-100 md:scale-105' 
          : 'border-gray-200 shadow-lg'
        }
      `}
    >
      {plan.featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      )}
      
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
      <div className="text-3xl sm:text-4xl font-black text-indigo-600 mb-4">
        EGP {plan.price}
        <span className="text-base sm:text-lg text-gray-500 font-normal">/month</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm sm:text-base">
            <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="
        w-full min-h-[48px] py-3 px-6 rounded-xl font-semibold
        transition-all active:scale-95
        ${plan.featured
          ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }
      ">
        Choose {plan.name}
      </button>
    </div>
  ))}
</div>
// - Stacks vertically on mobile
// - 3 columns on desktop
// - Featured card stands out (slightly larger on desktop only)
// - Responsive text sizes
// - Full-width buttons on mobile

// ================================
// 8. FAQ ACCORDION (Touch-Friendly)
// ================================

{faqs.map((faq, index) => (
  <div key={index} className="border-b border-gray-200">
    <button
      onClick={() => toggleFaq(index)}
      className="
        w-full min-h-[60px] px-4 py-4
        flex items-center justify-between
        text-left hover:bg-gray-50
        transition-colors
      "
      aria-expanded={openFaq === index}
    >
      <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
        {faq.question}
      </span>
      <ChevronDownIcon 
        className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${
          openFaq === index ? 'rotate-180' : ''
        }`}
      />
    </button>
    
    <AnimatePresence>
      {openFaq === index && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="px-4 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
))}
// - Minimum 60px height (easy to tap)
// - Large chevron icon (6x6 = 24px)
// - Smooth animation
// - Responsive text
// - Proper aria-expanded for accessibility

// ================================
// 9. PERFORMANCE: LAZY LOADING SECTIONS
// ================================

import { lazy, Suspense } from 'react'

// Split large components
const PricingSection = lazy(() => import('./sections/PricingSection'))
const ModuleDeepDive = lazy(() => import('./sections/ModuleDeepDive'))
const FAQSection = lazy(() => import('./sections/FAQSection'))

// Use with loading fallback
<Suspense fallback={
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
  </div>
}>
  <PricingSection />
</Suspense>
// - Reduces initial bundle size
// - Loads sections as user scrolls
// - Shows spinner while loading
// - Improves Time to Interactive

// ================================
// 10. MOBILE-SPECIFIC UTILITIES
// ================================

// Hide on mobile, show on desktop
<div className="hidden md:block">Desktop only content</div>

// Show on mobile, hide on desktop
<div className="block md:hidden">Mobile only content</div>

// Different layouts per breakpoint
<div className="flex-col sm:flex-row">Stacks on mobile, row on tablet+</div>

// Responsive padding
<section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
  Content with responsive padding
</section>

// Responsive text sizing
<p className="text-sm sm:text-base lg:text-lg">
  Scales from 14px → 16px → 18px
</p>

// Safe area for notched devices
<div className="pt-safe-top pb-safe-bottom">
  Content respects device notch
</div>

// ================================
// 11. ACCESSIBILITY IMPROVEMENTS
// ================================

// Proper button labels
<button 
  aria-label="Close mobile menu"
  aria-expanded={isOpen}
  className="..."
>
  <XIcon />
</button>

// Skip to main content link
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white px-4 py-2 z-50"
>
  Skip to main content
</a>

// Semantic HTML
<main id="main-content">
  <section aria-labelledby="features-heading">
    <h2 id="features-heading">Key Features</h2>
    ...
  </section>
</main>

// Focus visible states
<button className="focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
  Button with visible focus
</button>

// ================================
// SUMMARY: MOBILE-FIRST CHECKLIST
// ================================

/*
✅ Text readable (16px+ base size)
✅ Touch targets ≥ 44x44px
✅ Images responsive (srcset, lazy loading)
✅ Grids stack on mobile
✅ Navigation accessible
✅ Safe area support (notches)
✅ Performance optimized (code splitting)
✅ Animations smooth (hardware accelerated)
✅ Accessibility (ARIA, focus states)
✅ SEO meta tags
✅ Bilingual support (EN + AR RTL)
*/

// ================================
// TESTING COMMANDS
// ================================

// 1. Run dev server
npm run dev

// 2. Build for production
npm run build

// 3. Preview production build
npm run preview

// 4. Check bundle size
npm run build && ls -lh dist/

// 5. Lighthouse audit
// Chrome DevTools → Lighthouse → Mobile → Run

// 6. Test on real devices
// Option 1: Network sharing
// - Get local IP: ipconfig (Windows) or ifconfig (Mac/Linux)
// - Access from phone: http://192.168.x.x:8000

// Option 2: ngrok tunneling
npx ngrok http 8000
// - Use provided HTTPS URL on any device
