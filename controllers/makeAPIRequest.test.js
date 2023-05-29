const { describe, test, expect } = require('@jest/globals');
const openaiFunction = require('./makeAPIRequest.js');

describe('openaiFunction', () => {
  test('should return a joke', async () => {
    const response = await openaiFunction();
    console.log("now the response:")
    console.log(response)
    console.log("that was the response")
    expect(response.data.choices[0].text.trim()).toMatch(/.+/i);
  });
});