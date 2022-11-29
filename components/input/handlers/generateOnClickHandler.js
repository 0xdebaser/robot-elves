import callGenerateEndpoint from "../helpers/callGenerateEndpoint";

async function generateOnClickHandler(prompt, setIsGenerating, setApiOutput) {
  console.log("running generateOnClickHandler");
  setIsGenerating(true);
  const output = await callGenerateEndpoint(prompt);
  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

export default generateOnClickHandler;
