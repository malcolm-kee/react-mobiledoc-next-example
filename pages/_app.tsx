import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../components/mobiledoc-editor.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
