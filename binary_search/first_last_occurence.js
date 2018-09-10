




let array = [1,2,2,2,2,3,3,3,3,4,5,6,7,8,9,10];
let res = null;

binary_search(0,array.length - 1,array, 3);


function binary_search(start, end , a, x) {
	

while(start <= end){

	let mid = (start + end)/2;
	mid = Math.floor(mid);

	console.log('value of mid', a[mid]);

	if(a[mid] >= x){
		console.log('--', mid);
		res = mid;
		end = mid - 1;
	}
	else{
		console.log('once',mid);
		start = mid + 1;
	}

}

console.log('First Occurence ->',res);
}