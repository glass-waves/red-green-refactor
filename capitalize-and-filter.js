const capitalizeAndFilter = (arr) => {
    const newArr = arr.map(string => string.toUpperCase()).filter(string => string.charAt(0) !== 'F')
    return newArr;
}

module.exports = capitalizeAndFilter;