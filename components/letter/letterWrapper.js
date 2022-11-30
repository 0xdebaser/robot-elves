import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

//import Letter from "./letter.component";

const Letter = React.forwardRef(
  (
    { apiOutput, setEditLetter, setIsGenerating, prompt, setApiOutput, reset },
    ref
  ) => {
    return (
      <div>
        <div id="letter-container" ref={ref}>
          <p ref={ref}>{apiOutput}</p>
        </div>
      </div>
    );
  }
);

function LetterWrapper({
  apiOutput,
  setEditLetter,
  setIsGenerating,
  prompt,
  setApiOutput,
  reset,
}) {
  //from https://www.npmjs.com/package/react-to-print
  const componentRef = useRef();

  return (
    <div>
      <Letter
        apiOutput={apiOutput}
        setEditLetter={setEditLetter}
        setIsGenerating={setIsGenerating}
        prompt={prompt}
        setApiOutput={setApiOutput}
        reset={reset}
        ref={componentRef}
      />
      <div id="letter-button-container">
        <ReactToPrint
          trigger={() => (
            <button className="letter-button">print letter</button>
          )}
          content={() => componentRef.current}
        />
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
    </div>
  );
}

export default LetterWrapper;
