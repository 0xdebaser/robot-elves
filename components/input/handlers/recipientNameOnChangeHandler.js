import generateAndSetPrompt from "../helpers/generateAndSetPrompt";

function recipientNameOnChangeHandler(
  event,
  setRecipientName,
  setPrompt,
  authorType,
  authorName,
  recipientType
) {
  const recipientName = event.target.value;
  setRecipientName(recipientName);
  generateAndSetPrompt(
    setPrompt,
    authorType,
    authorName,
    recipientType,
    recipientName
  );
}

export default recipientNameOnChangeHandler;
