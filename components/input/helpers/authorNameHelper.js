function authorNameHelper(authorType) {
  switch (authorType) {
    case "One of Santa's Elves":
      return "What is the name of the elf writing the letter?";
    case "One of Santa's Reindeer":
      return "What is the name of the reindeer writing the letter?";
    case "Another North Pole Resident":
      return "What is the name of the North Pole resident writing the letter?";
    default:
      return "?!?!";
  }
}

export default authorNameHelper;
