
import Hero from './components/SpaHero'
import TextReveal from './components/TextReveal'
import Features from './components/FeaturedBeautyProducts'
import Statistics from './components/Statistics'
import About from './components/About'
import SignatureSpaServices from './components/SignatureSpaServices'
import FeaturedBeautyProducts from './components/FeaturedBeautyProducts'
import WhyUs from './components/Whyus'
import SpecialSpaPackages from './components/SpecialSpaPackages'
import ClientTestimonials from './components/ClientTestimonials'
import BlogSection from './components/BlogSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import Header from './components/Header'
export default function Home() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-essentia-beige">
      <Hero />
      <Statistics />
      <About />
       <SignatureSpaServices />
       <FeaturedBeautyProducts />
     <WhyUs />
     <SpecialSpaPackages />
     <ClientTestimonials />
     <BlogSection />
     <NewsletterSection />
     <Footer />
    
     
      {/* Add more sections as needed */}
    </main>
    </>
  )
}