function InputButton(props) {
  function clickHandler() {
    props.setActiveInput(props.next);
    if (props.next === "generateLetter") {
      console.log("🎅🤖🤖🎅🤖🎅🤖");
    }
  }

  return <button onClick={clickHandler}>{props.label}</button>;
}

export default InputButton;
