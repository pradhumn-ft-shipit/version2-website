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
import DeferredSection from '../components/DeferredSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brandMint selection:text-brandDeep overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <DeferredSection minHeight="2000px"><PainSection /></DeferredSection>
        <DeferredSection minHeight="1100px"><Solution /></DeferredSection>
        <DeferredSection minHeight="1500px"><HowItWorks /></DeferredSection>
        <DeferredSection minHeight="900px"><Outcomes /></DeferredSection>
        <DeferredSection minHeight="1200px"><ICP /></DeferredSection>
        <DeferredSection minHeight="900px"><Beyond /></DeferredSection>
        <DeferredSection minHeight="1100px"><Testimonials /></DeferredSection>
        <DeferredSection minHeight="800px"><FAQ /></DeferredSection>
      </main>
      <Footer />
    </div>
  );
}
