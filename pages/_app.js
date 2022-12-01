import Head from "next/head";

import "./styles.css";
import "../components/input/inputPrompts.styles.scss";
import "../components/buttons/inputButton.styles.scss";
import "../components/letter/letter.styles.scss";

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>robot santa | 🤖🎅</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default App;
