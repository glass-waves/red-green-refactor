const copyAndPush = (arr, item) => {
    const newArr = [...arr];
    newArr.push(item);
    return newArr;
}

module.exports = copyAndPush;