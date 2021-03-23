const fetchQuote = require('./fetch-quotes');
jest.mock('node-fetch'); 
const fetch = require('node-fetch');

describe('test for fetch quotes function', () => {
    it('should return one quote from API in correct format ', async () => {
        fetch.mockImplementation(() => {
            return Promise.resolve({
                json: () => {
                    return [{
                        character: 'blender',
                        quote: 'hello',
                        image: 'image'
                    }]
                }
            })
        })
        const result = await fetchQuote();
        console.log(result)
        expect(result).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                text: expect.any(String),
                image: expect.any(String),
            })
        );
    });
});
