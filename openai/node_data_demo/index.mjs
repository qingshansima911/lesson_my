import { Configuration, OpenAIApi } from "openai";
// 配置
const configuration = new Configuration({
    // chatgpt账号 key
    apiKey: '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'
})
// api 写首诗
const openai = new OpenAIApi
try {
    const response = await openai.createChatCompletion({
        model: 'text-davinci-003', //达芬奇模型
        prompt: '写一首描述春天的诗歌',
        temperature: 0.7, //0-2
        max_tokens: 256 //分词,费用 3.5 4000 4.0 8倍 
    })
    console.log(response.data);
} catch (error) {
    console.log(error);
}