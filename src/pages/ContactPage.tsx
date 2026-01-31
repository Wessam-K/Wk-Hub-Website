import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    desc: 'For general inquiries and support',
    value: 'hello@wk-hub.com',
    action: 'mailto:hello@wk-hub.com',
  },
  {
    icon: '📞',
    title: 'Call Us',
    desc: 'Mon-Fri, 9am-6pm (Cairo Time)',
    value: '+20 2 1234 5678',
    action: 'tel:+20212345678',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    desc: 'Get instant help from our team',
    value: 'Start a conversation',
    action: '#chat',
  },
  {
    icon: '📍',
    title: 'Visit Us',
    desc: 'Our headquarters in Cairo',
    value: 'Cairo, Egypt',
    action: '#map',
  },
]

const subjects = [
  'General Inquiry',
  'Sales & Pricing',
  'Technical Support',
  'Partnership Opportunity',
  'Feature Request',
  'Other',
]

const faqs = [
  {
    q: 'How long does it take to get a response?',
    a: 'We typically respond within 2-4 hours during business hours, and within 24 hours outside of business hours.',
  },
  {
    q: 'Do you offer phone support?',
    a: 'Yes! Professional and Enterprise plans include priority phone support. Starter plans get email support with 24-hour response time.',
  },
  {
    q: 'Can I schedule a demo?',
    a: 'Absolutely! Fill out the contact form and select "Sales & Pricing" as the subject. We\'ll arrange a personalized demo at your convenience.',
  },
  {
    q: 'What if I need urgent help?',
    a: 'Enterprise customers have access to 24/7 emergency support. Other plans can use our live chat for quick assistance during business hours.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const updateForm = (key: keyof ContactForm, value: string) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const isValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have a question or want to learn more? We'd love to hear from you. 
              Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{method.desc}</p>
                <span className="text-indigo-600 font-medium">{method.value}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-white">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: '',
                        message: '',
                      })
                    }}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateForm('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="Ahmed Hassan"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="ahmed@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="+20 10 1234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateForm('company', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => updateForm('subject', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateForm('message', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={!isValid}
                    whileHover={{ scale: isValid ? 1.02 : 1 }}
                    whileTap={{ scale: isValid ? 0.98 : 1 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                      isValid
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Send Message →
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
              
              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl block mb-4">🗺️</span>
                  <span className="text-gray-600">Cairo, Egypt</span>
                </div>
              </div>
              
              {/* Office Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">WK-Hub Headquarters</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <span className="font-medium text-gray-900 block">Address</span>
                      <span className="text-gray-600">123 Tech Park, Smart Village, 6th of October City, Giza, Egypt</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🕐</span>
                    <div>
                      <span className="font-medium text-gray-900 block">Working Hours</span>
                      <span className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🌐</span>
                    <div>
                      <span className="font-medium text-gray-900 block">Support Hours</span>
                      <span className="text-gray-600">24/7 for Enterprise customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
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

      {/* Support Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Options</h2>
            <p className="text-gray-600">Choose the level of support that fits your needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Starter Support',
                icon: '📧',
                features: ['Email support', '24-hour response time', 'Knowledge base access', 'Community forum'],
                price: 'Included',
              },
              {
                title: 'Professional Support',
                icon: '🎯',
                features: ['Priority email support', '4-hour response time', 'Phone support (business hours)', 'Video consultations'],
                price: 'Included with Professional',
              },
              {
                title: 'Enterprise Support',
                icon: '🛡️',
                features: ['24/7 phone & email support', '1-hour response SLA', 'Dedicated account manager', 'On-site support available'],
                price: 'Included with Enterprise',
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.title}</h3>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-600">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-indigo-600 font-semibold">{tier.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Start your free trial today and see why 1000+ businesses trust WK-Hub.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-100"
            >
              Start Free Trial →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
