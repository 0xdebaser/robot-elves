import callGenerateEndpoint from "../input/helpers/callGenerateEndpoint";

function InputButton(props) {
  async function clickHandler() {
    props.setActiveInput(props.next);
    if (props.next === "generateLetter") {
      console.log("🎅🤖🤖🎅🤖🎅🤖");
      props.setIsGenerating(true);
      const output = await callGenerateEndpoint(props.prompt);
      console.log(output.text);
      props.setApiOutput(`${output.text}`);
      props.setIsGenerating(false);
    }
  }

  return (
    <button className={`input-button ${props.label}`} onClick={clickHandler}>
      {props.label}
    </button>
  );
}

export default InputButton;
