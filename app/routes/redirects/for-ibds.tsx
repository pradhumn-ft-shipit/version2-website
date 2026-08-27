import { redirectLoader } from '../../lib/redirect';

export const loader = redirectLoader('/who-we-serve/independent-broker-dealers');
export const clientLoader = loader;

export default function Redirect() {
  return null;
}
