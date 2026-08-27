import { redirectLoader } from '../../lib/redirect';

export const loader = redirectLoader('/who-we-serve/acquisitive-rias');
export const clientLoader = loader;

export default function Redirect() {
  return null;
}
