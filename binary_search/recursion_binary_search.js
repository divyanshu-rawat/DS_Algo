



let number = 6;
let res = 0;

let start = 0;
let end = number;

console.log((square_root_binary(start,end,number)));

function square_root_binary(start,end,number){

	let mid = ( start + end ) / 2;
	mid = Math.floor(mid);

	if(start >= end){
		// console.log('once')
		return mid;
	}

	if(mid * mid == number){
		return mid;
	}

	if(mid * mid < number){
		// console.log(res);
		return square_root_binary(mid + 1, end , number);
	}
	else{
		// console.log('iam')
		return square_root_binary(start, mid - 1 , number);
		
	}

	// console.log('kha')
	return mid;
}