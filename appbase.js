
const arr = [1, [2, 3, [4, [5, 6, [11, [12]]]]], 7];
// [1,2,3,4,5,6,7]

function flattenArray(arr) {
  let divyanshu = [];
  for (let x = 0; x < arr.length; x++) {
    if (typeof arr[x] == "object") {
      // console.log("in",arr[x]);
      divyanshu = divyanshu.concat(flattenArray(arr[x]));
      // console.log('current array', divyanshu)
    } else {
      // //console.log('hey',arr[x])
      divyanshu.push(arr[x]);
      // console.log('current array', divyanshu)
    }
  }
  return divyanshu;
}
console.log(flattenArray(arr));
