import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

// Mouse follower glow
function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 hidden lg:block"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
      }}
      animate={{
        x: mousePos.x - 250,
        y: mousePos.y - 250,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    />
  )
}

// Feature card with hover effects
function FeatureCard({ icon, title, desc, benefits, delay }: { 
  icon: string
  title: string
  desc: string
  benefits: string[]
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-5xl mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{desc}</p>
        <ul className="space-y-2">
          {benefits.map((benefit, j) => (
            <li key={j} className="flex items-center text-sm text-gray-700">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 text-xs">✓</span>
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// Pricing Card
function POSDemo() {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([])
  const products = [
    { id: 1, name: 'Premium T-Shirt', price: 299, emoji: '👕' },
    { id: 2, name: 'Designer Jeans', price: 599, emoji: '👖' },
    { id: 3, name: 'Running Shoes', price: 899, emoji: '👟' },
    { id: 4, name: 'Smart Watch', price: 1499, emoji: '⌚' },
    { id: 5, name: 'Sunglasses', price: 399, emoji: '🕶️' },
    { id: 6, name: 'Backpack', price: 449, emoji: '🎒' },
  ]

  const addToCart = (product: typeof products[0]) => {
    setCartItems([...cartItems, product])
  }

  const clearCart = () => setCartItems([])

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="text-gray-400 text-sm font-mono">WK-Hub POS</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <motion.button
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="bg-gray-700/50 hover:bg-gray-700 rounded-xl p-4 text-center transition-colors"
            >
              <span className="text-3xl block mb-2">{product.emoji}</span>
              <span className="text-white text-xs font-medium block truncate">{product.name}</span>
              <span className="text-cyan-400 text-sm font-bold">EGP {product.price}</span>
            </motion.button>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-semibold">Cart</span>
            <button onClick={clearCart} className="text-gray-400 text-sm hover:text-white">Clear</button>
          </div>
          <div className="space-y-2 h-32 overflow-y-auto mb-4">
            {cartItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between text-sm text-gray-300 bg-gray-700/30 rounded-lg px-3 py-2"
              >
                <span>{item.name}</span>
                <span className="text-cyan-400">EGP {item.price}</span>
              </motion.div>
            ))}
            {cartItems.length === 0 && (
              <div className="text-gray-500 text-center py-8 text-sm">Click products to add</div>
            )}
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">Total</span>
              <span className="text-2xl font-bold text-white">EGP {total.toLocaleString()}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-semibold"
            >
              Complete Sale 💳
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Pricing Card
function PricingCard({ plan, isPopular = false }: { 
  plan: { name: string; price: string; period: string; desc: string; features: string[] }
  isPopular?: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative rounded-3xl p-8 ${
        isPopular
          ? 'bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-2xl shadow-indigo-500/30 scale-105 z-10'
          : 'bg-white border-2 border-gray-100'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
      <p className={`text-sm mb-4 ${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>{plan.desc}</p>
      <div className="mb-6">
        <span className={`text-5xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
        <span className={`text-sm ${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, j) => (
          <li key={j} className={`flex items-center text-sm ${isPopular ? 'text-white' : 'text-gray-700'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${isPopular ? 'bg-white/20' : 'bg-green-100'}`}>
              <span className={isPopular ? 'text-white text-xs' : 'text-green-600 text-xs'}>✓</span>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-xl font-semibold transition-colors ${
          isPopular
            ? 'bg-white text-indigo-600 hover:bg-gray-100'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const features = [
    { icon: '🛒', title: 'Advanced POS', desc: 'Lightning-fast checkout with barcode scanning, split payments, and offline mode', benefits: ['Touch & keyboard', 'Multiple payments', 'Receipt customization'] },
    { icon: '📦', title: 'Smart Inventory', desc: 'Stock control with variants, batch operations, and auto-reorder alerts', benefits: ['Product variants', 'Low stock alerts', 'Stock transfers'] },
    { icon: '�', title: 'Stocktaking', desc: 'Full inventory counts, partial counts, and discrepancy management with audit trails', benefits: ['Scheduled counts', 'Variance reports', 'Auto adjustments'] },
    { icon: '📜', title: 'Item History Trail', desc: 'Complete audit trail for every product movement, price change, and stock adjustment', benefits: ['Full traceability', 'Change history', 'User tracking'] },
    { icon: '👥', title: 'CRM & Loyalty', desc: 'Customer profiles, loyalty points, groups, and purchase history', benefits: ['Points system', 'Group discounts', 'Analytics'] },
    { icon: '💰', title: 'Full Accounting', desc: 'Double-entry accounting, chart of accounts, and financial reports', benefits: ['Auto journal', 'Financial reports', 'Multi-currency'] },
    { icon: '📊', title: 'Analytics & Reports', desc: 'Real-time dashboards, 15+ report types, export to Excel/PDF', benefits: ['Live dashboards', 'Custom reports', 'Data export'] },
    { icon: '🏢', title: 'Multi-Branch', desc: 'Manage multiple locations with separate inventory and consolidated reports', benefits: ['Branch control', 'Stock transfers', 'Central reports'] },
    { icon: '👨‍💼', title: 'HR Management', desc: 'Employee records, attendance tracking, payroll, and performance management', benefits: ['Time tracking', 'Leave management', 'Payroll reports'] },
    { icon: '🔒', title: 'Enterprise Security', desc: 'Bank-grade encryption, MFA, role-based access, and audit logs', benefits: ['Multi-factor auth', 'Audit logging', 'Session tracking'] },
    { icon: '📴', title: 'Offline-First', desc: 'Continue selling without internet. Auto-sync when connected', benefits: ['Local storage', 'Auto-sync', 'No data loss'] },
    { icon: '🌐', title: 'Arabic-First', desc: 'Full RTL support, Arabic interface, Egyptian tax compliance (ETA)', benefits: ['RTL interface', 'Arabic reports', 'ETA ready'] },
  ]

  const pricing = [
    { name: 'Starter', price: 'EGP 999', period: '/month', desc: 'Perfect for small shops', features: ['1 Branch', '5,000 Products', '3 Users', 'Basic Reports', 'Email Support', 'Offline Mode'] },
    { name: 'Professional', price: 'EGP 2,499', period: '/month', desc: 'For growing businesses', features: ['5 Branches', 'Unlimited Products', '15 Users', 'Advanced Reports', 'Priority Support', 'API Access', 'Loyalty Programs', 'AI Assistant'] },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Unlimited Branches', 'Unlimited Everything', '24/7 Support', 'Custom Development', 'White-label', 'SLA Guarantee', 'On-premise Option', 'Dedicated Manager'] },
  ]

  const faqs = [
    { q: 'How quickly can we start?', a: 'Most businesses are operational within 24 hours. We provide free migration, training, and setup assistance.' },
    { q: 'What if internet goes down?', a: 'WK-Hub is offline-first. Continue selling without interruption. Auto-sync when connected.' },
    { q: 'Can we migrate from our current POS?', a: 'Yes! We import from Excel, CSV, Square, Shopify, Lightspeed. Migration is free.' },
    { q: 'Is our data secure?', a: 'Bank-grade AES-256 encryption, regular audits, multi-factor auth, and real-time backups.' },
    { q: 'What support do you provide?', a: 'Email (24h), Priority (4h), or 24/7 dedicated support depending on your plan.' },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MouseGlow />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <FloatingParticles />
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <motion.div 
          style={{ y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-8">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mr-2"
              >
                �
              </motion.span>
              Launching 2025 - Built for Egyptian Businesses
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 leading-tight">
              The Complete
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mt-2">
                Business Solution
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              POS, Inventory, Accounting, HR, and Multi-Branch Management — all in one platform.
              <span className="font-semibold text-gray-900"> Works offline.</span> Syncs automatically.
              <span className="font-semibold text-indigo-600"> Arabic-first design.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-xl"
              >
                Start Free Trial →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-gray-800 rounded-2xl font-bold text-lg border-2 border-gray-200 shadow-lg hover:border-gray-300"
              >
                Watch Demo ▶
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-500">✓ No credit card ✓ Free migration ✓ Cancel anytime</p>
          </motion.div>
          
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Interactive POS Demo Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience the <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Power</span>
            </h2>
            <p className="text-xl text-gray-600">Try our interactive POS demo right here</p>
            <p className="text-sm text-gray-400 mt-2">* This is a demonstration. Actual interface may vary.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <POSDemo />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Lightning-Fast Checkout</h3>
              <p className="text-gray-600 mb-8">
                Experience our touch-optimized POS interface. Add products with a tap, 
                process split payments, and complete sales in seconds. Works seamlessly 
                online and offline.
              </p>
              <ul className="space-y-4">
                {['Barcode scanning support', 'Split payments (Cash + Card + Wallet)', 'Offline-first architecture', 'Custom receipt printing'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600">✓</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600">12 powerful modules in one integrated platform</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Build Your App CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-indigo-200 mb-10">
              Tell us about your business and we'll build a tailored solution that fits your exact needs.
              Custom features, white-label options, and dedicated support.
            </p>
            <Link to="/build">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-indigo-900 rounded-2xl font-bold text-lg shadow-xl hover:bg-gray-100"
              >
                Build Your App →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Module Deep Dive Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Deep Dive Into Our Modules
            </h2>
            <p className="text-xl text-gray-600">Explore the features that make WK-Hub exceptional</p>
          </motion.div>

          {/* POS Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Point of Sale</h3>
                <p className="text-gray-600 mb-6">
                  Our POS system is designed for speed and reliability. Process transactions in seconds, 
                  handle split payments across multiple methods, and never lose a sale with offline mode. 
                  Perfect for retail stores, restaurants, and service businesses.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Barcode scanning', 'Split payments', 'Offline mode', 'Custom receipts', 'Touch optimized', 'Quick keys'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">POS Screenshot Coming Soon</span>
              </div>
            </motion.div>
          </div>

          {/* Inventory Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Inventory Screenshot Coming Soon</span>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Inventory Management</h3>
                <p className="text-gray-600 mb-6">
                  Take control of your stock with real-time tracking, automatic reorder points, and 
                  powerful variant management. Handle products with sizes, colors, and custom attributes. 
                  Transfer stock between branches with full audit trails.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Product variants', 'Batch operations', 'Low stock alerts', 'Stock transfers', 'Supplier management', 'Cost tracking'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Stocktaking Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Stocktaking</h3>
                <p className="text-gray-600 mb-6">
                  Conduct full inventory counts or targeted partial counts with ease. Our stocktaking 
                  module handles variance calculations, generates discrepancy reports, and automatically 
                  adjusts inventory levels. Schedule regular counts and track accuracy over time.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Full counts', 'Partial counts', 'Variance reports', 'Auto adjustments', 'Count scheduling', 'Audit trails'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Stocktaking Screenshot Coming Soon</span>
              </div>
            </motion.div>
          </div>

          {/* Item History Trail Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Item History Screenshot Coming Soon</span>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-5xl mb-4">📜</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Item History Trail</h3>
                <p className="text-gray-600 mb-6">
                  Every product tells a story. Track every movement, price change, and stock adjustment 
                  with complete traceability. Know exactly who changed what and when. Essential for 
                  compliance, auditing, and inventory control.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Movement tracking', 'Price history', 'Stock adjustments', 'User attribution', 'Date filtering', 'Export reports'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Accounting Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Full Accounting</h3>
                <p className="text-gray-600 mb-6">
                  Complete double-entry accounting system built into your business platform. Automatic 
                  journal entries from sales, customizable chart of accounts, and comprehensive financial 
                  reports including balance sheets, income statements, and cash flow.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Double-entry', 'Chart of accounts', 'Auto journals', 'Balance sheet', 'Income statement', 'Cash flow'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Accounting Screenshot Coming Soon</span>
              </div>
            </motion.div>
          </div>

          {/* HR Module */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">HR Screenshot Coming Soon</span>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-5xl mb-4">👨‍💼</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">HR Management</h3>
                <p className="text-gray-600 mb-6">
                  Manage your team efficiently with comprehensive HR tools. Track employee records, 
                  monitor attendance, process payroll, and evaluate performance. Integrated with POS 
                  for cashier tracking and sales attribution.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Employee records', 'Attendance', 'Payroll', 'Leave management', 'Performance', 'Cashier tracking'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">No hidden fees. Cancel anytime.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {pricing.map((plan, i) => (
              <PricingCard key={i} plan={plan} isPopular={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: activeFaq === i ? 45 : 0 }}
                    className="text-2xl text-indigo-600"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-100"
              >
                Start Free Trial
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
