
let arr =  [1, 4, 45, 6, 10, -8]
let sort_arr = arr.sort((a, b) => a - b);
let target = 16
let indices = []


let l = 0;
let r = sort_arr.length - 1

while(l < r){

	if((arr[l] + arr[r]) == target){
		indices.push(l)
		indices.push(r)
	}

	if(arr[l] + arr[r] < target)
		l++
	else
		r--
}

console.log(indices)
console.log(sort_arr)
