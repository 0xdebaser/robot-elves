import { useState } from "react";

//API key is pages/api/generate.js

import Head from "next/head";

import InputPrompts from "../components/input/inputPrompts.component";
import LoadingBar from "../components/loadingBar";
import apiOutputOnChangeHandler from "../components/input/handlers/apiOutputOnChangeHandler";
import LetterWrapper from "../components/letter/letterWrapper";

const Home = () => {
  // The propmpt that gets sent to the API
  const [prompt, setPrompt] = useState();
  // The text returned from the API
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
      <div>
        <div className="header">
          <div id="powered-by-div">
            <a href="https://www.gennyapp.com">
              <img
                id="powered-by"
                src="powered_by_genny.png"
                alt="powered by genny"
              />
            </a>
          </div>
          <div className="header-title">
            <h1>
              Robot Santa is here to spread holiday cheer!
              <br />
              🎄
            </h1>
          </div>
          <hr id="header-hr" />
          {!prompt && (
            <div className="header-subtitle">
              <h2>
                Customized letters from the&nbsp;
                <span className="red-text">big man</span> and his crew, powered
                by the latest North Pole A.I. magic.
              </h2>
            </div>
          )}
        </div>
        {prompt && (
          <h2 className="prompt-paragraph red-text">"{prompt.slice(0, -1)}"</h2>
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
      {isGenerating && <LoadingBar isGenerating={isGenerating} />}
      {apiOutput && !editLetter && (
        <LetterWrapper
          apiOutput={apiOutput}
          setEditLetter={setEditLetter}
          setIsGenerating={setIsGenerating}
          prompt={prompt}
          setApiOutput={setApiOutput}
          reset={reset}
        />
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
            className="editing-button"
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
