const getName = require("./get-name");

describe('get name function', () => {

    it('should return the value of the name property when given an object', () => {
        const spot = { 
            name: 'spot', 
            age: 5, 
            weight: '20 lbs', 
        }
        const result = getName(spot);
        expect(result).toEqual('spot')
    })
});
