const capitalizeAndFilter = require('./capitalize-and-filter')

describe('test for capitalize and filter function', () => {

    it('should take in an array of strings, capitalize all strings and filter out any words beginning with f', () => {

        const strArr = ['flood', 'dog', 'grumpy', 'fence', 'labrador', 'water','flight']

        const result = capitalizeAndFilter(strArr);
        const expectation = ['DOG', 'GRUMPY', 'LABRADOR', 'WATER'];

        expect(result).toEqual(expectation);
    });



});