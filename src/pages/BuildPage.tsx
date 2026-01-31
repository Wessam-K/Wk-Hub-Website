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
  { id: 'mobile', icon: '📱', label: 'Mobile App', desc: 'iOS, Android, or Cross-platform' },
  { id: 'web', icon: '🌐', label: 'Web Application', desc: 'SaaS, Dashboard, Portal' },
  { id: 'desktop', icon: '💻', label: 'Desktop Software', desc: 'Windows, Mac, Linux' },
  { id: 'ecommerce', icon: '🛒', label: 'E-commerce', desc: 'Online store, Marketplace' },
  { id: 'pos', icon: '🏪', label: 'POS System', desc: 'Point of Sale, Retail' },
  { id: 'custom', icon: '⚙️', label: 'Custom Solution', desc: 'Enterprise, Integration' },
]

const platformOptions = [
  { id: 'ios', icon: '🍎', label: 'iOS' },
  { id: 'android', icon: '🤖', label: 'Android' },
  { id: 'web', icon: '🌐', label: 'Web' },
  { id: 'windows', icon: '🪟', label: 'Windows' },
  { id: 'mac', icon: '🖥️', label: 'macOS' },
  { id: 'linux', icon: '🐧', label: 'Linux' },
  { id: 'cross', icon: '🔄', label: 'Cross-platform' },
]

const featureOptions = [
  { id: 'auth', icon: '🔐', label: 'User Authentication', desc: 'Login, Register, OAuth' },
  { id: 'payments', icon: '💳', label: 'Payment Processing', desc: 'Cards, Wallets, Subscriptions' },
  { id: 'database', icon: '🗄️', label: 'Database & Backend', desc: 'Cloud storage, APIs' },
  { id: 'offline', icon: '📴', label: 'Offline Support', desc: 'Work without internet' },
  { id: 'reports', icon: '📊', label: 'Reports & Analytics', desc: 'Dashboards, Charts' },
  { id: 'notifications', icon: '🔔', label: 'Push Notifications', desc: 'Alerts, Reminders' },
  { id: 'chat', icon: '💬', label: 'Chat & Messaging', desc: 'Real-time communication' },
  { id: 'maps', icon: '🗺️', label: 'Maps & Location', desc: 'GPS, Geofencing' },
  { id: 'media', icon: '📸', label: 'Media Upload', desc: 'Images, Videos, Files' },
  { id: 'multilang', icon: '🌍', label: 'Multi-language', desc: 'RTL, Localization' },
  { id: 'api', icon: '🔗', label: 'API Integration', desc: 'Third-party services' },
  { id: 'admin', icon: '👨‍💼', label: 'Admin Panel', desc: 'Management dashboard' },
]

const designStyles = [
  { id: 'modern', label: 'Modern & Minimal', desc: 'Clean, spacious, contemporary' },
  { id: 'corporate', label: 'Corporate & Professional', desc: 'Trust, reliability, business' },
  { id: 'playful', label: 'Playful & Colorful', desc: 'Fun, engaging, vibrant' },
  { id: 'dark', label: 'Dark Mode', desc: 'Sleek, tech-forward, elegant' },
  { id: 'custom', label: 'Custom Design', desc: 'Based on your brand guidelines' },
]

const budgetOptions = [
  { id: 'starter', label: '$5K - $15K', desc: 'MVP / Simple app' },
  { id: 'growth', label: '$15K - $50K', desc: 'Full-featured app' },
  { id: 'enterprise', label: '$50K - $150K', desc: 'Complex solution' },
  { id: 'discuss', label: 'Let\'s Discuss', desc: 'Custom requirements' },
]

const timelineOptions = [
  { id: '1month', label: '1 Month', desc: 'Fast delivery' },
  { id: '2-3months', label: '2-3 Months', desc: 'Standard timeline' },
  { id: '4-6months', label: '4-6 Months', desc: 'Complex project' },
  { id: 'flexible', label: 'Flexible', desc: 'Quality first' },
]

