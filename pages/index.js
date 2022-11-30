import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import buildspaceLogo from "../assets/buildspace-logo.png";
import InputPrompts from "../components/input/inputPrompts.component";
import LoadingBar from "../components/loadingBar";
import apiOutputOnChangeHandler from "../components/input/handlers/apiOutputOnChangeHandler";
import callGenerateEndpoint from "../components/input/helpers/callGenerateEndpoint";

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
  const [editLetter, setEditLetter] = useState(false);

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
      <Head></Head>
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
            {!prompt && (
              <h2>
                Customized letters from the&nbsp;
                <span className="red-text">big man</span> and his crew, powered
                by the latest North Pole A.I. magic.
              </h2>
            )}
          </div>
        </div>

        <div className="test">
          <hr id="header-hr" />
          {prompt && (
            <h2 className="prompt-paragraph red-text">
              "{prompt.slice(0, -1)}"
            </h2>
          )}
          {!apiOutput && (
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
          )}
        </div>
      </div>
      {isGenerating && <LoadingBar isGenerating={isGenerating} />}
      {apiOutput && !editLetter && (
        <div id="letter-container">
          <p>{apiOutput}</p>
          <button
            className="letter-button"
            onClick={() => {
              alert("Print functionallity coming soon!");
            }}
          >
            print letter
          </button>
          <button className="letter-button" onClick={() => setEditLetter(true)}>
            edit text
          </button>
          <button
            className="letter-button"
            onClick={async () => {
              setIsGenerating(true);
              const output = await callGenerateEndpoint(prompt);
              console.log(output.text);
              setApiOutput(`${output.text}`);
              setIsGenerating(false);
            }}
          >
            generate again
          </button>
          <button className="letter-button" onClick={reset}>
            reset
          </button>
        </div>
      )}
      {apiOutput && editLetter && (
        <div id="edit-letter-container">
          <textarea
            className="prompt-box"
            value={apiOutput}
            onChange={(event) => apiOutputOnChangeHandler(event, setApiOutput)}
          ></textarea>
          <br />
          <button
            className="letter-button"
            onClick={() => setEditLetter(false)}
          >
            done editing
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
