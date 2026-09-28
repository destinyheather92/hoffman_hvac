import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { CustomerAccess } from './components/CustomerAccess'
import { EmergencyCTA } from './components/EmergencyCTA'
import { EstimateCTA } from './components/EstimateCTA'
import { FAQAccordion } from './components/FAQAccordion'
import { FinancingCTA } from './components/FinancingCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileActionBar } from './components/MobileActionBar'
import { ProcessSection } from './components/ProcessSection'
import { ProjectGallery } from './components/ProjectGallery'
import { ServicesSection } from './components/ServicesSection'
import { TrustBar } from './components/TrustBar'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <ServicesSection />
        <EmergencyCTA />
        <ProjectGallery />
        <AboutSection />
        <ProcessSection />
        <FinancingCTA />
        <FAQAccordion />
        <EstimateCTA />
        <ContactSection />
        <CustomerAccess />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
