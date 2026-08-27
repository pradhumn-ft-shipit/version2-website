import type { MetaDescriptor } from 'react-router';
import SolMeetingAssistant from '../../../src/pages/solutions/SolMeetingAssistant';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'AI Meeting Assistant for Advisors | FastTrackr AI',
  description:
    'Your always-on meeting coordinator. Pre-meeting prep, in-meeting notes, and post-meeting follow-ups handled, so advisors can focus on the conversation.',
  canonical: '/solutions/meeting-assistant',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SolMeetingAssistant;
