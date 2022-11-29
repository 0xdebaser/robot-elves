import generateAndSetPrompt from "../helpers/generateAndSetPrompt";

function additonalDetailsOnChangeHandler(
  event,
  setAdditionalDetails,
  setPrompt,
  authorType,
  authorName,
  recipientType,
  recipientName
) {
  const additionalDetails = event.target.value;
  setAdditionalDetails(additionalDetails);
  generateAndSetPrompt(
    setPrompt,
    authorType,
    authorName,
    recipientType,
    recipientName,
    additionalDetails
  );
}

export default additonalDetailsOnChangeHandler;
