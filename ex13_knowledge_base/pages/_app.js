// ex13_knowledge_base/pages/_app.js
// This file adds the AskAI widget to every page.
import AskAI from '../components/AskAI';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AskAI />
    </>
  );
}
