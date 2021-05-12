
function sumOfPairs(nums, target) {
    let sortedNums = nums.sort()
    let n = sortedNums.length - 1
    let i = 0
    let res = []
    while (i < n) {
        if (sortedNums[i] + sortedNums[n] === target) {
            res.push([sortedNums[i], sortedNums[n]])
            i++
            n--
        }
        else {
            sortedNums[i] + sortedNums[n] < target ? i++ : n--
        }
    }
    return res
}

function mostFrequent(arr) {
    let map = {}
    let mostFrequent = {}
    arr.forEach(val => {
        map[val] = map[val] + 1 || 1
    })
    const res = Object.values(map).sort((a, b) => a - b)
    for (const key in map) {
        if (map[key] === res[res.length - 1]) {
            console.log(`${key} appears ${map[key]} times`);
            mostFrequent.value = Number(key)
            mostFrequent.times = map[key]
        }
    }
    return mostFrequent
}

module.exports = {
    sumOfPairs,
    mostFrequent
}