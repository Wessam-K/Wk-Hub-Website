import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  const lastUpdated = 'January 2025'

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Account Information',
          text: 'When you create an account, we collect your name, email address, phone number, company name, and billing information. This information is necessary to provide our services and process payments.',
        },
        {
          subtitle: 'Business Data',
          text: 'To provide our POS, inventory, accounting, and HR services, we store data you enter including products, transactions, customer information, employee records, and financial data. This data belongs to you and is stored securely.',
        },
        {
          subtitle: 'Usage Information',
          text: 'We collect information about how you use WK-Hub, including features accessed, actions taken, and performance metrics. This helps us improve our services and provide support.',
        },
        {
          subtitle: 'Device Information',
          text: 'We collect device identifiers, operating system version, browser type, and IP addresses for security, analytics, and to optimize our services for your devices.',
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information to provide, maintain, and improve WK-Hub services, including processing transactions, managing inventory, generating reports, and enabling multi-branch operations.',
        },
        {
          subtitle: 'Communication',
          text: 'We may send you service-related announcements, security alerts, support messages, and (with your consent) marketing communications. You can opt out of marketing emails at any time.',
        },
        {
          subtitle: 'Security',
          text: 'We use collected information to detect and prevent fraud, unauthorized access, and other security threats to protect your data and our platform.',
        },
        {
          subtitle: 'Improvement',
          text: 'We analyze usage patterns to improve our services, develop new features, and optimize performance. This analysis uses aggregated, anonymized data whenever possible.',
        },
      ],
    },
    {
      title: 'Data Sharing',
      content: [
        {
          subtitle: 'No Selling of Data',
          text: 'We do not sell, rent, or trade your personal information or business data to third parties. Your data is your asset.',
        },
        {
          subtitle: 'Service Providers',
          text: 'We work with trusted service providers for payment processing, cloud hosting, email delivery, and analytics. These providers are contractually bound to protect your data and use it only for specified purposes.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information if required by law, court order, or government request, or to protect our rights, property, or safety of our users.',
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity. We will notify you of any such change.',
        },
      ],
    },
    {
      title: 'Data Security',
      content: [
        {
          subtitle: 'Encryption',
          text: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. This is the same standard used by banks and financial institutions.',
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls, multi-factor authentication, and role-based permissions. Our employees only access data when necessary for support or service delivery.',
        },
        {
          subtitle: 'Regular Audits',
          text: 'We conduct regular security audits, penetration testing, and vulnerability assessments. Our security practices are continuously updated to address emerging threats.',
        },
        {
          subtitle: 'Incident Response',
          text: 'We have a comprehensive incident response plan. In the unlikely event of a data breach, we will notify affected users promptly and take immediate remediation steps.',
        },
      ],
    },
    {
      title: 'Your Rights',
      content: [
        {
          subtitle: 'Access',
          text: 'You have the right to access your data at any time through your WK-Hub account. You can export your data in standard formats.',
        },
        {
          subtitle: 'Correction',
          text: 'You can update or correct your personal information through your account settings or by contacting our support team.',
        },
        {
          subtitle: 'Deletion',
          text: 'You can request deletion of your account and associated data. We will process this within 30 days, subject to legal retention requirements.',
        },
        {
          subtitle: 'Portability',
          text: 'You can export your business data including products, transactions, and reports. We support standard formats like CSV, Excel, and PDF.',
        },
      ],
    },
    {
      title: 'Data Retention',
      content: [
        {
          subtitle: 'Active Accounts',
          text: 'We retain your data as long as your account is active. This ensures continuity of service and access to historical records.',
        },
        {
          subtitle: 'After Cancellation',
          text: 'After account cancellation, we retain data for 90 days to allow for reactivation. After this period, data is permanently deleted unless required by law.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'Some data may be retained longer to comply with legal, tax, or accounting requirements. We will inform you of any such requirements.',
        },
      ],
    },
    {
      title: 'Cookies & Tracking',
      content: [
        {
          subtitle: 'Essential Cookies',
          text: 'We use essential cookies for authentication, security, and basic functionality. These cannot be disabled as they are necessary for the service.',
        },
        {
          subtitle: 'Analytics',
          text: 'We use analytics tools to understand how users interact with our platform. You can opt out of analytics tracking through your browser settings.',
        },
        {
          subtitle: 'No Third-Party Advertising',
          text: 'We do not use third-party advertising cookies or trackers. Your data is not shared with advertising networks.',
        },
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        {
          subtitle: 'Age Requirement',
          text: 'WK-Hub is designed for business use and is not intended for children under 18. We do not knowingly collect information from children.',
        },
      ],
    },
    {
      title: 'International Data',
      content: [
        {
          subtitle: 'Data Location',
          text: 'Your data is primarily stored in secure data centers in the MENA region. We may use international cloud providers with appropriate data protection agreements.',
        },
        {
          subtitle: 'Cross-Border Transfers',
          text: 'When data is transferred internationally, we ensure appropriate safeguards are in place, including standard contractual clauses and security measures.',
        },
      ],
    },
    {
      title: 'Contact Us',
      content: [
        {
          subtitle: 'Privacy Questions',
          text: 'For privacy-related questions or to exercise your rights, contact our Data Protection Officer at privacy@wk-hub.com.',
        },
        {
          subtitle: 'General Support',
          text: 'For general inquiries, reach us at support@wk-hub.com or through the Contact page on our website.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">🔒</span> Your Privacy Matters
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              How we collect, use, and protect your information
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 p-6 bg-indigo-50 rounded-2xl"
          >
            <p className="text-gray-700 leading-relaxed">
              At WK-Hub, we understand that your business data is sensitive and valuable. 
              This Privacy Policy explains how we collect, use, store, and protect your information 
              when you use our business management platform. We are committed to transparency and 
              protecting your privacy.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 bg-gray-50 rounded-2xl"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map((section, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  {i + 1}. {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          {sections.map((section, i) => (
            <motion.div
              key={i}
              id={`section-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-6 pl-11">
                {section.content.map((item, j) => (
                  <div key={j}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Policy Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">📋 Policy Updates</h3>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any significant 
              changes by email or through a notice on our platform. We encourage you to review this policy 
              periodically to stay informed about how we protect your information.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Terms of Service →
            </Link>
            <Link to="/security" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Security →
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
