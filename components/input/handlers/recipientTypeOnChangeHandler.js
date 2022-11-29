import generateAndSetPrompt from "../helpers/generateAndSetPrompt";

function recipientTypeOnChangeHandler(
  event,
  setRecipientType,
  setPrompt,
  authorType,
  authorName
) {
  const recipientType = event.target.value;
  setRecipientType(recipientType);
  generateAndSetPrompt(setPrompt, authorType, authorName, recipientType);
}

export default recipientTypeOnChangeHandler;
