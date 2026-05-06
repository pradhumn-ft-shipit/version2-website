import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ICPPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-textPrimary mb-6">{title}</h1>
          <p className="text-xl text-textSecondary mb-12">{description}</p>
          
          <div className="bg-bgCanvas rounded-3xl p-16 border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 rounded-2xl bg-brandMint/10 flex items-center justify-center mb-8">
              <span className="text-brandDeep font-display font-bold text-3xl">F</span>
            </div>
            <h2 className="text-2xl font-semibold text-textPrimary mb-4">Page under construction</h2>
            <p className="text-textSecondary max-w-lg">
              This page will contain detailed information, specific value propositions, and tailored product tours for this audience.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
