import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const securityFeatures = [
  {
    icon: '🔐',
    title: 'التشفير',
    desc: 'تشفير AES-256 للبيانات المخزنة وTLS 1.3 للبيانات أثناء النقل',
  },
  {
    icon: '🛡️',
    title: 'المصادقة متعددة العوامل',
    desc: 'دعم MFA عبر التطبيق أو الرسائل النصية أو مفاتيح الأمان',
  },
  {
    icon: '👁️',
    title: 'سجلات المراجعة',
    desc: 'تتبع شامل لجميع الأنشطة والتغييرات على البيانات',
  },
  {
    icon: '🔒',
    title: 'التحكم في الوصول',
    desc: 'صلاحيات دقيقة مبنية على الأدوار مع مبدأ أقل امتياز',
  },
  {
    icon: '🌐',
    title: 'أمان الشبكة',
    desc: 'جدران حماية وكشف تسلل ومراقبة على مدار الساعة',
  },
  {
    icon: '💾',
    title: 'النسخ الاحتياطي',
    desc: 'نسخ احتياطية مشفرة متعددة مع تخزين جغرافي موزع',
  },
]

const certifications = [
  { name: 'ISO 27001', desc: 'معيار إدارة أمن المعلومات', icon: '📜' },
  { name: 'PCI DSS', desc: 'معيار أمان بيانات بطاقات الدفع', icon: '💳' },
  { name: 'SOC 2 Type II', desc: 'شهادة التحكم في الخدمات', icon: '🏅' },
  { name: 'GDPR', desc: 'التوافق مع اللائحة الأوروبية لحماية البيانات', icon: '🇪🇺' },
]

const securityPractices = [
  {
    title: 'اختبار الاختراق',
    desc: 'نجري اختبارات اختراق منتظمة من شركات أمنية مستقلة لتحديد نقاط الضعف المحتملة.',
  },
  {
    title: 'مراجعة الكود',
    desc: 'يخضع كل كود لمراجعة أمنية صارمة قبل النشر مع فحص تلقائي للثغرات.',
  },
  {
    title: 'التدريب الأمني',
    desc: 'يتلقى جميع موظفينا تدريباً أمنياً منتظماً ويخضعون لفحوصات خلفية.',
  },
  {
    title: 'الاستجابة للحوادث',
    desc: 'لدينا فريق أمني مخصص متاح ٢٤/٧ للاستجابة لأي حادث أمني.',
  },
  {
    title: 'إدارة الثغرات',
    desc: 'نراقب باستمرار الثغرات الجديدة ونطبق التصحيحات فوراً.',
  },
  {
    title: 'برنامج المكافآت',
    desc: 'نكافئ الباحثين الأمنيين الذين يبلغون عن الثغرات بشكل مسؤول.',
  },
]

const dataProtection = [
  {
    title: 'موقع البيانات',
    content: 'بياناتك مخزنة في مراكز بيانات آمنة في مصر والإمارات. يمكنك اختيار موقع التخزين وفقاً لاحتياجاتك التنظيمية.',
  },
  {
    title: 'عزل البيانات',
    content: 'بيانات كل عميل معزولة تماماً ولا يمكن الوصول إليها من قبل عملاء آخرين. نستخدم بنية متعددة المستأجرين آمنة.',
  },
  {
    title: 'الاحتفاظ والحذف',
    content: 'نحتفظ بالبيانات وفقاً لسياسات محددة وملتزمين بحذف البيانات عند طلبك أو انتهاء الحساب.',
  },
  {
    title: 'قابلية النقل',
    content: 'يمكنك تصدير جميع بياناتك في أي وقت بتنسيقات قياسية (JSON، CSV، PDF).',
  },
]

const faqs = [
  {
    q: 'أين تُخزن بياناتي؟',
    a: 'بياناتك مخزنة في مراكز بيانات آمنة معتمدة في المنطقة. نستخدم تشفيراً على مستوى بنكي لحماية جميع البيانات.',
  },
  {
    q: 'هل يمكنني تمكين المصادقة متعددة العوامل؟',
    a: 'نعم! MFA متاحة لجميع المستخدمين ونوصي بشدة بتفعيلها. يمكنك استخدام تطبيق المصادقة أو الرسائل النصية.',
  },
  {
    q: 'كيف تحمون من فقدان البيانات؟',
    a: 'لدينا نسخ احتياطية تلقائية كل ساعة، مع تخزين مشفر في مواقع جغرافية متعددة واختبار استعادة منتظم.',
  },
  {
    q: 'ماذا يحدث لبياناتي إذا ألغيت حسابي؟',
    a: 'يمكنك تصدير جميع بياناتك قبل الإلغاء. بعد الإلغاء، نحتفظ بالبيانات لمدة ٣٠ يوماً ثم نحذفها نهائياً.',
  },
  {
    q: 'هل أنتم متوافقون مع الفاتورة الإلكترونية المصرية؟',
    a: 'نعم، WK-Hub متوافق تماماً مع متطلبات الفاتورة الإلكترونية المصرية ومنظومة الضرائب.',
  },
]

export default function SecurityPageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse me-2"></span>
              جميع الأنظمة تعمل بشكل طبيعي
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              أمان بمستوى
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                المؤسسات الكبرى
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              بياناتك هي أثمن ما لديك. نحميها بنفس المستوى الذي تستخدمه البنوك والمؤسسات المالية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">مميزات الأمان</h2>
            <p className="text-xl text-gray-600">طبقات متعددة من الحماية لبياناتك</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">الشهادات والامتثال</h2>
            <p className="text-xl text-gray-600">معتمدون من أفضل الجهات العالمية</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border border-gray-200"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">ممارساتنا الأمنية</h2>
            <p className="text-xl text-gray-400">كيف نحافظ على أمان منصتنا</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPractices.map((practice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3">{practice.title}</h3>
                <p className="text-gray-400">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">حماية البيانات</h2>
            <p className="text-xl text-gray-600">كيف نتعامل مع بياناتك</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dataProtection.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة عن الأمان</h2>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              هل لديك أسئلة أمنية؟
            </h2>
            <p className="text-xl text-green-100 mb-10">
              فريقنا الأمني جاهز للإجابة على جميع استفساراتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-green-600 rounded-2xl font-bold text-lg hover:bg-gray-100"
                >
                  تواصل مع فريق الأمان
                </motion.button>
              </Link>
              <a href="mailto:security@wk-hub.com">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10"
                >
                  security@wk-hub.com
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
