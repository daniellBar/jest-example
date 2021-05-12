
const functions = require('./functions');
const mostFrequent = functions.mostFrequent
const sumOfPairs = functions.sumOfPairs


test('[1,1,2,3,4,4,4,4,4] should return {value:4, key:5}', () => {
    const array = [1, 1, 2, 3, 4, 4, 4, 4, 4]
    expect(mostFrequent(array)).toEqual({ value: 4, times: 5 })
});

test('array=[10,20,40] target=30 . should return Output: [[10,20]]', () => {
    const array = [20,10,40]
    expect(sumOfPairs(array,30)).toEqual([[10,20]])
});