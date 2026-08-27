import { redirectLoader } from '../../lib/redirect';

// Also 301'd at the host (render.yaml + public/_redirects), which wins on direct
// hits; this keeps in-app navigations to /aon redirecting too, matching src/App.tsx.
export const loader = redirectLoader('/contact');
export const clientLoader = loader;

export default function Redirect() {
  return null;
}
