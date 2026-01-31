import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

interface FormData {
  projectType: string
  platform: string[]
  features: string[]
  designStyle: string
  budget: string
  timeline: string
  name: string
  email: string
  phone: string
  company: string
  projectDescription: string
}

const projectTypes = [
  { id: 'mobile', icon: '📱', label: 'تطبيق موبايل', desc: 'iOS، Android، أو متعدد المنصات' },
  { id: 'web', icon: '🌐', label: 'تطبيق ويب', desc: 'SaaS، لوحة تحكم، بوابة' },
  { id: 'desktop', icon: '💻', label: 'برنامج سطح مكتب', desc: 'Windows، Mac، Linux' },
  { id: 'ecommerce', icon: '🛒', label: 'متجر إلكتروني', desc: 'متجر أونلاين، سوق' },
  { id: 'pos', icon: '🏪', label: 'نظام نقاط بيع', desc: 'نقاط البيع، تجزئة' },
  { id: 'custom', icon: '⚙️', label: 'حل مخصص', desc: 'مؤسسات، تكامل' },
]

const platformOptions = [
  { id: 'ios', icon: '🍎', label: 'iOS' },
  { id: 'android', icon: '🤖', label: 'Android' },
  { id: 'web', icon: '🌐', label: 'ويب' },
  { id: 'windows', icon: '🪟', label: 'Windows' },
  { id: 'mac', icon: '🖥️', label: 'macOS' },
  { id: 'linux', icon: '🐧', label: 'Linux' },
  { id: 'cross', icon: '🔄', label: 'متعدد المنصات' },
]

const featureOptions = [
  { id: 'auth', icon: '🔐', label: 'تسجيل المستخدمين', desc: 'تسجيل دخول، تسجيل، OAuth' },
  { id: 'payments', icon: '💳', label: 'معالجة الدفع', desc: 'بطاقات، محافظ، اشتراكات' },
  { id: 'database', icon: '🗄️', label: 'قاعدة بيانات', desc: 'تخزين سحابي، APIs' },
  { id: 'offline', icon: '📴', label: 'دعم غير متصل', desc: 'العمل بدون إنترنت' },
  { id: 'reports', icon: '📊', label: 'تقارير وتحليلات', desc: 'لوحات بيانات، رسوم بيانية' },
  { id: 'notifications', icon: '🔔', label: 'إشعارات فورية', desc: 'تنبيهات، تذكيرات' },
  { id: 'chat', icon: '💬', label: 'دردشة ورسائل', desc: 'تواصل فوري' },
  { id: 'maps', icon: '🗺️', label: 'خرائط وموقع', desc: 'GPS، تحديد جغرافي' },
  { id: 'media', icon: '📸', label: 'رفع الوسائط', desc: 'صور، فيديو، ملفات' },
  { id: 'multilang', icon: '🌍', label: 'متعدد اللغات', desc: 'RTL، توطين' },
  { id: 'api', icon: '🔗', label: 'تكامل API', desc: 'خدمات طرف ثالث' },
  { id: 'admin', icon: '👨‍💼', label: 'لوحة إدارة', desc: 'لوحة تحكم إدارية' },
]

const designStyles = [
  { id: 'modern', label: 'حديث ومينيمال', desc: 'نظيف، واسع، معاصر' },
  { id: 'corporate', label: 'رسمي واحترافي', desc: 'ثقة، موثوقية، أعمال' },
  { id: 'playful', label: 'مرح وملون', desc: 'ممتع، جذاب، نابض' },
  { id: 'dark', label: 'الوضع الداكن', desc: 'أنيق، تقني، راقي' },
  { id: 'custom', label: 'تصميم مخصص', desc: 'حسب هوية علامتك' },
]

const budgetOptions = [
  { id: 'starter', label: '$5K - $15K', desc: 'MVP / تطبيق بسيط' },
  { id: 'growth', label: '$15K - $50K', desc: 'تطبيق كامل الميزات' },
  { id: 'enterprise', label: '$50K - $150K', desc: 'حل معقد' },
  { id: 'discuss', label: 'لنتناقش', desc: 'متطلبات مخصصة' },
]

const timelineOptions = [
  { id: '1month', label: 'شهر واحد', desc: 'تسليم سريع' },
  { id: '2-3months', label: '٢-٣ أشهر', desc: 'جدول قياسي' },
  { id: '4-6months', label: '٤-٦ أشهر', desc: 'مشروع معقد' },
  { id: 'flexible', label: 'مرن', desc: 'الجودة أولاً' },
]

