import { Configuration, OpenAIApi } from "openai";
// import { env } from "./utils/env";

const configuration = new Configuration({
  // apiKey: env.OPENAI_API_KEY,
  apiKey: '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'
})

const openai = new OpenAIApi(configuration)
try {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: '写一首关于春天的诗歌',
    temperature: 0.7,
    max_tokens: 256
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

