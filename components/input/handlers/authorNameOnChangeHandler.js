import generateAndSetPrompt from "../helpers/generateAndSetPrompt";

function authorNameOnChangeHandler(
  event,
  setAuthorName,
  setPrompt,
  authorType
) {
  const authorName = event.target.value;
  setAuthorName(authorName);
  generateAndSetPrompt(setPrompt, authorType, authorName);
}

export default authorNameOnChangeHandler;
