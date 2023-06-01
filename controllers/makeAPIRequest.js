const express = require('express');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async(req,res) => {

    try {
        const prompt = req.body["input-field"];
        const model = req.body["model-selection"];
    
        const response = await openai.createCompletion({ "model": model, "prompt": prompt, "max_tokens": 2048});
        const answer = response.data.choices[0].text.trim();
                
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({ data: answer }));
    }
    catch (error) {
        console.log(error)
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
}