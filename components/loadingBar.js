import { useEffect, useState } from "react";

let i = 0;

function LoadingBar({ isGenerating }) {
  console.log("Running LoadingBar");
  const [emojiArray, setEmojiArray] = useState([]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function drawBar() {
    await sleep(500);
    console.log("i:", i);
    setEmojiArray([...emojiArray, i % 2 === 0 ? "🤖" : "🎅"]);
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
