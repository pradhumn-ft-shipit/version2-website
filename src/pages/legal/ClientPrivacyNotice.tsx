import LegalShell from '../../components/LegalShell';

export default function ClientPrivacyNotice() {
  return (
    <LegalShell
      eyebrow="Transition Platform"
      title="Client Privacy Notice"
      subtitle="This notice is for you — the client. Your financial advisor uses FastTrackr AI to securely collect and organize your information as part of your account transition. This notice explains, in plain language, what data we collect, how we use it, and what rights you have. It should take about 2 minutes to read."
      lastUpdated="April 15, 2026"
    >
      <h2>1. Who is FastTrackr AI?</h2>
      <p>FastTrackr AI is a secure technology platform used by financial advisors, their staff and transition operators to manage the administrative side of account transitions. We are not your financial advisor, broker, or financial institution — we are a tech platform that your advisor has chosen to use.</p>
      <p>We operate solely on your advisor's instructions. Think of us as the secure digital workspace your advisor uses to collect and organize your information for the transition process.</p>

      <h2>2. What information is collected?</h2>
      <p>When you use the FastTrackr client portal, the following types of information may be collected — either submitted by you directly or pre-filled by your financial advisor:</p>
      <ul>
        <li>Your name, SSN, legal ID document details, address, phone number, and email address</li>
        <li>Household member details (e.g. spouse, joint account holders, beneficiaries)</li>
        <li>Account types and custodian details</li>
        <li>Documents you upload, such as a driver's license, brokerage statement, trust agreement, or bank statement</li>
        <li>Financial details such as net worth, income, investment experience, and objectives for your account repapering</li>
      </ul>
      <p>You are never required to upload more than you are comfortable sharing. Your advisor can help you complete any remaining information.</p>

      <h2>3. Why is this information needed?</h2>
      <p>Your data is collected solely to support your account transition. Specifically, it is used to:</p>
      <ul>
        <li>Pre-fill and complete your transition paperwork accurately</li>
        <li>Reduce the amount of manual data entry you and your advisor need to do</li>
        <li>Ensure your new account records are complete before submission to your financial advisor's new firm</li>
      </ul>
      <p>Your information is never used for marketing or advertising.</p>

      <h2>4. Who can see your information?</h2>
      <table>
        <thead>
          <tr>
            <th>Who</th>
            <th>Can they see your data?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Your financial advisor and their firm</td><td>Yes — this is the purpose of the platform</td></tr>
          <tr><td>Your new custodian / firm</td><td>Only the data your financial advisor submits as part of the formal transition</td></tr>
          <tr><td>FastTrackr AI staff</td><td>Only when needed to provide technical support, under strict confidentiality</td></tr>
          <tr><td>Advertisers or marketers</td><td>Never</td></tr>
          <tr><td>Your prior firm</td><td>Never</td></tr>
          <tr><td>Any other third parties</td><td>Never, except as required by law</td></tr>
        </tbody>
      </table>

      <h2>5. How is your information protected?</h2>
      <p>FastTrackr AI applies industry-standard security measures to protect your data:</p>
      <ul>
        <li>All data is encrypted when transmitted over the internet</li>
        <li>All data is encrypted when stored on our servers</li>
        <li>Access to your data is restricted to your financial advisor and authorized FastTrackr staff only</li>
        <li>Your session is secured via one-time passcode (OTP) verification</li>
      </ul>

      <h2>6. How long is your information kept?</h2>
      <p>Your data is retained only for as long as it is needed for your account transition. Once the project is closed:</p>
      <ul>
        <li>Your data is deleted from active systems within <strong>30 days</strong></li>
        <li>Backup copies are fully purged within <strong>60 days</strong></li>
      </ul>
      <p>You may request deletion at any time by contacting your advisor or emailing us directly at <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</p>

      <h2>7. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> — ask us what information we hold about you</li>
        <li><strong>Correct</strong> — ask us to fix any inaccurate information</li>
        <li><strong>Delete</strong> — request that your information be removed from the platform</li>
        <li><strong>Withdraw</strong> — stop participating at any time; just contact your advisor</li>
      </ul>
      <p>Because your data was entered on behalf of your advisor, the best first step is always to contact them directly. You can also contact us at <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a> and we will coordinate with your advisor to action your request.</p>

      <h2>8. Consent document</h2>
      <p>When you access the FastTrackr client portal, you will be asked to review and acknowledge a separate <a href="/client-data-consent-acknowledgment">Client Data Consent &amp; Acknowledgment</a>. That document summarises the key points of this Privacy Notice and records your consent. This Privacy Notice provides the full detail behind that consent and should be read alongside it.</p>

      <h2>9. Questions?</h2>
      <p>If you have any questions about how your information is handled, please contact:</p>
      <p><strong>FastTrackr Inc.</strong><br />Email: <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a></p>
    </LegalShell>
  );
}
