import { useState } from "react";

import additonalDetailsOnChangeHandler from "./handlers/additionalDetailsOnChangeHandler";
import authors from "../../assets/data/authors";
import authorNameHelper from "./helpers/authorNameHelper";
import authorNameOnChangeHandler from "./handlers/authorNameOnChangeHandler";
import authorTypeOnChangeHandler from "./handlers/authorTypeOnChangeHandler";
import InputButton from "../buttons/inputButton.component";
import recipientNameOnChangeHandler from "./handlers/recipientNameOnChangeHandler";
import recipientTypeOnChangeHandler from "./handlers/recipientTypeOnChangeHandler";
import recipientTypes from "../../assets/data/recipientTypes";

function InputPrompts({
  prompt,
  setPrompt,
  setApiOutput,
  setIsGenerating,
  authorType,
  setAuthorType,
  authorName,
  setAuthorName,
  recipientType,
  setRecipientType,
  recipientName,
  setRecipientName,
  additionalDetails,
  setAdditionalDetails,
  activeInput,
  setActiveInput,
}) {
  return (
    <div className="prompt-container">
      {activeInput === "authorType" && (
        <div id="author-type-input">
          <p className="question">Who is the letter from?</p>
          {authors.map((author, index) => {
            return (
              <div key={index} className="choice red-text">
                <input
                  onChange={(event) => {
                    authorTypeOnChangeHandler(event, setAuthorType, setPrompt);
                  }}
                  type="radio"
                  id={author}
                  name="author"
                  value={author}
                ></input>
                <label htmlFor={author}>&nbsp;{author}</label>
                <br />
              </div>
            );
          })}
          {authorType && (
            <InputButton
              label="next"
              setActiveInput={setActiveInput}
              next={
                authorType === "Santa Claus" || authorType === "Mrs. Claus"
                  ? "recipientType"
                  : "authorName"
              }
            />
          )}
        </div>
      )}
      {activeInput === "authorName" && (
        <div id="author-name-input">
          <label htmlFor="author-name">
            {authorNameHelper(authorType)}&nbsp;
          </label>
          <input
            type="text"
            id="author-name"
            onChange={(event) =>
              authorNameOnChangeHandler(
                event,
                setAuthorName,
                setPrompt,
                authorType
              )
            }
          ></input>
          {authorName && (
            <div>
              <InputButton
                label="back"
                setActiveInput={setActiveInput}
                next="authorType"
              />
              <InputButton
                label="next"
                setActiveInput={setActiveInput}
                next="recipientType"
                extra="setPromptForAuthorName"
                prompt={prompt}
                setPrompt={setPrompt}
                authorName={authorName}
              />
            </div>
          )}
        </div>
      )}
      {activeInput === "recipientType" && (
        <div id="recipient-type-input">
          <p className="question">What best describes the recipient?</p>
          {recipientTypes.map((recipType, index) => {
            return (
              <div key={index} className="choice red-text">
                <input
                  onChange={(event) => {
                    recipientTypeOnChangeHandler(
                      event,
                      setRecipientType,
                      setPrompt,
                      authorType,
                      authorName
                    );
                  }}
                  type="radio"
                  id={recipType}
                  name="recipType"
                  value={recipType}
                ></input>
                <label htmlFor={recipType}>&nbsp;{recipType}</label>
                <br />
              </div>
            );
          })}
          {recipientType && (
            <div>
              <InputButton
                label="back"
                setActiveInput={setActiveInput}
                next={authorName ? "authorName" : "authorType"}
              />
              <InputButton
                label="next"
                setActiveInput={setActiveInput}
                next="recipientName"
                extra="setPromptForRecipientType"
                prompt={prompt}
                setPrompt={setPrompt}
                recipientType={recipientType}
              />
            </div>
          )}
        </div>
      )}
      {activeInput === "recipientName" && (
        <div id="recipient-name-input">
          <label className="question" htmlFor="recipient-name">
            What is the letter recipient's name?&nbsp;
          </label>
          <input
            type="text"
            id="recipient-name"
            onChange={(event) =>
              recipientNameOnChangeHandler(
                event,
                setRecipientName,
                setPrompt,
                authorType,
                authorName,
                recipientType
              )
            }
          ></input>
          {recipientName && (
            <div>
              <InputButton
                label="back"
                setActiveInput={setActiveInput}
                next="recipientType"
              />
              <InputButton
                label="next"
                setActiveInput={setActiveInput}
                next="additionalDetails"
                extra="setPromptForRecipientName"
                prompt={prompt}
                setPrompt={setPrompt}
                recipientName={recipientName}
              />
            </div>
          )}
        </div>
      )}
      {activeInput === "additionalDetails" && (
        <div id="additional-details-input">
          <label className="question" htmlFor="additional-details">
            What additional details should the letter include?
          </label>
          <textarea
            className="prompt-box"
            placeholder="e.g., good job doing your chores, I'll be reporting to Santa on your behavior, etc."
            onChange={(event) =>
              additonalDetailsOnChangeHandler(
                event,
                setAdditionalDetails,
                setPrompt,
                authorType,
                authorName,
                recipientType,
                recipientName
              )
            }
          />
          <InputButton
            label="back"
            setActiveInput={setActiveInput}
            next="recipientName"
          />
          <InputButton
            label="🎅 write letter! 🤖"
            setActiveInput={setActiveInput}
            next="generateLetter"
            extra="generateLetter"
            prompt={prompt}
            setPrompt={setPrompt}
            recipientName={recipientName}
            setIsGenerating={setIsGenerating}
            setApiOutput={setApiOutput}
          />
        </div>
      )}
    </div>
  );
}

export default InputPrompts;
