import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FooterAr() {
  const footerLinks = {
    product: [
      { name: 'المميزات', path: '/ar#features' },
      { name: 'الأسعار', path: '/ar#pricing' },
      { name: 'ابني تطبيقك', path: '/ar/build' },
      { name: 'التوثيق', path: '#' },
    ],
    company: [
      { name: 'من نحن', path: '/ar/about' },
      { name: 'تواصل معنا', path: '/ar/contact' },
      { name: 'الوظائف', path: '#' },
      { name: 'المدونة', path: '#' },
    ],
    legal: [
      { name: 'سياسة الخصوصية', path: '/ar/privacy' },
      { name: 'الشروط والأحكام', path: '/ar/terms' },
      { name: 'الأمان', path: '/ar/security' },
    ],
    support: [
      { name: 'مركز المساعدة', path: '#' },
      { name: 'توثيق API', path: '#' },
      { name: 'حالة النظام', path: '#' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/ar" className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <span className="me-3 text-2xl font-bold text-white">WK-Hub</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              نظام إدارة أعمال متكامل للشركات الطموحة. 
              نقاط البيع، المخزون، المحاسبة، وأكثر في منصة واحدة قوية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {['twitter', 'linkedin', 'github', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors"
                >
                  <span className="text-sm capitalize">{social[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">المنتج</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">القانونية</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">الدعم</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mb-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-semibold text-lg mb-2">ابق على اطلاع</h3>
              <p className="text-gray-400 text-sm">احصل على آخر الأخبار وتحديثات المنتج.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="px-4 py-3 bg-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 text-right"
                dir="ltr"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-semibold"
              >
                اشترك
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="md:flex items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} WK-Hub. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse me-2"></span>
                جميع الأنظمة تعمل
              </span>
              <Link to="/" className="hover:text-white transition-colors">
                English
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
