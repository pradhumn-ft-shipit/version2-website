import { redirectLoader } from '../../lib/redirect';

export const loader = redirectLoader('/resources/blog');
export const clientLoader = loader;

export default function Redirect() {
  return null;
}
