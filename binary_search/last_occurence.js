




let array = [1,2,3,5,6,6,6,8,9,10,11];
let res = -1;

console.log(binary_search_two(0,array.length - 1,array, 6));


function binary_search_two(start, end , a, x) {
	
	while(start <= end){

		let mid = (start + end)/2;
		mid = Math.floor(mid);
		
		if(a[mid] <= x){
			res = mid;
			start = mid + 1;
		}
		else{
			end = mid - 1;
		}
	}

	if(a[res] == x){
		return res;
	}

	return -1;
}