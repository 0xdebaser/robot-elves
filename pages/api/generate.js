import { Configuration, OpenAIApi } from "openai";

const generateAction = async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log(configuration);

  const openai = new OpenAIApi(configuration);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.prompt,
    temperature: 0.7,
    max_tokens: 500,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
