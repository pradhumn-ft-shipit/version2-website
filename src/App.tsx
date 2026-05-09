import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';

// Eagerly loaded: first paint of the marketing site is the homepage
import Home from './pages/Home';

// Code-split everything else; these load on demand
const ICPTransitionConsultants = lazy(() => import('./pages/icp/ICPTransitionConsultants'));
const ICPBreakawayAdvisors = lazy(() => import('./pages/icp/ICPBreakawayAdvisors'));
const ICPAcquisitiveRIAs = lazy(() => import('./pages/icp/ICPAcquisitiveRIAs'));
const ICPIBDs = lazy(() => import('./pages/icp/ICPIBDs'));
const ICPCustodians = lazy(() => import('./pages/icp/ICPCustodians'));
const SolAdvisorTransitions = lazy(() => import('./pages/solutions/SolAdvisorTransitions'));
const SolClientOnboarding = lazy(() => import('./pages/solutions/SolClientOnboarding'));
const SolMeetingAssistant = lazy(() => import('./pages/solutions/SolMeetingAssistant'));
const SolDocumentIntelligence = lazy(() => import('./pages/solutions/SolDocumentIntelligence'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const PrivacyTransitions = lazy(() => import('./pages/legal/PrivacyTransitions'));
const TermsTransitions = lazy(() => import('./pages/legal/TermsTransitions'));
const ClientPrivacyNotice = lazy(() => import('./pages/legal/ClientPrivacyNotice'));
const ClientDataConsent = lazy(() => import('./pages/legal/ClientDataConsent'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Podcast = lazy(() => import('./pages/Podcast'));
const Resources = lazy(() => import('./pages/Resources'));
const ZoomHelp = lazy(() => import('./pages/ZoomHelp'));
const NotFound = lazy(() => import('./pages/NotFound'));

function BlogPostRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/blog/${slug ?? ''}`} replace />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgPrimary">
      <div className="w-10 h-10 rounded-full border-2 border-brandMint border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bgPrimary flex flex-col font-sans text-textSecondary selection:bg-brandMint selection:text-brandDeep overflow-x-clip">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Who We Serve */}
            <Route path="/who-we-serve/transition-consultants" element={<ICPTransitionConsultants />} />
            <Route path="/who-we-serve/breakaway-advisors" element={<ICPBreakawayAdvisors />} />
            <Route path="/who-we-serve/acquisitive-rias" element={<ICPAcquisitiveRIAs />} />
            <Route path="/who-we-serve/independent-broker-dealers" element={<ICPIBDs />} />
            <Route path="/who-we-serve/custodians" element={<ICPCustodians />} />

            {/* Legacy ICP redirects */}
            <Route path="/for-transition-consultants" element={<Navigate to="/who-we-serve/transition-consultants" replace />} />
            <Route path="/for-breakaway-advisors" element={<Navigate to="/who-we-serve/breakaway-advisors" replace />} />
            <Route path="/for-acquisitive-rias" element={<Navigate to="/who-we-serve/acquisitive-rias" replace />} />
            <Route path="/for-ibds" element={<Navigate to="/who-we-serve/independent-broker-dealers" replace />} />
            <Route path="/for-custodians" element={<Navigate to="/who-we-serve/custodians" replace />} />

            {/* Solutions */}
            <Route path="/solutions/advisor-transitions" element={<SolAdvisorTransitions />} />
            <Route path="/solutions/client-onboarding" element={<SolClientOnboarding />} />
            <Route path="/solutions/meeting-assistant" element={<SolMeetingAssistant />} />
            <Route path="/solutions/document-intelligence" element={<SolDocumentIntelligence />} />

            {/* Resources */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/blog" element={<Navigate to="/resources/blog" replace />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resources/blog/:slug" element={<BlogPostRedirect />} />
            <Route path="/resources/podcast" element={<Podcast />} />
            <Route path="/resources-for-financial-advisors" element={<Resources />} />

            {/* Core */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />

            {/* Removed About — redirect any inbound traffic to homepage */}
            <Route path="/about" element={<Navigate to="/" replace />} />

            {/* Pages that should redirect to contact */}
            <Route path="/fpa" element={<Navigate to="/contact" replace />} />
            <Route path="/aon" element={<Navigate to="/contact" replace />} />
            <Route path="/onepagecrm" element={<Navigate to="/contact" replace />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/tos" element={<Terms />} />
            <Route path="/privacy-policy-transitions" element={<PrivacyTransitions />} />
            <Route path="/tos-transitions" element={<TermsTransitions />} />
            <Route path="/client-privacy-notice" element={<ClientPrivacyNotice />} />
            <Route path="/client-data-consent-acknowledgment" element={<ClientDataConsent />} />

            {/* Help */}
            <Route path="/zoom-help-documentation" element={<ZoomHelp />} />

            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
