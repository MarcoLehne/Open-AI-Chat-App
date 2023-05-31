const { describe, test, expect } = require('@jest/globals');
const requestChatGPTAPI = require('./makeAPIRequest.js');

describe('openaiFunction', () => {

    test('should return a string when prompted to tell a joke', async () => {

        const req = {};
        req.prompt = "Tell me a joke";
        req.model = "text-davinci-003";

        const response = await requestChatGPTAPI(req);

        expect(response).toMatch(/.+/i);
    });

    test('should throw "The model .. does not exist" when requested with inexisting model', async() => {

        const req = {};
        req.prompt = "Tell me a joke";
        req.model = "model-does-not-exist";

        try {
            const response = await requestChatGPTAPI(req);
            if (typeof response === 'object' && response.response.data.error.message) {
                throw new Error(response.response.data.error.message);
            }
        } catch (error) {
            expect(error.message).toMatch(/^The model .+ does not exist$/);
        }
    });
});