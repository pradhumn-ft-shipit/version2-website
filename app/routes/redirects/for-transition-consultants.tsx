import { redirectLoader } from '../../lib/redirect';

export const loader = redirectLoader('/who-we-serve/transition-consultants');
export const clientLoader = loader;

export default function Redirect() {
  return null;
}
