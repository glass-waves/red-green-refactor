const capitalizeAndFilter = (arr) => {
    const newArr = [];
    for(let string of arr) {
        const capString = string.toUpperCase();
        if(capString.charAt(0) !== 'F') newArr.push(capString)
    }
    return newArr;
}

module.exports = capitalizeAndFilter;