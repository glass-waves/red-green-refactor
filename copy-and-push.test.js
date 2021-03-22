const copyAndPush = require('./copy-and-push')
describe('copy and push function test', () => {
    it('should return a copy of given array with item push to end', () => {
        const arr = [3, 6, 7, 3, 6];

        const result = copyAndPush(arr, 10);

        const expectation = [3, 6, 7, 3, 6, 10];

        expect(result).toEqual(expectation);
    })

});