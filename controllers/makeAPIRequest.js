require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async(req,res) => {
    
    const prompt = "Tell me a joke";
    const model = "text-davinci-003";

    const response = await openai.createCompletion({ "model": model, "prompt": prompt, "max_tokens": 2048,});
    console.log(response.data.choices[0].text.trim())
    res.json({ data: response.data.choices[0].text.trim()} );
}