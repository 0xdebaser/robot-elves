import generateAndSetPrompt from "../helpers/generateAndSetPrompt";

function authorTypeOnChangeHandler(event, setAuthorType, setPrompt) {
  const authorType = event.target.value;
  setAuthorType(authorType);
  generateAndSetPrompt(setPrompt, authorType);
}

export default authorTypeOnChangeHandler;
