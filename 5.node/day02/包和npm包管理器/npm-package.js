const uniq = require('uniq') //数组去重
const arr = [1, 2, 3, 2, 4, 7, 5, 4, 5]
const newArr = uniq(arr)
console.log(newArr);