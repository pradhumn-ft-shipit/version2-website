import { redirectLoader } from '../../lib/redirect';

export const loader = redirectLoader('/who-we-serve/custodians');
export const clientLoader = loader;

export default function Redirect() {
  return null;
}
