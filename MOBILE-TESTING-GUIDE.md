# 📱 Mobile Testing Guide for WK Marketing Site

## Quick Test URLs

**Local Development**: http://localhost:8000  
**English Homepage**: http://localhost:8000/  
**Arabic Homepage**: http://localhost:8000/ar

---

## 🧪 Testing with Chrome DevTools

### 1. Open DevTools Mobile Emulator
```
1. Open http://localhost:8000 in Chrome
2. Press F12 (or Ctrl+Shift+I)
3. Press Ctrl+Shift+M (Toggle device toolbar)
4. Select device from dropdown
```

### 2. Test These Devices

#### Small Phones (320px - 375px)
- **iPhone SE** (375 x 667) - Most critical
- **Galaxy Fold** (280 x 653) - Narrowest
- **iPhone 5/SE** (320 x 568) - Minimum width

#### Standard Phones (375px - 414px)
- **iPhone 12/13 Pro** (390 x 844)
- **iPhone 14 Pro Max** (430 x 932)
- **Pixel 5** (393 x 851)
- **Samsung Galaxy S20** (360 x 800)

#### Tablets (768px - 1024px)
- **iPad Mini** (768 x 1024)
- **iPad Air** (820 x 1180)
- **iPad Pro** (1024 x 1366)

### 3. Test Both Orientations
- Portrait (default)
- Landscape (rotate device icon)

---

## ✅ Mobile Functionality Checklist

### Navigation
- [ ] Mobile menu button appears on screens < 768px
- [ ] Mobile menu opens smoothly with animation
- [ ] Mobile menu closes when clicking a link
- [ ] Mobile menu closes when clicking outside
- [ ] All nav links are readable and tappable
- [ ] Language switcher (العربية) works
- [ ] "Start Free Trial" button is visible and works

### Hero Section
- [ ] Headline text is readable (not too large)
- [ ] Gradient animation plays smoothly
- [ ] Subtitle is visible and readable
- [ ] CTA buttons are large enough (min 44x44px)
- [ ] CTA buttons don't overlap on small screens
- [ ] Floating particles don't lag on mobile
- [ ] Scroll indicator is visible

### Interactive POS Demo
- [ ] Product cards are tappable (not too small)
- [ ] Products add to cart on tap
- [ ] Cart updates immediately
- [ ] Total price calculates correctly
- [ ] "Clear Cart" button works
- [ ] Layout doesn't break on small screens
- [ ] Grid adjusts for mobile (stacks properly)

### Features Section
- [ ] All 12 feature cards are visible
- [ ] Cards stack in single column on mobile
- [ ] Icons are clear and visible
- [ ] Text is readable (not cramped)
- [ ] Hover effects work on touch (tap)
- [ ] Benefits list is readable

### Module Deep Dive
- [ ] 6 module sections display correctly
- [ ] Images/placeholders don't break layout
- [ ] Text alternates left/right properly
- [ ] Content is readable on mobile
- [ ] Sections stack vertically on mobile

### Pricing Section
- [ ] 3 pricing cards are visible
- [ ] Cards stack vertically on mobile
- [ ] "Professional" card stands out
- [ ] All features are readable
- [ ] CTA buttons are tappable
- [ ] Prices are clear (EGP 999, etc.)

### FAQ Section
- [ ] All 5 questions are visible
- [ ] Accordion opens/closes smoothly
- [ ] Text is readable when expanded
- [ ] Icons rotate correctly
- [ ] No layout breaking

### Footer
- [ ] All footer links work
- [ ] Social media icons are tappable
- [ ] Copyright text is visible
- [ ] Footer doesn't overlap content

---

## 🎯 Touch Target Testing

### Minimum Size: 44x44px (Apple HIG)

#### Test These Elements
```
✅ Primary CTA buttons (Start Free Trial)
✅ Mobile menu button (hamburger icon)
✅ Mobile menu links
✅ Product cards in POS demo
✅ Feature cards
✅ Pricing cards CTA buttons
✅ FAQ accordion buttons
✅ Footer links
✅ Language switcher
```

### How to Check
1. Open Chrome DevTools
2. Go to "Rendering" tab (More tools → Rendering)
3. Check "Show layout shift regions"
4. Inspect element → Check computed width/height

---

## 🚀 Performance Testing

### Chrome Lighthouse Audit
```
1. Open http://localhost:8000
2. Press F12
3. Click "Lighthouse" tab
4. Select "Mobile"
5. Select all categories (Performance, Accessibility, Best Practices, SEO)
6. Click "Analyze page load"
```

### Target Scores
- **Performance**: 90+ (mobile)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Common Issues to Fix
- Unoptimized images (use WebP)
- Large bundle size (code splitting)
- Missing alt texts on images
- Low contrast ratios
- Missing ARIA labels

---

## 🔍 SEO Testing

### 1. Meta Tags Verification
```
View Page Source (Ctrl+U) and check:
✅ <title> is descriptive and < 60 characters
✅ <meta name="description"> is present and < 160 chars
✅ <meta property="og:image"> exists
✅ <meta name="twitter:card"> exists
✅ <meta name="viewport"> is present
✅ <meta name="robots"> allows indexing
✅ <link rel="canonical"> exists
```

