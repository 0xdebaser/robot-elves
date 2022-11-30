import React from "react";

import callGenerateEndpoint from "../input/helpers/callGenerateEndpoint";

const Letter = ({
  apiOutput,
  setEditLetter,
  setIsGenerating,
  prompt,
  setApiOutput,
  reset,
}) => {
  return (
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
          setApiOutput(null);
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
  );
};

export default Letter;
