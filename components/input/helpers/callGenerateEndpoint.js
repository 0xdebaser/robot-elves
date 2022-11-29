async function callGenerateEndpoint(prompt) {
  console.log("Calling OpenAI 🤖");
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  const { output } = data;
  console.log(output);
  return output;
}

export default callGenerateEndpoint;
