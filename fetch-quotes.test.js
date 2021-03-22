const fetchQuote = require("./fetch-quotes");

describe('test for fetch quotes function', () => {
    it('should return one quote from API in correct format ', async () => {

        const result = await fetchQuote();

        expect(result).toEqual(expect.objectContaining({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String)
        }))
    });
});
