import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SecurityPage() {
  const lastUpdated = 'January 2025'

  const securityFeatures = [
    {
      icon: '🔐',
      title: 'End-to-End Encryption',
      desc: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption — the same standards used by leading financial institutions.',
      details: [
        'TLS 1.3 for all connections',
        'AES-256 encryption at rest',
        'Encrypted database backups',
        'Secure key management',
      ],
    },
    {
      icon: '🔑',
      title: 'Multi-Factor Authentication',
      desc: 'Protect your accounts with an additional layer of security. Support for authenticator apps, SMS codes, and hardware security keys.',
      details: [
        'TOTP authenticator apps',
        'SMS verification codes',
        'Hardware key support (YubiKey)',
        'Backup recovery codes',
      ],
    },
    {
      icon: '👥',
      title: 'Role-Based Access Control',
      desc: 'Fine-grained permissions let you control exactly what each user can see and do. Create custom roles tailored to your business needs.',
      details: [
        'Predefined role templates',
        'Custom role creation',
        'Module-level permissions',
        'Action-level restrictions',
      ],
    },
    {
      icon: '📋',
      title: 'Complete Audit Logs',
      desc: 'Every action is logged with timestamp, user, and IP address. Full traceability for compliance and security investigations.',
      details: [
        'User action tracking',
        'Login/logout records',
        'Data modification history',
        'Exportable audit reports',
      ],
    },
    {
      icon: '🔒',
      title: 'Session Security',
      desc: 'Advanced session management prevents unauthorized access. Automatic timeouts, device tracking, and session revocation.',
      details: [
        'Configurable session timeout',
        'Device fingerprinting',
        'Concurrent session limits',
        'Remote session termination',
      ],
    },
    {
      icon: '🛡️',
      title: 'API Security',
      desc: 'Our APIs are protected with JWT tokens, rate limiting, and IP whitelisting. Built for secure integrations.',
      details: [
        'JWT authentication',
        'Rate limiting protection',
        'IP whitelist support',
        'API key rotation',
      ],
    },
  ]

  const complianceItems = [
    { icon: '🇪🇬', title: 'ETA Compliance', desc: 'Full integration with Egyptian Tax Authority for e-invoicing requirements' },
    { icon: '📊', title: 'GDPR Ready', desc: 'Data protection practices aligned with international privacy standards' },
    { icon: '💳', title: 'PCI DSS', desc: 'Payment processing meets Payment Card Industry security standards' },
    { icon: '🏛️', title: 'Local Regulations', desc: 'Compliant with Egyptian business and data protection laws' },
  ]

  const practices = [
    {
      title: 'Secure Development',
      items: [
        'Security-first development lifecycle',
        'Regular code reviews and static analysis',
        'Dependency vulnerability scanning',
        'Automated security testing in CI/CD',
      ],
    },
    {
      title: 'Infrastructure Security',
      items: [
        'SOC 2 compliant cloud providers',
        'Network segmentation and firewalls',
        'DDoS protection and mitigation',
        'Regular infrastructure audits',
      ],
    },
    {
      title: 'Operational Security',
      items: [
        'Employee security training',
        'Background checks for staff',
        'Principle of least privilege',
        'Incident response procedures',
      ],
    },
    {
      title: 'Data Protection',
      items: [
        'Automated encrypted backups',
        'Geographic redundancy',
        'Point-in-time recovery',
        'Data retention policies',
      ],
    },
  ]

  const certifications = [
    { name: 'ISO 27001', status: 'In Progress', desc: 'Information Security Management' },
    { name: 'SOC 2 Type II', status: 'Planned', desc: 'Security & Availability Controls' },
    { name: 'GDPR', status: 'Compliant', desc: 'Data Protection Regulation' },
    { name: 'PCI DSS', status: 'Compliant', desc: 'Payment Card Security' },
  ]

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              All Systems Secure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise-Grade <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Your business data deserves bank-level protection. WK-Hub is built with security 
              at its core, not as an afterthought.
            </p>
            <p className="text-sm text-gray-500">
              Last security review: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Features</h2>
            <p className="text-xl text-gray-600">Comprehensive protection for your business</p>
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
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-5">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Practices</h2>
            <p className="text-xl text-gray-600">How we maintain security across all operations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((practice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{practice.title}</h3>
                <ul className="space-y-3">
                  {practice.items.map((item, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-600">Meeting industry standards and regulations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {complianceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certification Status</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="text-center p-4 border border-gray-100 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                    cert.status === 'Compliant' ? 'bg-green-100 text-green-700' :
                    cert.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {cert.status}
                  </span>
                  <p className="text-xs text-gray-500">{cert.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Commitment</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: 'Continuous Monitoring',
                desc: 'Our security team monitors systems 24/7 for threats and anomalies. Automated alerts ensure rapid response to any security events.',
              },
              {
                title: 'Regular Testing',
                desc: 'We conduct regular penetration testing, vulnerability assessments, and security audits by independent third parties.',
              },
              {
                title: 'Transparent Communication',
                desc: 'In the unlikely event of a security incident, we commit to prompt, transparent communication with affected users.',
              },
              {
                title: 'Continuous Improvement',
                desc: 'Security is not a destination but a journey. We continuously update our security practices to address emerging threats.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-gray-50 rounded-2xl p-6"
              >
                <span className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Vulnerability */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6">🐛</div>
            <h2 className="text-3xl font-bold text-white mb-4">Report a Vulnerability</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We take security seriously. If you discover a security vulnerability, please report it 
              responsibly to our security team. We appreciate your help in keeping WK-Hub secure.
            </p>
            <a
              href="mailto:security@wk-hub.com"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              📧 security@wk-hub.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Privacy Policy →
            </Link>
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Terms of Service →
            </Link>
            <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Contact Us →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
