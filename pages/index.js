import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import buildspaceLogo from "../assets/buildspace-logo.png";
import InputPrompts from "../components/input/inputPrompts.component";
import LoadingBar from "../components/loadingBar";

const Home = () => {
  const [prompt, setPrompt] = useState();
  const [apiOutput, setApiOutput] = useState();
  const [isGenerating, setIsGenerating] = useState(false);
  const [authorType, setAuthorType] = useState(null);
  const [authorName, setAuthorName] = useState(null);
  const [recipientType, setRecipientType] = useState(null);
  const [recipientName, setRecipientName] = useState(null);
  const [additionalDetails, setAdditionalDetails] = useState(null);
  const [activeInput, setActiveInput] = useState("authorType");

  function reset() {
    setPrompt(null);
    setApiOutput(null);
    setIsGenerating(false);
    setAuthorType(null);
    setAuthorName(null);
    setRecipientType(null);
    setAdditionalDetails(null);
    setActiveInput("authorType");
  }

  return (
    <div className="root">
      <Head>
        <title>robot santa | 🤖🎅</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas&display=swap"
          rel="stylesheet"
        ></link>
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
        <InputPrompts
          prompt={prompt}
          setPrompt={setPrompt}
          setApiOutput={setApiOutput}
          setIsGenerating={setIsGenerating}
          authorType={authorType}
          setAuthorType={setAuthorType}
          authorName={authorName}
          setAuthorName={setAuthorName}
          recipientType={recipientType}
          setRecipientType={setRecipientType}
          recipientName={recipientName}
          setRecipientName={setRecipientName}
          additionalDetails={additionalDetails}
          setAdditionalDetails={setAdditionalDetails}
          activeInput={activeInput}
          setActiveInput={setActiveInput}
        />
      </div>
      {isGenerating && <LoadingBar isGenerating={isGenerating} />}
      {apiOutput && (
        <div id="letter-container">
          <p>{apiOutput}</p>
          <button
            onClick={() => {
              alert("Print functionallity coming soon!");
            }}
          >
            print letter
          </button>
          <button onClick={reset}>reset</button>
        </div>
      )}
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
