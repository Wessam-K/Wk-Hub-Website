import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'محمد السيد',
    role: 'المدير التنفيذي والمؤسس',
    image: '👨‍💼',
    bio: '+١٥ سنة في برمجيات المؤسسات. مدير تقني سابق في شركة تقنية مصرية رائدة.',
  },
  {
    name: 'سارة أحمد',
    role: 'المدير التقني',
    image: '👩‍💻',
    bio: 'خبيرة في الأنظمة الموزعة. بنت منصات تخدم الملايين.',
  },
  {
    name: 'خالد حسن',
    role: 'رئيس المنتج',
    image: '👨‍🎨',
    bio: 'صاحب رؤية منتج بخبرة في كبرى شركات SaaS عالمياً.',
  },
  {
    name: 'نور محمد',
    role: 'رئيسة نجاح العملاء',
    image: '👩‍💼',
    bio: 'شغوفة بمساعدة الشركات على النجاح بالتكنولوجيا.',
  },
]

const milestones = [
  { year: '٢٠٢٥', title: 'التأسيس والإطلاق', desc: 'بُني من سنوات الخبرة في الصناعة، أُطلق لخدمة الشركات المصرية' },
  { year: '٢٠٢٥', title: 'مميزات المؤسسات', desc: 'محاسبة كاملة وموارد بشرية ومخزون ودعم متعدد الفروع من اليوم الأول' },
  { year: '٢٠٢٥', title: 'مجتمع متنامي', desc: 'تبني سريع من الشركات في جميع أنحاء مصر' },
]

const values = [
  {
    icon: '🎯',
    title: 'العميل أولاً',
    desc: 'كل قرار نتخذه يبدأ بسؤال "كيف يساعد هذا عملاءنا؟"',
  },
  {
    icon: '⚡',
    title: 'ابتكار لا يتوقف',
    desc: 'لا نتوقف أبداً عن التحسين. اختبارات صارمة تضمن الجودة بينما ندفع الحدود.',
  },
  {
    icon: '🤝',
    title: 'شراكة',
    desc: 'ننجح عندما تنجح أنت. نموك هو مهمتنا.',
  },
  {
    icon: '🔒',
    title: 'ثقة وأمان',
    desc: 'أمان بمستوى بنكي وممارسات شفافة. بياناتك مقدسة.',
  },
  {
    icon: '🌍',
    title: 'تميز محلي',
    desc: 'بُني في مصر، لمصر. نفهم احتياجات الأعمال المحلية.',
  },
  {
    icon: '💪',
    title: 'تمكين',
    desc: 'نبني أدوات تجعلك أكثر قوة، لا أكثر اعتماداً.',
  },
]

const stats = [
  { value: '+٤٥', label: 'مميزات قوية' },
  { value: '٩٩.٩٩٪', label: 'هدف التشغيل' },
  { value: '٢٤/٧', label: 'الدعم' },
  { value: '∞', label: 'قابلية التوسع' },
]

export default function AboutPageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              تمكين الشركات المصرية للوصول إلى
              <span className="block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mt-2">
                أقصى إمكاناتها
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              نحن في مهمة لإعطاء كل شركة في مصر الوصول إلى أدوات 
              إدارة عالمية المستوى. بدون تعقيد، بدون عوائق، فقط برامج قوية تعمل.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  وُلد WK-Hub من ملاحظة بسيطة: الشركات المصرية تستحق 
                  أدوات أفضل. الكثير منها كانت عالقة مع أنظمة قديمة، عمليات يدوية، 
                  أو برامج مكلفة لا تفهم الاحتياجات المحلية.
                </p>
                <p>
                  بعد سنوات من العمل مع الشركات في مختلف الصناعات، أطلقنا 
                  WK-Hub في ٢٠٢٥ — منصة تجمع بين التكنولوجيا العالمية والفهم العميق 
                  للسوق المصري. واجهة عربية أولاً، تكاملات الدفع المحلية، التوافق مع الفاتورة الإلكترونية، 
                  وإمكانيات العمل بدون إنترنت حتى عندما لا يعمل الإنترنت.
                </p>
                <p>
                  بنينا WK-Hub ليكون حل إدارة الأعمال الكامل الذي تستحقه 
                  الشركات المصرية. من المتاجر الصغيرة إلى المؤسسات النامية، نحن هنا لمساعدة 
                  الشركات على العمل بذكاء أكبر، والنمو أسرع، وخدمة عملائها بشكل أفضل.
                </p>
                <p className="font-medium text-gray-900">
                  لكننا بدأنا للتو. رؤيتنا أن نكون نظام التشغيل 
                  لكل شركة في منطقة الشرق الأوسط وشمال أفريقيا.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-3xl p-8 md:p-12">
                <div className="space-y-6">
                  {milestones.map((milestone, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-16 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm ms-4 flex-shrink-0">
                        {milestone.year}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                        <p className="text-sm text-gray-600">{milestone.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600">المبادئ التي توجه كل ما نفعله</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">تعرف على فريقنا</h2>
            <p className="text-xl text-gray-600">الأشخاص وراء WK-Hub</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              انضم إلى رحلتنا
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              كن جزءاً من قصة نجاح الأعمال المصرية. جرب WK-Hub اليوم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-100"
                >
                  ابدأ تجربة مجانية
                </motion.button>
              </Link>
              <Link to="/ar/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10"
                >
                  تواصل معنا
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
