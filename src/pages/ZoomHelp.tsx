import LegalShell from '../components/LegalShell';

export default function ZoomHelp() {
  return (
    <LegalShell
      eyebrow="Help Documentation"
      title="Zoom Help Documentation"
      subtitle="This document is designed to help users understand how FastTrackr AI works and how it utilizes Zoom meetings to enhance your productivity. FastTrackr AI is an intelligent meeting assistant specifically designed for financial advisors who want to focus on their clients rather than note-taking and administrative tasks."
      lastUpdated="16 April, 2025"
    >
      <p>This guide will walk you through how to connect FastTrackr AI to your workflow, utilize its features effectively, understand data privacy considerations, and troubleshoot common issues that might arise.</p>

      <h2>Installation guide</h2>
      <p>FastTrackr AI is a meeting co-pilot that connects with your calendar and automatically joins your virtual meetings. The installation process is simple:</p>
      <ol>
        <li>Create an account on the FastTrackr AI platform.</li>
        <li>Navigate to the Integrations page in your dashboard.</li>
        <li>Click on &ldquo;Connect Calendar&rdquo;.</li>
        <li>Select your calendar provider (Google Calendar, Microsoft Outlook, etc.).</li>
        <li>Grant the necessary permissions when prompted.</li>
        <li>Verify the connection is active on your dashboard.</li>
      </ol>
      <blockquote>
        You don't have to install or connect Zoom separately to have FastTrackr AI join your Zoom meetings. The system automatically detects meeting links in your calendar events.
      </blockquote>

      <h3>Prerequisites</h3>
      <ul>
        <li>An active email account with calendar functionality.</li>
        <li>Calendar events must contain virtual meeting links (Zoom, Microsoft Teams, Google Meet, etc.).</li>
        <li>Meeting links must include all necessary details to join (meeting ID, passcode if required).</li>
      </ul>
      <p>If you encounter any issues during installation, please contact us at <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a>.</p>

      <h2>FastTrackr AI usage guide</h2>

      <h3>Automatic meeting attendance</h3>
      <p><strong>Description.</strong> FastTrackr AI automatically joins your scheduled virtual meetings as a participant.</p>
      <p><strong>Prerequisites.</strong></p>
      <ul>
        <li>Connected calendar with valid meeting links.</li>
        <li>Scheduled meetings must be virtual (contain a meeting URL).</li>
      </ul>

      <h3>Meeting summaries</h3>
      <p><strong>Description.</strong> After meetings, FastTrackr AI will create summaries of the discussion points, decisions, and action items.</p>
      <p><strong>Prerequisites.</strong></p>
      <ul>
        <li>FastTrackr AI must be present in the meeting.</li>
        <li>Clear audio quality for accurate transcription.</li>
      </ul>

      <h2>Uninstallation guide</h2>
      <h3>Disconnecting FastTrackr AI</h3>
      <p>Since FastTrackr AI doesn't require direct Zoom authentication, uninstallation primarily involves disconnecting your calendar integration:</p>
      <ol>
        <li>Log into your FastTrackr AI dashboard.</li>
        <li>Navigate to the Integrations page.</li>
        <li>Find your active calendar integration.</li>
        <li>Click &ldquo;Deactivate&rdquo; or &ldquo;Disconnect&rdquo;.</li>
      </ol>

      <p>Alternatively, you can revoke access through your email provider's third-party app section:</p>

      <h4>For Google</h4>
      <ol>
        <li>Go to your Google Account settings.</li>
        <li>Navigate to &ldquo;Security&rdquo; &gt; &ldquo;Third-party apps with account access&rdquo;.</li>
        <li>Find FastTrackr AI and click &ldquo;Remove Access&rdquo;.</li>
      </ol>

      <h4>For Microsoft</h4>
      <ol>
        <li>Go to your Microsoft Account settings.</li>
        <li>Navigate to &ldquo;Privacy&rdquo; &gt; &ldquo;Apps and services&rdquo;.</li>
        <li>Find FastTrackr AI and click &ldquo;Remove permissions&rdquo;.</li>
      </ol>

      <p>If you wish to completely delete your account, please contact us at <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a> and we'll process your request.</p>

      <h2>Troubleshooting</h2>
      <h3>FastTrackr AI is not joining my meetings</h3>
      <ul>
        <li>Verify your calendar integration is active on the dashboard.</li>
        <li>Check that your calendar events contain valid meeting links.</li>
        <li>Ensure meeting links include all necessary joining information.</li>
        <li>For recurring meetings, try updating the meeting invitation with fresh meeting details.</li>
      </ul>

      <h2>FAQ</h2>
      <h3>Will the bot join all my meetings?</h3>
      <p>Yes, FastTrackr AI will automatically join all virtual meetings on your calendar. You can remove the bot from specific meetings during the meeting.</p>
      <h3>How is my meeting data secured?</h3>
      <p>FastTrackr AI employs end-to-end encryption for sensitive information and follows industry best practices for data security. Raw meeting recordings are deleted within 7 days after processing.</p>
      <h3>Does FastTrackr AI work with all video conferencing platforms?</h3>
      <p>FastTrackr AI works with most major video conferencing platforms including Zoom, Microsoft Teams, and Google Meet, as long as the meeting link is included in your calendar event.</p>

      <h2>Contact support</h2>
      <p>Our support team is available to help you with any questions or issues:</p>
      <p><strong>Email support:</strong> <a href="mailto:contact@fasttrackr.ai">contact@fasttrackr.ai</a> <em>(response within 24 business hours)</em></p>
      <p>For urgent matters, please include &ldquo;URGENT&rdquo; in your email subject line and we'll prioritize your request.</p>
    </LegalShell>
  );
}
