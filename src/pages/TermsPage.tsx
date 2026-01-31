import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  const lastUpdated = 'January 2025'

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing or using WK-Hub services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service. These terms apply to all users, including businesses, employees, and administrators.`,
    },
    {
      title: 'Description of Service',
      content: `WK-Hub provides a comprehensive business management platform including Point of Sale (POS), inventory management, accounting, customer relationship management (CRM), human resources (HR), and multi-branch management capabilities. The service is provided "as is" and may be updated, modified, or discontinued at any time with reasonable notice to users.`,
    },
    {
      title: 'Account Registration',
      items: [
        'You must provide accurate and complete registration information',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You are responsible for all activities that occur under your account',
        'You must be at least 18 years old and have the legal authority to enter into this agreement',
        'One person or legal entity may not maintain more than one free account',
        'You must notify us immediately of any unauthorized use of your account',
      ],
    },
    {
      title: 'Subscription and Payments',
      items: [
        'Subscription fees are billed in advance on a monthly or annual basis',
        'All fees are non-refundable except as expressly stated in these terms or required by law',
        'We reserve the right to change pricing with 30 days notice',
        'Failure to pay may result in service suspension or termination',
        'You authorize us to charge your designated payment method for all fees',
        'Taxes may apply based on your location and will be added to your invoice',
      ],
    },
    {
      title: 'Acceptable Use',
      content: `You agree to use WK-Hub only for lawful purposes and in accordance with these Terms. You agree NOT to:`,
      items: [
        'Use the service for any illegal activity or to violate any laws',
        'Attempt to gain unauthorized access to our systems or other users\' accounts',
        'Transmit viruses, malware, or any code designed to harm our systems',
        'Use the service to store or transmit infringing, libelous, or unlawful material',
        'Interfere with or disrupt the service or servers',
        'Reverse engineer, decompile, or disassemble any part of the service',
        'Use automated systems (bots, scrapers) to access the service without permission',
        'Resell, sublicense, or share your account with unauthorized parties',
      ],
    },
    {
      title: 'Data Ownership',
      content: `Your data belongs to you. WK-Hub claims no ownership rights over your business data, including products, transactions, customer information, and financial records. You grant us a limited license to use your data solely to provide and improve our services. Upon account termination, you may export your data within 90 days.`,
    },
    {
      title: 'Intellectual Property',
      content: `WK-Hub, its logo, and all related names, designs, and slogans are trademarks of WK-Hub. The service, including all content, features, and functionality, is owned by WK-Hub and protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works of any part of the service without our express written consent.`,
    },
    {
      title: 'Service Availability',
      items: [
        'We strive for 99.99% uptime but do not guarantee uninterrupted service',
        'Planned maintenance will be scheduled during off-peak hours when possible',
        'We are not liable for any downtime caused by factors outside our control',
        'Our offline mode ensures continued operation during internet outages',
        'We will provide reasonable notice for scheduled maintenance',
      ],
    },
    {
      title: 'Support and Updates',
      content: `Support availability depends on your subscription plan. Starter plans receive email support, Professional plans receive priority support, and Enterprise plans receive 24/7 dedicated support. We regularly update the service with new features, security patches, and improvements. Major updates will be communicated in advance.`,
    },
    {
      title: 'Third-Party Integrations',
      content: `WK-Hub may integrate with third-party services (payment processors, ETA compliance systems, etc.). Your use of such integrations is subject to their respective terms of service. We are not responsible for the availability, accuracy, or reliability of third-party services. Integration availability may change without notice.`,
    },
    {
      title: 'Limitation of Liability',
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, WK-HUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE. Our total liability shall not exceed the amount you paid for the service in the 12 months preceding the claim.`,
    },
    {
      title: 'Disclaimer of Warranties',
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. We disclaim all warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
    },
    {
      title: 'Indemnification',
      content: `You agree to indemnify, defend, and hold harmless WK-Hub and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the service, violation of these terms, or infringement of any third-party rights.`,
    },
    {
      title: 'Termination',
      items: [
        'You may cancel your subscription at any time through your account settings',
        'We may suspend or terminate your account for violation of these terms',
        'Upon termination, your access to the service will cease immediately',
        'You have 90 days after termination to export your data',
        'Termination does not affect any rights or obligations that accrued before termination',
        'Provisions that by their nature should survive termination will remain in effect',
      ],
    },
    {
      title: 'Modifications to Terms',
      content: `We reserve the right to modify these Terms of Service at any time. Material changes will be communicated via email or through a notice on our platform at least 30 days before they take effect. Your continued use of the service after changes become effective constitutes acceptance of the new terms.`,
    },
    {
      title: 'Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt, without regard to its conflict of law provisions. Any disputes arising from these terms or the service shall be resolved in the courts of Cairo, Egypt. You consent to the exclusive jurisdiction of these courts.`,
    },
    {
      title: 'Severability',
      content: `If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.`,
    },
    {
      title: 'Entire Agreement',
      content: `These Terms of Service, together with our Privacy Policy and any additional terms for specific features, constitute the entire agreement between you and WK-Hub regarding the service. Any prior agreements or understandings are superseded by these terms.`,
    },
    {
      title: 'Contact Information',
      content: `For questions about these Terms of Service, please contact us at legal@wk-hub.com or through our Contact page. For general support inquiries, email support@wk-hub.com.`,
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
              <span className="mr-2">📜</span> Legal Agreement
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              The agreement between you and WK-Hub
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
          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">⚠️ Important</h3>
            <p className="text-gray-700">
              Please read these Terms of Service carefully before using WK-Hub. By using our service, 
              you agree to be bound by these terms. If you disagree with any part of the terms, 
              you may not access the service.
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
                  href={`#terms-section-${i}`}
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
              id={`terms-section-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="pl-11">
                {section.content && (
                  <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}

          {/* Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-indigo-50 rounded-2xl text-center"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ By Using WK-Hub</h3>
            <p className="text-gray-700">
              You acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
              and our Privacy Policy.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Privacy Policy →
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
