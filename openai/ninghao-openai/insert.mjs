import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

try {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: '叮，我收到一条短信，显示我的招行里存入了五个亿。',
    suffix: ',想想当初与好友一起创业的日子，真的像在做梦一样。',
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }, {
    proxy: {
      host: '127.0.0.1',
      port: 7890
    }
  })
  console.log(response.data);
} catch (e) {
  console.log(e);
}