function ProgressBar({ step, totalSteps }: { step: number; totalSteps: number }) {
  const steps = ['المشروع', 'المميزات', 'التصميم', 'التواصل']
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex items-center flex-1">
            <motion.div
              initial={false}
              animate={{
                scale: step === i + 1 ? 1.1 : 1,
                backgroundColor: step >= i + 1 ? '#6366f1' : '#e5e7eb',
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            >
              {step > i + 1 ? '✓' : i + 1}
            </motion.div>
            {i < totalSteps - 1 && (
              <div className="flex-1 h-1 mx-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{ width: step > i + 1 ? '100%' : '0%' }}
                  className="h-full bg-indigo-500 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-500 px-3">
        {steps.map((s, i) => (
          <span key={i} className={step === i + 1 ? 'text-indigo-600 font-medium' : ''}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function BuildPageAr() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    platform: [],
    features: [],
    designStyle: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 4

  const updateForm = (key: keyof FormData, value: string | string[]) => {
    setFormData({ ...formData, [key]: value })
  }

  const toggleArrayItem = (key: 'platform' | 'features', item: string) => {
    const current = formData[key]
    if (current.includes(item)) {
      updateForm(key, current.filter(i => i !== item))
    } else {
      updateForm(key, [...current, item])
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.projectType && formData.platform.length > 0
      case 2: return formData.features.length > 0
      case 3: return formData.designStyle && formData.budget && formData.timeline
      case 4: return formData.name && formData.email && formData.projectDescription
      default: return false
    }
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-32 pb-20" dir="rtl">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <span className="text-6xl text-white">✓</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            تم إرسال الطلب!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8"
          >
            سيراجع فريق التطوير متطلبات مشروعك ويتواصل معك خلال ٢٤ ساعة.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-right"
          >
            <h3 className="font-bold text-gray-900 mb-6 text-lg">ماذا يحدث بعد ذلك؟</h3>
            <div className="space-y-5">
              {[
                { icon: '📧', title: 'بريد تأكيد', desc: 'ستستلم تأكيداً بتفاصيل مشروعك' },
                { icon: '📞', title: 'مكالمة استكشاف', desc: 'سيحدد فريقنا مكالمة لمناقشة رؤيتك' },
                { icon: '📋', title: 'عرض وتسعير', desc: 'سنعد عرضاً مفصلاً بالجدول والتكلفة' },
                { icon: '🚀', title: 'بدء التطوير', desc: 'بمجرد الموافقة، نبدأ ببناء مشروع أحلامك' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start bg-gray-50 rounded-xl p-4"
                >
                  <span className="text-3xl ms-4">{item.icon}</span>
                  <div>
                    <span className="font-semibold text-gray-900 block">{item.title}</span>
                    <span className="text-gray-600 text-sm">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <Link to="/ar">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg"
            >
              العودة للرئيسية
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-28 pb-20" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <span className="ms-2">💡</span> حوّل فكرتك إلى واقع
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ابني <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">تطبيق أحلامك</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            سواء كان تطبيق موبايل أو منصة ويب أو برنامج سطح مكتب — نحول أفكارك إلى واقع بأحدث التقنيات.
          </p>
        </motion.div>

        {/* Progress */}
        <ProgressBar step={step} totalSteps={totalSteps} />

        {/* Form Card */}
        <motion.div
          layout
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Project Type & Platform */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ماذا تريد أن تبني؟</h2>
                <p className="text-gray-500 mb-8">اختر نوع المشروع الذي يناسب احتياجاتك</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => updateForm('projectType', type.id)}
                      className={`relative p-6 rounded-2xl border-2 text-right transition-all ${
                        formData.projectType === type.id
                          ? 'border-indigo-500 bg-indigo-50 shadow-lg shadow-indigo-100'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {formData.projectType === type.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 left-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center"
                        >
                          <span className="text-white text-xs">✓</span>
                        </motion.div>
                      )}
                      <span className="text-4xl block mb-3">{type.icon}</span>
                      <span className="font-bold text-gray-900 block text-lg">{type.label}</span>
                      <span className="text-sm text-gray-500">{type.desc}</span>
                    </motion.button>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">المنصة/المنصات المستهدفة</h3>
                <p className="text-gray-500 mb-4">اختر كل المنصات التي تريد دعمها</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {platformOptions.map((platform) => (
                    <motion.button
                      key={platform.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleArrayItem('platform', platform.id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        formData.platform.includes(platform.id)
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-2xl block mb-1">{platform.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{platform.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Features */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ما المميزات التي تحتاجها؟</h2>
                <p className="text-gray-500 mb-8">اختر كل المميزات التي تريدها في تطبيقك</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featureOptions.map((feature) => (
                    <motion.button
                      key={feature.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleArrayItem('features', feature.id)}
                      className={`relative p-5 rounded-xl border-2 text-right transition-all ${
                        formData.features.includes(feature.id)
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <span className="text-2xl ms-3">{feature.icon}</span>
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 block">{feature.label}</span>
                          <span className="text-xs text-gray-500">{feature.desc}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center me-2 ${
                          formData.features.includes(feature.id) ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'
                        }`}>
                          {formData.features.includes(feature.id) && <span className="text-white text-xs">✓</span>}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">💡 نصيحة:</span> لا تقلق إذا لم تكن متأكداً من كل المميزات. 
                    سنساعدك في تحديد النطاق خلال مكالمة الاستكشاف.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 3: Design, Budget & Timeline */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">التصميم وتفاصيل المشروع</h2>
                <p className="text-gray-500 mb-8">ساعدنا في فهم تفضيلاتك</p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4">نمط التصميم المفضل</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                  {designStyles.map((style) => (
                    <motion.button
                      key={style.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => updateForm('designStyle', style.id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        formData.designStyle === style.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-semibold text-gray-900 block text-sm">{style.label}</span>
                      <span className="text-xs text-gray-500">{style.desc}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">نطاق الميزانية</h3>
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => updateForm('budget', option.id)}
                          className={`w-full p-4 rounded-xl border-2 text-right transition-all flex justify-between items-center ${
                            formData.budget === option.id
                              ? 'border-indigo-500 bg-indigo-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block">{option.label}</span>
                            <span className="text-sm text-gray-500">{option.desc}</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.budget === option.id ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'
                          }`}>
                            {formData.budget === option.id && <span className="text-white text-xs">✓</span>}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">الجدول الزمني المتوقع</h3>
                    <div className="space-y-3">
                      {timelineOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => updateForm('timeline', option.id)}
                          className={`w-full p-4 rounded-xl border-2 text-right transition-all flex justify-between items-center ${
                            formData.timeline === option.id
                              ? 'border-indigo-500 bg-indigo-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block">{option.label}</span>
                            <span className="text-sm text-gray-500">{option.desc}</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.timeline === option.id ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'
                          }`}>
                            {formData.timeline === option.id && <span className="text-white text-xs">✓</span>}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Info */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">لنتواصل!</h2>
                <p className="text-gray-500 mb-8">أخبرنا عن نفسك ورؤيتك للمشروع</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors text-right"
                      placeholder="أحمد محمد"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors text-right"
                      placeholder="ahmed@company.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors text-right"
                      placeholder="+20 123 456 7890"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الشركة / المؤسسة</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateForm('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors text-right"
                      placeholder="شركتك المحدودة"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">أخبرنا عن مشروعك *</label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => updateForm('projectDescription', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors resize-none text-right"
                    placeholder="صف فكرة مشروعك، المشكلة التي تحلها، المستخدمين المستهدفين، وأي متطلبات أو إلهامات خاصة..."
                  />
                </div>

                {/* Summary */}
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-4">📋 ملخص المشروع</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">نوع المشروع:</span>
                      <span className="me-2 font-medium text-gray-900">
                        {projectTypes.find(t => t.id === formData.projectType)?.label}
                      </span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">المنصات:</span>
                      <span className="me-2 font-medium text-gray-900">
                        {formData.platform.map(p => platformOptions.find(po => po.id === p)?.label).join('، ')}
                      </span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">الميزانية:</span>
                      <span className="me-2 font-medium text-gray-900">
                        {budgetOptions.find(b => b.id === formData.budget)?.label}
                      </span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">الجدول:</span>
                      <span className="me-2 font-medium text-gray-900">
                        {timelineOptions.find(t => t.id === formData.timeline)?.label}
                      </span>
                    </div>
                    <div className="md:col-span-2 bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">المميزات:</span>
                      <span className="me-2 font-medium text-gray-900">
                        {formData.features.length} مختارة
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-8 border-t border-gray-100">
            <motion.button
              whileHover={{ scale: step > 1 ? 1.02 : 1 }}
              whileTap={{ scale: step > 1 ? 0.98 : 1 }}
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
              className={`px-6 py-3 rounded-xl font-medium flex items-center ${
                step === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              رجوع →
            </motion.button>
            
            {step < totalSteps ? (
              <motion.button
                whileHover={{ scale: canProceed() ? 1.02 : 1 }}
                whileTap={{ scale: canProceed() ? 0.98 : 1 }}
                onClick={() => canProceed() && setStep(s => s + 1)}
                className={`px-8 py-3 rounded-xl font-semibold flex items-center ${
                  canProceed()
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                ← متابعة
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: canProceed() ? 1.02 : 1 }}
                whileTap={{ scale: canProceed() ? 0.98 : 1 }}
                onClick={() => canProceed() && handleSubmit()}
                className={`px-8 py-3 rounded-xl font-semibold ${
                  canProceed()
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-300'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                إرسال الطلب 🚀
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: '⚡', title: 'تسليم سريع', desc: 'نعمل بكفاءة لتسليم مشروعك في الوقت المحدد' },
            { icon: '🎨', title: 'تصميم مخصص', desc: 'تصاميم فريدة مخصصة لهوية علامتك' },
            { icon: '🔧', title: 'دعم كامل', desc: 'صيانة ودعم مستمر بعد الإطلاق' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
