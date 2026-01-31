import { useState, useRef } from 'react'
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
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center me-3">
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

// Interactive POS Demo
function POSDemo() {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([])
  const products = [
    { id: 1, name: 'تيشيرت فاخر', price: 299, emoji: '👕' },
    { id: 2, name: 'جينز مصمم', price: 599, emoji: '👖' },
    { id: 3, name: 'حذاء رياضي', price: 899, emoji: '👟' },
    { id: 4, name: 'ساعة ذكية', price: 1499, emoji: '⌚' },
    { id: 5, name: 'نظارة شمسية', price: 399, emoji: '🕶️' },
    { id: 6, name: 'حقيبة ظهر', price: 449, emoji: '🎒' },
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
          <div className="w-3 h-3 bg-red-500 rounded-full ms-2" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full ms-2" />
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
              <span className="text-cyan-400 text-sm font-bold">{product.price} ج.م</span>
            </motion.button>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-semibold">السلة</span>
            <button onClick={clearCart} className="text-gray-400 text-sm hover:text-white">مسح</button>
          </div>
          <div className="space-y-2 h-32 overflow-y-auto mb-4">
            {cartItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between text-sm text-gray-300 bg-gray-700/30 rounded-lg px-3 py-2"
              >
                <span>{item.name}</span>
                <span className="text-cyan-400">{item.price} ج.م</span>
              </motion.div>
            ))}
            {cartItems.length === 0 && (
              <div className="text-gray-500 text-center py-8 text-sm">اضغط على المنتجات للإضافة</div>
            )}
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">الإجمالي</span>
              <span className="text-2xl font-bold text-white">{total.toLocaleString('ar-EG')} ج.م</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-semibold"
            >
              إتمام البيع 💳
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
          الأكثر شيوعاً
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
            <span className={`w-5 h-5 rounded-full flex items-center justify-center me-3 ${isPopular ? 'bg-white/20' : 'bg-green-100'}`}>
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
        ابدأ الآن
      </motion.button>
    </motion.div>
  )
}

