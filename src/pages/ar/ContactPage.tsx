import { useState } from 'react'
import { motion } from 'framer-motion'

const contactMethods = [
  {
    icon: '📧',
    title: 'راسلنا',
    desc: 'للاستفسارات العامة والدعم',
    value: 'support@wk-hub.com',
    action: 'mailto:support@wk-hub.com',
  },
  {
    icon: '📞',
    title: 'اتصل بنا',
    desc: 'من السبت للخميس، ٩ص - ٦م',
    value: '+20 2 1234 5678',
    action: 'tel:+20212345678',
  },
  {
    icon: '💬',
    title: 'دردش معنا',
    desc: 'دعم فوري متاح ٢٤/٧',
    value: 'ابدأ المحادثة',
    action: '#chat',
  },
  {
    icon: '📍',
    title: 'زر مكتبنا',
    desc: 'تعال قل مرحباً',
    value: 'القاهرة الجديدة، مصر',
    action: '#map',
  },
]

const supportTiers = [
  {
    name: 'دعم المجتمع',
    price: 'مجاناً',
    features: [
      'الوصول للتوثيق',
      'منتديات المجتمع',
      'موارد المساعدة الذاتية',
      'دعم البريد الإلكتروني (٤٨-٧٢ ساعة)',
    ],
    cta: 'ابدأ',
    highlight: false,
  },
  {
    name: 'الدعم الاحترافي',
    price: '٤٩٩ ج.م/شهر',
    features: [
      'كل مميزات المجتمع',
      'دعم ذو أولوية عبر البريد',
      'دعم الدردشة المباشرة',
      'وقت استجابة ٤ ساعات',
      'جلسات تدريب شهرية',
    ],
    cta: 'اشترك الآن',
    highlight: true,
  },
  {
    name: 'دعم المؤسسات',
    price: 'أسعار مخصصة',
    features: [
      'كل مميزات الاحترافي',
      'مدير حساب مخصص',
      'دعم ٢٤/٧',
      'دعم الهاتف',
      'تدريب في الموقع',
      'تكامل مخصص',
    ],
    cta: 'تواصل للسعر',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'ما سرعة الرد على الاستفسارات؟',
    a: 'يرد دعم المجتمع خلال ٤٨-٧٢ ساعة. الدعم الاحترافي خلال ٤ ساعات. دعم المؤسسات خلال ساعة واحدة.',
  },
  {
    q: 'هل تقدمون دعماً بالعربية؟',
    a: 'نعم! فريق الدعم لدينا يجيد العربية والإنجليزية بالكامل.',
  },
  {
    q: 'هل يمكنني ترقية خطة الدعم؟',
    a: 'بالطبع! يمكنك الترقية في أي وقت من إعدادات حسابك.',
  },
  {
    q: 'هل تقدمون دعماً في الموقع؟',
    a: 'نعم، لعملاء المؤسسات. نقدم تدريباً في الموقع ومساعدة في الإعداد.',
  },
]

export default function ContactPageAr() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: 'general',
  })
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" dir="rtl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12"
        >
          <div className="text-7xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تم إرسال رسالتك!</h2>
          <p className="text-gray-600 mb-8">سنتواصل معك قريباً.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700"
          >
            إرسال رسالة أخرى
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-600">
              لديك سؤال أو تحتاج مساعدة؟ نحن هنا لمساعدتك على النجاح.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center block"
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{method.desc}</p>
                <p className="text-indigo-600 font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
                      placeholder="أحمد محمد"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
                      placeholder="ahmed@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الشركة (اختياري)</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
                      placeholder="شركتك"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نوع الاستفسار</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
                    >
                      <option value="general">استفسار عام</option>
                      <option value="sales">المبيعات</option>
                      <option value="support">الدعم الفني</option>
                      <option value="partnership">شراكة</option>
                      <option value="enterprise">المؤسسات</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الموضوع</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
                    placeholder="كيف يمكننا مساعدتك؟"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
                    placeholder="أخبرنا المزيد..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700"
                >
                  إرسال الرسالة
                </motion.button>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full px-6 py-4 text-right flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-900">{faq.q}</span>
                      <span className="text-xl text-gray-500">
                        {expandedFaq === i ? '−' : '+'}
                      </span>
                    </button>
                    {expandedFaq === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        className="px-6 pb-4 text-gray-600"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-4">روابط سريعة</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700">
                    <span className="me-2">📚</span>
                    مركز المساعدة والتوثيق
                  </a>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700">
                    <span className="me-2">🎥</span>
                    دروس الفيديو
                  </a>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700">
                    <span className="me-2">💬</span>
                    منتدى المجتمع
                  </a>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700">
                    <span className="me-2">📋</span>
                    حالة النظام
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خطط الدعم</h2>
            <p className="text-xl text-gray-600">اختر مستوى الدعم المناسب لعملك</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 ${
                  tier.highlight
                    ? 'bg-gradient-to-br from-indigo-600 to-cyan-500 text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className={`text-3xl font-bold mb-6 ${tier.highlight ? 'text-white' : 'text-indigo-600'}`}>
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <span className={`me-2 ${tier.highlight ? 'text-cyan-200' : 'text-green-500'}`}>✓</span>
                      <span className={tier.highlight ? 'text-indigo-100' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold ${
                    tier.highlight
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
