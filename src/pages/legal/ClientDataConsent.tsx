import LegalShell from '../../components/LegalShell';

export default function ClientDataConsent() {
  return (
    <LegalShell
      eyebrow="Transition Platform"
      title="Client Data Consent & Acknowledgment"
      subtitle="This is a short, plain-language consent document. By ticking the checkbox on the FastTrackr portal, you are agreeing to what is set out below. This consent should be read together with the FastTrackr Client Privacy Notice, which provides full details of how your information is collected, used, protected, and retained. Please read both documents before you begin. This is not a contract with your financial advisor — it simply explains how your data will be handled on the platform."
      lastUpdated="April 15, 2026"
    >
      <h2>1. What you are agreeing to</h2>
      <p>When you access the FastTrackr client portal (via the secure link sent by your advisor using one-time password), you agree that:</p>
      <ul>
        <li>FastTrackr AI may process the personal and financial information you submit through the portal on behalf of your advisor, solely for the purpose of completing your account transition.</li>
        <li>Information you upload or enter — including identity documents, financial details, and household data — will be securely stored and used to populate your transition paperwork.</li>
        <li>Your advisor and their authorized staff will have access to the information you submit.</li>
        <li>FastTrackr AI acts as a data processor on behalf of your advisor. Your advisor remains responsible for how your data is used in connection with your transition.</li>
      </ul>

      <h2>2. What you are not agreeing to</h2>
      <p>By using the portal, you are not:</p>
      <ul>
        <li>Giving permission for your data to be sold, shared with marketers, or used for any purpose beyond your account transition.</li>
        <li>Waiving any rights you have over your personal information.</li>
        <li>Entering into a commercial agreement with FastTrackr AI. There is no fee, subscription, or obligation to you as a client.</li>
        <li>Consenting to any investment advice, account management, or advisory services from FastTrackr AI. We are not your advisor.</li>
      </ul>

      <h2>3. Your participation is voluntary</h2>
      <p>You can stop at any time. If you do not wish to submit information through the portal, contact your advisor — they can help you with the transition through other means. Choosing not to use this portal will not affect your relationship with your advisor.</p>

      <h2>4. Data security</h2>
      <p>FastTrackr AI uses encryption, access controls, and secure authentication (OTP) to protect your information. Your data is never transmitted unencrypted.</p>
      <p>In the unlikely event of a data security incident affecting your information, your advisor will be notified and will communicate with you directly.</p>

      <h2>5. Retention and deletion</h2>
      <p>Your data will be held only for as long as needed for your account transition. It will be deleted from active systems within 30 days of your project closing, and from all backup systems within 60 days. You may request earlier deletion by contacting your financial advisor or emailing <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</p>

      <h2>6. Your rights</h2>
      <p>At any time, you may:</p>
      <ul>
        <li>Ask what information FastTrackr holds about you</li>
        <li>Request correction of any inaccurate information</li>
        <li>Request deletion of your data from the platform</li>
        <li>Withdraw from the portal entirely</li>
      </ul>
      <p>To exercise any of these rights, contact your advisor or reach us directly at <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>. We will respond within 30 days.</p>

      <h2>7. Changes to this document</h2>
      <p>FastTrackr AI may update this consent document from time to time. If we make material changes, we will post the updated version on the client portal. Your continued use of the portal following any update constitutes your acceptance of the revised terms.</p>

      <h2>8. Contact</h2>
      <p><strong>FastTrackr Inc.</strong><br />Email: <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a></p>

      <h2>Client acknowledgment record</h2>
      <p>This section is completed automatically when you check the consent box on the FastTrackr client portal. The following details are captured at the time of acknowledgment: date and time, email address, and IP address. This record is retained by FastTrackr AI as evidence of your consent.</p>
    </LegalShell>
  );
}
