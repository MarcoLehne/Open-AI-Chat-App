const { describe, test, expect } = require('@jest/globals');
const requestChatGPTAPI = require('./makeAPIRequest.js');

describe('openaiFunction', () => {

    test('should return a string when prompted to tell a joke', async () => {

        const req = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {
                "input-field": "Tell me a joke",
                "model-selection": "text-davinci-003"
            },
        };

        const res = {
            setHeader: jest.fn(),
            statusCode: 0,
            end: jest.fn(),
          };

        await requestChatGPTAPI(req, res);

        const response = JSON.parse(res.end.mock.calls[0][0]).data;

        expect(response).toMatch(/.+/i);
    });

    // test('should throw "The model .. does not exist" error when requested with inexisting model', async() => {

    //     const req = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: {
    //             "input-field": "Tell me a joke",
    //             "model-selection": "this-model-does-not-exist"
    //         },
    //     };

    //     const res = {
    //         setHeader: jest.fn(),
    //         statusCode: 0,
    //         end: jest.fn(),
    //       };

    //     await requestChatGPTAPI(req, res);

    //     //console.log(res.end.mock)

    //     try {
    //         if (typeof response === 'object' && response.response.data.error.message) {
    //             throw new Error(response.response.data.error.message);
    //         }
    //     } catch (error) {
    //         expect(error.message).toMatch(/^The model .+ does not exist$/);
    //     }
    // });
});