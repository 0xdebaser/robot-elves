import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import buildspaceLogo from "../assets/buildspace-logo.png";
import InputPrompts from "../components/input/inputPrompts.component";

const Home = () => {
  const [prompt, setPrompt] = useState();

  return (
    <div className="root">
      <Head>
        <title>robot santa | 🤖🎅</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>
              Robot Santa is here to spread holiday cheer!
              <br />
              🎄
            </h1>
          </div>
          <div className="header-subtitle">
            <h2>
              Customized letters 💌 from the{" "}
              <span className="red-text">big man</span> 🎅 and his crew, powered
              by the latest North Pole A.I. 🤖 magic.
            </h2>
            <hr />
            {prompt && <p className="prompt-paragraph red-text">"{prompt}"</p>}
          </div>
        </div>
        <InputPrompts prompt={prompt} setPrompt={setPrompt} />
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
