






let array = [1,2,3,5,6,6,7,8,9,10];
let res = -1;

console.log(binary_search_one(0,array.length - 1,array, 5));


function binary_search_one(start, end , a, x) {
	
	while(start <= end){

		let mid = (start + end)/2;
		mid = Math.floor(mid);

		if(a[mid] == x){
			return mid;
		}
		
		if(a[mid] > x){
			end = mid - 1;
		}
		else{
			start = mid + 1;
		}
	}

	return -1;
}
