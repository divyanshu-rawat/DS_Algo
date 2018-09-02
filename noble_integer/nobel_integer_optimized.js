

// Javascript program to find Noble elements in an array.

function check_noble_integer(arr,size){  // Returns a Noble integer if present, else returns -1.

	for(let i=0; i< size - 1 ; i++){

		// In case of duplicates.
		if(arr[i] == arr[i + 1]){
			continue;
		}
		if(arr[i] == (size - i - 1)){
			return 1;
		}
	}

	if(arr[size - 1] == 0){
		return 1;
	}

	return -1;
}

// Driver code
let array = [5, 6, 2];

//Sort Array
let new_array = array.sort((a, b) => a-b);

console.log(new_array);
let noble_integer = check_noble_integer(new_array,array.length);
console.log(noble_integer);