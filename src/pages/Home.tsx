import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import PainSection from '../components/PainSection';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Outcomes from '../components/Outcomes';
import ICP from '../components/ICP';
import Beyond from '../components/Beyond';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brandMint selection:text-brandDeep overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainSection />
        <Solution />
        <HowItWorks />
        <Outcomes />
        <ICP />
        <Beyond />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
