import { Link } from 'react-router-dom';
import LegalShell from '../components/LegalShell';

export default function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="This Privacy Policy describes the policies and procedures of FastTrackr Inc. (&ldquo;FastTrackr AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) on the collection, use, and disclosure of your information when you use FastTrackr AI (the &ldquo;Service&rdquo;). By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy."
      lastUpdated="18 November, 2025"
    >
      <h2>Interpretation and definitions</h2>
      <p>The following definitions apply throughout this Privacy Policy.</p>
      <ul>
        <li><strong>Account</strong> — a unique account created for you to access our Service.</li>
        <li><strong>Company</strong> — FastTrackr Inc. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).</li>
        <li><strong>Cookies</strong> — small files placed on your device by a website.</li>
        <li><strong>Country</strong> — United States.</li>
        <li><strong>Device</strong> — any device that can access the Service.</li>
        <li><strong>Financial Advisor</strong> — individuals or entities using our Service to enhance their client meetings, data processing, and data management.</li>
        <li><strong>Meeting Data</strong> — information collected during meetings, including audio recordings, transcriptions, and content shared.</li>
        <li><strong>Personal Data</strong> — any information that relates to an identified or identifiable individual.</li>
        <li><strong>Service</strong> — the FastTrackr AI-powered platform including the meeting assistant and other modules.</li>
        <li><strong>Service Provider</strong> — third-party companies employed by the Company to facilitate the Service.</li>
        <li><strong>Third-party AI Service</strong> — external AI services and APIs used to process transcriptions and generate insights.</li>
        <li><strong>Usage Data</strong> — data collected automatically from use of the Service.</li>
        <li><strong>User or Client</strong> — the individual accessing or using the Service.</li>
        <li><strong>CRM Data</strong> — information imported from or exported to CRM systems.</li>
        <li><strong>Email Data</strong> — information accessed from email conversations used to prepare for meetings.</li>
        <li><strong>Document Processing Module</strong> — optional service feature allowing users to upload, process, and analyze financial and legal documents.</li>
        <li><strong>Financial Documents</strong> — documents containing financial information uploaded through the Document Processing Module.</li>
        <li><strong>Sensitive Documents</strong> — documents containing highly confidential information including identification documents, wills, trust documents, and SSNs.</li>
        <li><strong>Document Data</strong> — information extracted, analyzed, or derived from uploaded documents.</li>
        <li><strong>Document Analysis Output</strong> — insights, summaries, extractions, and analyses generated from uploaded documents.</li>
      </ul>

      <h2>Information we collect</h2>

      <h3>Personal Data</h3>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Business name and address</li>
        <li>Payment information (for paid subscriptions)</li>
        <li>Usage Data</li>
      </ul>

      <h3>Meeting Data</h3>
      <ul>
        <li>Audio recordings of meetings (processed; raw data retained temporarily)</li>
        <li>Transcriptions of meetings</li>
        <li>Notes and action items identified during meetings</li>
        <li>Client information discussed in meetings</li>
        <li>Follow-up tasks and commitments made during meetings</li>
      </ul>

      <h3>Email Data</h3>
      <ul>
        <li>Email conversations between you and your clients (with your permission)</li>
        <li>Calendar invitations and meeting details</li>
        <li>Attachments and documents shared via email (when relevant to meetings)</li>
      </ul>

      <h3>CRM Data</h3>
      <ul>
        <li>Client record information from your CRM system (supporting Wealthbox CRM and other integrations)</li>
        <li>Updates made to client records based on meeting information</li>
        <li>Task and follow-up information synchronized with CRM systems</li>
      </ul>

      <h3>Document Processing data (optional module)</h3>
      <p>If you opt into the Document Processing Module, we collect and process:</p>
      <ul>
        <li>Financial documents including brokerage statements, bank statements, tax forms, and equity compensation statements</li>
        <li>Legal documents including wills and trust documents</li>
        <li>Identification documents</li>
        <li>Any data, text, images, or information contained within uploaded documents</li>
        <li>Metadata associated with uploaded documents</li>
      </ul>
      <div className="callout">
        <p><strong>Important notice.</strong> The Document Processing Module is designed for financial advisors to process their clients' documents. By uploading documents, you represent and warrant that you have obtained all necessary consents and authorizations from document owners.</p>
      </div>

      <h3>Usage Data</h3>
      <p>Collected automatically when using the Service — includes IP address, browser type, pages visited, time spent on pages, and device identifiers.</p>

      <h2>How we use your information</h2>
      <ul>
        <li>To provide and maintain our Service</li>
        <li>To create and manage your account</li>
        <li>To notify you about changes to our Service</li>
        <li>To provide customer support</li>
        <li>To gather analysis to improve our Service</li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent, and address technical issues</li>
        <li>To provide you with relevant news and offers</li>
      </ul>

      <h3>FastTrackr Meeting Assistance</h3>
      <ul>
        <li>To join and monitor meetings between financial advisors and their clients</li>
        <li>To create real-time and post-meeting summaries</li>
        <li>To identify and extract action items and tasks</li>
        <li>To automate CRM data entry and management</li>
        <li>To provide insights and analytics on client interactions</li>
        <li>To prepare for upcoming meetings by analyzing email and CRM data</li>
      </ul>

      <h3>Document Processing Module</h3>
      <ul>
        <li>Extract and structure information from financial and non-financial documents using OCR and AI-powered analysis</li>
        <li>Generate Document Analysis Output including summaries, insights, and data extractions</li>
        <li>Identify key information, trends, and opportunities relevant to financial advisory services</li>
        <li>Provide analysis and reporting on financial positions, holdings, and obligations</li>
      </ul>

      <h2>Retention of your data</h2>
      <ul>
        <li><strong>Raw meeting recordings:</strong> deleted within 7 days after processing.</li>
        <li><strong>Processed meeting data:</strong> retained for the duration of an active account plus 30 days after termination.</li>
        <li><strong>Email data:</strong> not stored; accessed in real-time. Processed output may be stored for the duration of service.</li>
        <li><strong>CRM integration data:</strong> retained while the integration is active; deleted within 30 days after disconnection or account termination.</li>
      </ul>
      <h3>Document Processing Module retention</h3>
      <ul>
        <li>Original uploaded documents retained for the duration of your active subscription.</li>
        <li>Document Data and Document Analysis Output retained for the duration of an active account.</li>
        <li>If you opt out of the Document Processing Module, all documents and Document Data will be deleted within 90 days of explicit request.</li>
        <li>Upon account termination, all documents and Document Data will be deleted within 90 days.</li>
        <li>To request deletion: <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</li>
      </ul>

      <h2>Transfer of your data</h2>
      <p>Your data may be processed in the United States and India. Your use of the Service constitutes agreement to this transfer.</p>

      <h2>Disclosure of your data</h2>
      <p><strong>Business transactions.</strong> In a merger or acquisition, your data may be transferred with prior notice.</p>
      <p><strong>Law enforcement.</strong> We may disclose data if required by law or valid legal process.</p>
      <p><strong>Other legal requirements.</strong> We may disclose data to comply with legal obligations, protect rights or property, prevent wrongdoing, or protect user safety.</p>
      <p><strong>Service providers.</strong> We may share data with service providers for monitoring, payment processing, customer support, and other services.</p>
      <p><strong>Third-party AI services.</strong> Meeting audio and text data may be shared with AI service providers for processing. These services don't train their models using the data we share.</p>
      <p><strong>Document Processing third-party services.</strong> Documents may be transmitted to OCR and AI services. These services do not use your Document Data to train their AI models.</p>

      <h2>Security of your data</h2>
      <p>We implement reasonable precautions including:</p>
      <ul>
        <li>SSL/TLS encryption for data in transit</li>
        <li>AES 256 encryption</li>
        <li>Access controls and authentication</li>
        <li>Regular security assessments and audits</li>
        <li>Employee training on data protection</li>
        <li>Contractual and technical safeguards with service providers</li>
      </ul>
      <p>No method of transmission over the Internet is 100% secure.</p>

      <h2>Children's privacy</h2>
      <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.</p>

      <h2>Financial data privacy</h2>
      <ul>
        <li>End-to-end encryption for sensitive financial information</li>
        <li>Data minimization practices</li>
        <li>Access controls limiting visibility of financial information</li>
        <li>Clear data boundaries between different clients' information</li>
      </ul>

      <h2>Third-party AI and processing services</h2>
      <p>We use third-party AI technologies for:</p>
      <ul>
        <li>Speech-to-text conversion</li>
        <li>Natural language processing</li>
        <li>Meeting summarization</li>
        <li>Task identification</li>
        <li>Client insight generation</li>
        <li>CRM data processing</li>
      </ul>

      <h2>CRM integration</h2>
      <p>FastTrackr integrates with CRM systems including Wealthbox, Salesforce, Hubspot, and OnePageCRM. When you connect your CRM:</p>
      <ul>
        <li>We access only the data necessary to provide our Service.</li>
        <li>We update records based on meeting information only with your approval.</li>
        <li>We maintain security practices required by the CRM provider.</li>
      </ul>

      <h2>Document Processing Module — client consent requirements</h2>
      <p><strong>You are solely responsible for obtaining all necessary consents, authorizations, and permissions from your clients before uploading their documents.</strong></p>
      <p>By uploading any document, you represent and warrant that:</p>
      <ul>
        <li>You have the legal right and authority to upload and process the document.</li>
        <li>You have obtained all necessary consents from document owners.</li>
        <li>Document owners have been informed their documents will be processed using AI-powered analysis.</li>
        <li>You have complied with all applicable privacy laws.</li>
      </ul>
      <p><strong>Opting in.</strong> Notify our team during onboarding or at any time.</p>
      <p><strong>Opting out.</strong> Write to <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>. All documents and Document Data will be deleted within 90 days.</p>

      <h2>Your data protection rights</h2>
      <ul>
        <li><strong>Right to access</strong> — request copies of your personal data.</li>
        <li><strong>Right to rectification</strong> — request correction of inaccurate information.</li>
        <li><strong>Right to erasure</strong> — request erasure of your personal data.</li>
        <li><strong>Right to restrict processing</strong> — request restriction of processing.</li>
        <li><strong>Right to object to processing</strong> — object to our processing of your data.</li>
        <li><strong>Right to data portability</strong> — request transfer of your data.</li>
        <li><strong>Right to opt out of Document Processing Module</strong> — contact <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</li>
      </ul>
      <p>We have one month to respond to requests. Contact: <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</p>

      <h2>California privacy rights</h2>
      <p>As an early-stage startup, FastTrackr does not currently meet CCPA thresholds. However, we implement reasonable data protection practices. California residents with questions may contact <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</p>

      <h2>International data transfer</h2>
      <p>Data is transferred to and processed in the United States and India. Countries may have different data protection laws from your country.</p>

      <h2>Data breach notification</h2>
      <p>In the event of a data breach affecting your Personal Data or Document Data, we will notify you within 72 hours of becoming aware of the breach.</p>

      <h2>Relationship with Terms of Service</h2>
      <p>This Privacy Policy is incorporated into our <Link to="/tos">Terms of Service</Link>.</p>

      <h2>Changes to this Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes are effective when posted on this page. The &ldquo;Last Updated&rdquo; date at the top will be updated accordingly.</p>

      <h2>Contact us</h2>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a></li>
        <li><strong>Web:</strong> <Link to="/contact">fasttrackr.ai/contact</Link></li>
      </ul>
    </LegalShell>
  );
}
