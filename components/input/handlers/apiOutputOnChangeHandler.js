function apiOutputOnChangeHandler(event, setApiOutput) {
  const apiOutput = event.target.value;
  setApiOutput(apiOutput);
}

export default apiOutputOnChangeHandler;
