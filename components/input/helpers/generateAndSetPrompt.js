function generateAndSetPrompt(
  setPrompt,
  authorType,
  authorName = null,
  recipientType = null,
  recipientName = null,
  additionalDetails = null
) {
  // Generate author
  let author;
  switch (authorType) {
    case "One of Santa's Elves":
      author = "one of Santa's elves";
      break;
    case "Another North Pole Resident":
      author = "a North Pole resident";
      break;
    case "One of Santa's Reindeer":
      author = "Santa's reindeer";
      break;
    default:
      author = authorType;
  }
  if (authorName) {
    author = `${author} named ${authorName}`;
  }
  // Generate recipient
  let recipient;
  if (recipientType) {
    switch (recipientType) {
      case "other":
        if (recipientName) {
          recipient = `${recipientName}`;
        }
        break;
      default:
        if (recipientName) {
          recipient = `${recipientType} named ${recipientName}`;
        } else {
          recipient = recipientType;
        }
    }
  }
  // Generate new prompt
  let newPrompt;
  if (recipient) {
    newPrompt = `Write a letter from ${author} to ${recipient}.\n`;
  } else {
    newPrompt = `Write a letter from ${author}.\n`;
  }

  if (additionalDetails) {
    newPrompt = `${newPrompt.slice(
      0,
      -2
    )} that includes ${additionalDetails}.\n`;
  }
  setPrompt(newPrompt);
}

export default generateAndSetPrompt;
