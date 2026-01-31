import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Mohamed El-Sayed',
    role: 'CEO & Founder',
    image: '👨‍💼',
    bio: '15+ years in enterprise software. Former CTO at leading Egyptian tech company.',
  },
  {
    name: 'Sara Ahmed',
    role: 'CTO',
    image: '👩‍💻',
    bio: 'Expert in distributed systems. Built scalable platforms serving millions.',
  },
  {
    name: 'Khaled Hassan',
    role: 'Head of Product',
    image: '👨‍🎨',
    bio: 'Product visionary with experience at top SaaS companies globally.',
  },
  {
    name: 'Nour Mohamed',
    role: 'Head of Customer Success',
    image: '👩‍💼',
    bio: 'Passionate about helping businesses succeed with technology.',
  },
]

const milestones = [
  { year: '2025', title: 'Founded & Launched', desc: 'Built from years of industry experience, launched to serve Egyptian businesses' },
  { year: '2025', title: 'Enterprise Features', desc: 'Full accounting, HR, inventory, and multi-branch support from day one' },
  { year: '2025', title: 'Growing Community', desc: 'Rapid adoption by businesses across Egypt' },
]

const values = [
  {
    icon: '🎯',
    title: 'Customer First',
    desc: 'Every decision we make starts with asking "How does this help our customers?"',
  },
  {
    icon: '⚡',
    title: 'Relentless Innovation',
    desc: 'We never stop improving. Rigorous testing ensures quality while we push boundaries.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We succeed when you succeed. Your growth is our mission.',
  },
  {
    icon: '🔒',
    title: 'Trust & Security',
    desc: 'Bank-grade security and transparent practices. Your data is sacred.',
  },
  {
    icon: '🌍',
    title: 'Local Excellence',
    desc: 'Built in Egypt, for Egypt. We understand local business needs.',
  },
  {
    icon: '💪',
    title: 'Empowerment',
    desc: 'We build tools that make you more powerful, not dependent.',
  },
]

const stats = [
  { value: '45+', label: 'Powerful Features' },
  { value: '99.99%', label: 'Uptime Target' },
  { value: '24/7', label: 'Support' },
  { value: '∞', label: 'Scalability' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Empowering Egyptian Businesses to
              <span className="block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mt-2">
                Reach Their Full Potential
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to give every business in Egypt access to world-class 
              management tools. No complexity, no barriers, just powerful software that works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  WK-Hub was born from a simple observation: Egyptian businesses deserve 
                  better tools. Too many were stuck with outdated systems, manual processes, 
                  or expensive software that didn't understand local needs.
                </p>
                <p>
                  After years of working with businesses across various industries, we launched 
                  WK-Hub in 2025 — a platform that combines world-class technology with deep 
                  understanding of the Egyptian market. Arabic-first interface, local payment 
                  integrations, ETA compliance, and offline capabilities that work even when 
                  the internet doesn't.
                </p>
                <p>
                  We built WK-Hub to be the complete business management solution that Egyptian 
                  businesses deserve. From small shops to growing enterprises, we're here to help 
                  businesses work smarter, grow faster, and serve their customers better.
                </p>
                <p className="font-medium text-gray-900">
                  But we're just getting started. Our vision is to be the operating system 
                  for every business in the MENA region.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-3xl p-8 md:p-12">
                <div className="space-y-6">
                  {milestones.map((milestone, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-16 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind WK-Hub</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-full flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people who share our passion for building 
              great products. If you want to make a difference, we'd love to hear from you.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100"
            >
              View Open Positions →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Built with Excellence</h2>
              <p className="text-gray-400 mb-8">
                Our technology stack is designed for performance, reliability, and scalability. 
                We use the same technologies trusted by the world's leading companies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '⚡', title: '99.99% Uptime', desc: 'Enterprise-grade reliability' },
                  { icon: '🔒', title: 'Bank-Grade Security', desc: 'AES-256 encryption' },
                  { icon: '🧪', title: '727 Tests', desc: 'Comprehensive coverage' },
                  { icon: '📴', title: 'Offline-First', desc: 'Works without internet' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-4">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="font-mono text-sm">
                <div className="text-green-400">$ npm test</div>
                <div className="text-gray-400 mt-2">Running 727 tests...</div>
                <div className="text-gray-400">
                  <span className="text-green-400">✓</span> Authentication (52 tests)
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">✓</span> Sales & POS (89 tests)
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">✓</span> Inventory (76 tests)
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">✓</span> Accounting (84 tests)
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">✓</span> Multi-Branch (45 tests)
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">✓</span> ... and 381 more
                </div>
                <div className="mt-4 text-green-400">
                  All 727 tests passed! ✓
                </div>
                <div className="text-gray-500 text-xs mt-2">
                  Test coverage: 94% | Duration: 45.2s
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Join 1000+ Successful Businesses?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Start your free trial today and see why businesses trust WK-Hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-xl"
              >
                Start Free Trial →
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-gray-800 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-gray-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