function ProgressBar({ step, totalSteps }: { step: number; totalSteps: number }) {
  const steps = ['Project', 'Features', 'Design', 'Contact']
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

export default function BuildPage() {
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-32 pb-20">
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
            Request Submitted!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8"
          >
            Our development team will review your project requirements and contact you within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-left"
          >
            <h3 className="font-bold text-gray-900 mb-6 text-lg">What happens next?</h3>
            <div className="space-y-5">
              {[
                { icon: '📧', title: 'Confirmation Email', desc: 'You\'ll receive a confirmation with your project details' },
                { icon: '📞', title: 'Discovery Call', desc: 'Our team will schedule a call to discuss your vision' },
                { icon: '📋', title: 'Proposal & Quote', desc: 'We\'ll prepare a detailed proposal with timeline and cost' },
                { icon: '🚀', title: 'Development Kickoff', desc: 'Once approved, we start building your dream project' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start bg-gray-50 rounded-xl p-4"
                >
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <span className="font-semibold text-gray-900 block">{item.title}</span>
                    <span className="text-gray-600 text-sm">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <Link to="/">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">💡</span> Turn Your Idea Into Reality
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Your <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Dream App</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether it's a mobile app, web platform, or desktop software — we bring your ideas to life with cutting-edge technology.
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What would you like to build?</h2>
                <p className="text-gray-500 mb-8">Select the type of project that best fits your needs</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => updateForm('projectType', type.id)}
                      className={`relative p-6 rounded-2xl border-2 text-left transition-all ${
                        formData.projectType === type.id
                          ? 'border-indigo-500 bg-indigo-50 shadow-lg shadow-indigo-100'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {formData.projectType === type.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center"
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

                <h3 className="text-xl font-bold text-gray-900 mb-4">Target Platform(s)</h3>
                <p className="text-gray-500 mb-4">Select all platforms you want to support</p>
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What features do you need?</h2>
                <p className="text-gray-500 mb-8">Select all the features you want in your app</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featureOptions.map((feature) => (
                    <motion.button
                      key={feature.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleArrayItem('features', feature.id)}
                      className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                        formData.features.includes(feature.id)
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">{feature.icon}</span>
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 block">{feature.label}</span>
                          <span className="text-xs text-gray-500">{feature.desc}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ml-2 ${
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
                    <span className="font-medium">💡 Tip:</span> Don't worry if you're not sure about all features. 
                    We'll help you refine the scope during our discovery call.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 3: Design, Budget & Timeline */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Design & Project Details</h2>
                <p className="text-gray-500 mb-8">Help us understand your preferences</p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4">Preferred Design Style</h3>
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
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Budget Range</h3>
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => updateForm('budget', option.id)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
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
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Expected Timeline</h3>
                    <div className="space-y-3">
                      {timelineOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => updateForm('timeline', option.id)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's get in touch!</h2>
                <p className="text-gray-500 mb-8">Tell us about yourself and your project vision</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateForm('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project *</label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => updateForm('projectDescription', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project idea, the problem you're solving, your target users, and any specific requirements or inspirations you have..."
                  />
                </div>

                {/* Summary */}
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-4">📋 Project Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">Project Type:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {projectTypes.find(t => t.id === formData.projectType)?.label}
                      </span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">Platforms:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {formData.platform.map(p => platformOptions.find(po => po.id === p)?.label).join(', ')}
                      </span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">Budget:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {budgetOptions.find(b => b.id === formData.budget)?.label}
                      </span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {timelineOptions.find(t => t.id === formData.timeline)?.label}
                      </span>
                    </div>
                    <div className="md:col-span-2 bg-white/60 rounded-xl p-3">
                      <span className="text-gray-500">Features:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {formData.features.length} selected
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
              ← Back
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
                Continue →
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
                Submit Request 🚀
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
            { icon: '⚡', title: 'Fast Delivery', desc: 'We work efficiently to deliver your project on time' },
            { icon: '🎨', title: 'Custom Design', desc: 'Unique designs tailored to your brand identity' },
            { icon: '🔧', title: 'Full Support', desc: 'Ongoing maintenance and support after launch' },
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