export default function HomePageAr() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const features = [
    { icon: '🛒', title: 'نقاط البيع المتقدمة', desc: 'نظام سريع مع دعم الباركود والدفع المتعدد والوضع غير المتصل', benefits: ['شاشة لمس وكيبورد', 'دفع متعدد', 'إيصالات مخصصة'] },
    { icon: '📦', title: 'إدارة المخزون الذكية', desc: 'تحكم في المخزون مع المتغيرات والعمليات المجمعة وتنبيهات النقص', benefits: ['متغيرات المنتجات', 'تنبيهات النقص', 'تحويلات المخزون'] },
    { icon: '📋', title: 'الجرد', desc: 'جرد كامل أو جزئي مع إدارة الفروقات ومسارات التدقيق', benefits: ['جرد مجدول', 'تقارير الفروقات', 'تعديلات تلقائية'] },
    { icon: '📜', title: 'تاريخ حركة الأصناف', desc: 'سجل كامل لكل حركة منتج وتغيير سعر وتعديل مخزون', benefits: ['تتبع كامل', 'سجل التغييرات', 'تتبع المستخدم'] },
    { icon: '👥', title: 'العملاء والولاء', desc: 'ملفات العملاء ونقاط الولاء والمجموعات وسجل الشراء', benefits: ['نظام النقاط', 'خصومات المجموعات', 'تحليلات'] },
    { icon: '💰', title: 'محاسبة متكاملة', desc: 'محاسبة القيد المزدوج ودليل الحسابات والتقارير المالية', benefits: ['قيود تلقائية', 'تقارير مالية', 'متعدد العملات'] },
    { icon: '📊', title: 'التحليلات والتقارير', desc: 'لوحات بيانات حية و١٥+ نوع تقرير وتصدير Excel/PDF', benefits: ['لوحات حية', 'تقارير مخصصة', 'تصدير البيانات'] },
    { icon: '🏢', title: 'متعدد الفروع', desc: 'إدارة فروع متعددة بمخزون منفصل وتقارير موحدة', benefits: ['تحكم الفروع', 'تحويلات المخزون', 'تقارير مركزية'] },
    { icon: '👨‍💼', title: 'الموارد البشرية', desc: 'سجلات الموظفين والحضور والرواتب وإدارة الأداء', benefits: ['تتبع الوقت', 'إدارة الإجازات', 'تقارير الرواتب'] },
    { icon: '🔒', title: 'أمان المؤسسات', desc: 'تشفير بنكي والتحقق الثنائي والصلاحيات وسجلات التدقيق', benefits: ['تحقق ثنائي', 'سجل التدقيق', 'تتبع الجلسات'] },
    { icon: '📴', title: 'يعمل بدون إنترنت', desc: 'استمر في البيع بدون إنترنت. مزامنة تلقائية عند الاتصال', benefits: ['تخزين محلي', 'مزامنة تلقائية', 'بدون فقدان بيانات'] },
    { icon: '🌍', title: 'عربي أولاً', desc: 'دعم كامل RTL وواجهة عربية والتوافق مع الفاتورة الإلكترونية', benefits: ['واجهة RTL', 'تقارير عربية', 'جاهز للفاتورة'] },
  ]

  const pricing = [
    { name: 'المبتدئ', price: '٩٩٩ ج.م', period: '/شهر', desc: 'مثالي للمتاجر الصغيرة', features: ['فرع واحد', '٥٠٠٠ منتج', '٣ مستخدمين', 'تقارير أساسية', 'دعم بريدي', 'وضع غير متصل'] },
    { name: 'الاحترافي', price: '٢,٤٩٩ ج.م', period: '/شهر', desc: 'للأعمال النامية', features: ['٥ فروع', 'منتجات غير محدودة', '١٥ مستخدم', 'تقارير متقدمة', 'دعم أولوية', 'واجهة API', 'برامج الولاء'] },
    { name: 'المؤسسات', price: 'مخصص', period: '', desc: 'للمؤسسات الكبيرة', features: ['فروع غير محدودة', 'كل شيء غير محدود', 'دعم ٢٤/٧', 'تطوير مخصص', 'علامة بيضاء', 'ضمان SLA', 'خيار محلي', 'مدير مخصص'] },
  ]

  const faqs = [
    { q: 'كم يستغرق البدء؟', a: 'معظم الشركات تبدأ العمل خلال ٢٤ ساعة. نوفر ترحيل مجاني وتدريب ومساعدة في الإعداد.' },
    { q: 'ماذا لو انقطع الإنترنت؟', a: 'WK-Hub يعمل بدون إنترنت أولاً. استمر في البيع بدون انقطاع. مزامنة تلقائية عند الاتصال.' },
    { q: 'هل يمكن الترحيل من نظام آخر؟', a: 'نعم! نستورد من Excel و CSV و Square و Shopify و Lightspeed. الترحيل مجاني.' },
    { q: 'هل بياناتي آمنة؟', a: 'تشفير AES-256 بمستوى بنكي، تدقيق منتظم، تحقق ثنائي، ونسخ احتياطي فوري.' },
    { q: 'ما الدعم المتوفر؟', a: 'بريد (٢٤ ساعة)، أولوية (٤ ساعات)، أو دعم مخصص ٢٤/٧ حسب الباقة.' },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <FloatingParticles />
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
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
                className="ms-2"
              >
                🌟
              </motion.span>
              إطلاق ٢٠٢٥ - مصمم للأعمال المصرية
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 leading-tight">
              الحل الكامل
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mt-2">
                لإدارة أعمالك
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              نقاط البيع، المخزون، المحاسبة، الموارد البشرية، وإدارة الفروع — كلها في منصة واحدة.
              <span className="font-semibold text-gray-900"> يعمل بدون إنترنت.</span> مزامنة تلقائية.
              <span className="font-semibold text-indigo-600"> تصميم عربي أولاً.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-xl"
              >
                ابدأ تجربة مجانية ←
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-gray-800 rounded-2xl font-bold text-lg border-2 border-gray-200 shadow-lg hover:border-gray-300"
              >
                شاهد العرض ▶
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-500">✓ بدون بطاقة ائتمان ✓ ترحيل مجاني ✓ إلغاء في أي وقت</p>
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
              جرب <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">القوة</span>
            </h2>
            <p className="text-xl text-gray-600">جرب عرض نقاط البيع التفاعلي هنا</p>
            <p className="text-sm text-gray-400 mt-2">* هذا عرض توضيحي. قد تختلف الواجهة الفعلية.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <POSDemo />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">دفع سريع كالبرق</h3>
              <p className="text-gray-600 mb-8">
                جرب واجهة نقاط البيع المحسنة للمس. أضف المنتجات بنقرة، 
                عالج الدفع المقسم، وأكمل البيع في ثوانٍ. يعمل بسلاسة 
                متصل أو غير متصل.
              </p>
              <ul className="space-y-4">
                {['دعم مسح الباركود', 'دفع مقسم (نقد + كارت + محفظة)', 'بنية غير متصلة أولاً', 'طباعة إيصالات مخصصة'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center ms-4">
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
              كل ما يحتاجه عملك
            </h2>
            <p className="text-xl text-gray-600">١٢ وحدة قوية في منصة واحدة متكاملة</p>
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              تحتاج حل مخصص؟
            </h2>
            <p className="text-xl text-indigo-200 mb-10">
              أخبرنا عن عملك وسنبني حلاً مخصصاً يناسب احتياجاتك بالضبط.
              ميزات مخصصة، خيارات العلامة البيضاء، ودعم مخصص.
            </p>
            <Link to="/ar/build">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-indigo-900 rounded-2xl font-bold text-lg shadow-xl hover:bg-gray-100"
              >
                ابني تطبيقك ←
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
              نظرة عميقة على الوحدات
            </h2>
            <p className="text-xl text-gray-600">اكتشف الميزات التي تجعل WK-Hub استثنائياً</p>
          </motion.div>

          {/* POS Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">نقاط البيع</h3>
                <p className="text-gray-600 mb-6">
                  نظام نقاط البيع لدينا مصمم للسرعة والموثوقية. معالجة المعاملات في ثوانٍ، 
                  التعامل مع الدفع المقسم عبر طرق متعددة، وعدم فقدان أي بيع مع الوضع غير المتصل. 
                  مثالي للمتاجر والمطاعم وشركات الخدمات.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['مسح الباركود', 'دفع مقسم', 'وضع غير متصل', 'إيصالات مخصصة', 'محسن للمس', 'مفاتيح سريعة'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full ms-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">صورة نقاط البيع قريباً</span>
              </div>
            </motion.div>
          </div>

          {/* Inventory Module */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">صورة المخزون قريباً</span>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">إدارة المخزون</h3>
                <p className="text-gray-600 mb-6">
                  تحكم في مخزونك مع التتبع الفوري ونقاط إعادة الطلب التلقائية 
                  وإدارة المتغيرات القوية. تعامل مع المنتجات بالمقاسات والألوان والخصائص المخصصة. 
                  نقل المخزون بين الفروع مع مسارات تدقيق كاملة.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['متغيرات المنتجات', 'عمليات مجمعة', 'تنبيهات النقص', 'تحويلات المخزون', 'إدارة الموردين', 'تتبع التكلفة'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full ms-2" />
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">محاسبة متكاملة</h3>
                <p className="text-gray-600 mb-6">
                  نظام محاسبة القيد المزدوج الكامل مدمج في منصة عملك. قيود 
                  تلقائية من المبيعات، دليل حسابات قابل للتخصيص، وتقارير مالية شاملة 
                  تشمل الميزانية العمومية وقائمة الدخل والتدفق النقدي.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['قيد مزدوج', 'دليل الحسابات', 'قيود تلقائية', 'ميزانية عمومية', 'قائمة الدخل', 'تدفق نقدي'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full ms-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">صورة المحاسبة قريباً</span>
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
              أسعار بسيطة وشفافة
            </h2>
            <p className="text-xl text-gray-600">بدون رسوم مخفية. إلغاء في أي وقت.</p>
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
              الأسئلة الشائعة
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
                  className="w-full text-right p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
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
              جاهز لتحويل عملك؟
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              ابدأ تجربتك المجانية لمدة ١٤ يوم اليوم. بدون بطاقة ائتمان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-100"
              >
                ابدأ تجربة مجانية
              </motion.button>
              <Link to="/ar/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10"
                >
                  تواصل مع المبيعات
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