### 2. Structured Data Testing
```
1. Go to https://search.google.com/test/rich-results
2. Paste URL: http://localhost:8000
3. Click "Test URL"
4. Check for JSON-LD SoftwareApplication schema
```

### 3. Open Graph Testing
```
Facebook:
https://developers.facebook.com/tools/debug/
Paste: http://localhost:8000
Click "Debug"

Twitter:
https://cards-dev.twitter.com/validator
Paste: http://localhost:8000
Click "Preview card"
```

### 4. Sitemap Testing
```
Visit: http://localhost:8000/sitemap.xml
Check:
✅ All 14 pages listed (7 EN + 7 AR)
✅ hreflang alternates present
✅ Valid XML format
```

### 5. Robots.txt Testing
```
Visit: http://localhost:8000/robots.txt
Check:
✅ User-agent: * present
✅ Allow: / present
✅ Sitemap URL listed
```

---

## 📊 Network Performance Testing

### Simulate Slow 3G Connection
```
1. Open Chrome DevTools
2. Go to "Network" tab
3. Change "No throttling" to "Slow 3G"
4. Reload page (Ctrl+R)
5. Check:
   - Time to Interactive < 5s
   - First Contentful Paint < 3s
   - Images load progressively
```

### Check Bundle Size
```
1. Run: npm run build
2. Check dist/ folder size
3. Target: < 500KB total
```

---

## 🌍 Bilingual Testing

### English Version (/)
- [ ] All text is in English
- [ ] Left-to-right layout
- [ ] Navigation works
- [ ] All pages accessible

### Arabic Version (/ar)
- [ ] All text is in Arabic
- [ ] Right-to-left layout (RTL)
- [ ] Navigation works
- [ ] All pages accessible
- [ ] Font renders correctly (Cairo/Tajawal)

### Language Switching
- [ ] "العربية" button switches to Arabic
- [ ] "English" button switches back
- [ ] URL updates correctly (/ar)
- [ ] Layout flips for RTL

---

## 🎨 Visual Testing

### Typography
- [ ] Headings are readable (proper size hierarchy)
- [ ] Body text is at least 16px
- [ ] Line height is comfortable (1.5-1.6)
- [ ] No text overflow or truncation

### Colors & Contrast
- [ ] Text on background meets WCAG AA (4.5:1)
- [ ] Links are distinguishable
- [ ] Focus states are visible
- [ ] Gradient text is readable

### Spacing
- [ ] No cramped sections
- [ ] Consistent padding/margins
- [ ] Elements don't overlap
- [ ] Cards have proper spacing

### Images
- [ ] Placeholder images don't break
- [ ] No stretched/distorted images
- [ ] Alt texts present (accessibility)
- [ ] Lazy loading works

---

## ⚡ Animation Testing

### Smooth Performance
- [ ] Framer Motion animations don't lag
- [ ] Floating particles run smoothly
- [ ] Mouse glow hidden on mobile (< 1024px)
- [ ] Scroll animations trigger correctly
- [ ] Card hover effects work on touch

### Disable Animations (Accessibility)
```css
/* Test with prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔒 Security & Privacy Testing

### HTTPS (Production Only)
- [ ] All resources load over HTTPS
- [ ] No mixed content warnings
- [ ] SSL certificate valid

### Privacy Links
- [ ] Privacy Policy page exists (/privacy)
- [ ] Terms of Service exists (/terms)
- [ ] Security page exists (/security)
- [ ] All links work

---

## 🐛 Cross-Browser Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Chrome (Android)
- [ ] Safari (iOS)
- [ ] Samsung Internet
- [ ] Firefox Mobile

---

## 📝 Testing Checklist Summary

### Critical (Must Pass)
- ✅ Mobile menu works
- ✅ All pages load on mobile
- ✅ Touch targets ≥ 44x44px
- ✅ Text is readable (no overflow)
- ✅ CTA buttons work
- ✅ SEO meta tags present
- ✅ Sitemap accessible

### Important (Should Pass)
- ✅ Lighthouse score > 90
- ✅ Animations smooth
- ✅ Images load correctly
- ✅ Bilingual switching works
- ✅ Forms validate (if any)

### Nice to Have (Can Improve)
- ✅ PWA installable
- ✅ Offline support
- ✅ Perfect Lighthouse 100
- ✅ Advanced animations

---

## 🚦 Testing Status

After completing all tests above, fill out:

**Date Tested**: ___________  
**Tested By**: ___________  
**Device Used**: ___________

### Results
- [ ] All mobile devices tested ✅
- [ ] All pages accessible ✅
- [ ] SEO tags verified ✅
- [ ] Performance acceptable ✅
- [ ] Bilingual working ✅
- [ ] No critical bugs found ✅

### Issues Found
1. ___________
2. ___________
3. ___________

### Notes
___________________________________________
___________________________________________
___________________________________________

---

**Last Updated**: 2026-01-31  
**Version**: 1.0  
**Site**: WK Marketing (http://localhost:8000)
