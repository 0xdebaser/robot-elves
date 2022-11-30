import { useEffect, useState } from "react";

let i = 0;

const loadingArray = [
  "🤖",
  "L",
  "🎅",
  "O",
  "🤖",
  "A",
  "🎅",
  "D",
  "🤖",
  "I",
  "🎅",
  "N",
  "🤖",
  "G",
  "---",
];

function LoadingBar({ isGenerating }) {
  const [emojiArray, setEmojiArray] = useState([loadingArray[0]]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function drawBar() {
    await sleep(500);
    setEmojiArray([...emojiArray, loadingArray[i % loadingArray.length]]);
    i++;
  }

  useEffect(() => {
    drawBar();
  }, [emojiArray]);

  return (
    <div id="loading-bar">
      {emojiArray.map((emoji, index) => {
        return <span key={index}>{emoji}</span>;
      })}
    </div>
  );
}

export default LoadingBar;
