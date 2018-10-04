
// # brute_force
// 1. O(n^2) solution: Brute Force

let arr = [1, 4, 45, 6, 10, -8]
let target = 16
let indices = []


for(let i=0; i< arr.length; i++){

	for(let j=0; j< arr.length; j++){

		if( (arr[i] + arr[j]) == target ){
			indices.push(i)
			break
		}
	}
}

console.log(indices);