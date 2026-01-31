import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarAr from './components/NavbarAr'
import Footer from './components/Footer'
import FooterAr from './components/FooterAr'
import HomePage from './pages/HomePage'
import BuildPage from './pages/BuildPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import SecurityPage from './pages/SecurityPage'
// Arabic pages
import HomePageAr from './pages/ar/HomePage'
import BuildPageAr from './pages/ar/BuildPage'
import AboutPageAr from './pages/ar/AboutPage'
import ContactPageAr from './pages/ar/ContactPage'
import PrivacyPageAr from './pages/ar/PrivacyPage'
import TermsPageAr from './pages/ar/TermsPage'
import SecurityPageAr from './pages/ar/SecurityPage'

function AppLayout() {
  const location = useLocation()
  const isArabic = location.pathname.startsWith('/ar')

  return (
    <div className={`min-h-screen bg-white ${isArabic ? 'font-arabic' : ''}`}>
      {isArabic ? <NavbarAr /> : <Navbar />}
      <main>
        <Routes>
          {/* English Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          {/* Arabic Routes */}
          <Route path="/ar" element={<HomePageAr />} />
          <Route path="/ar/build" element={<BuildPageAr />} />
          <Route path="/ar/about" element={<AboutPageAr />} />
          <Route path="/ar/contact" element={<ContactPageAr />} />
          <Route path="/ar/privacy" element={<PrivacyPageAr />} />
          <Route path="/ar/terms" element={<TermsPageAr />} />
          <Route path="/ar/security" element={<SecurityPageAr />} />
        </Routes>
      </main>
      {isArabic ? <FooterAr /> : <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
