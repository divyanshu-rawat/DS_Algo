



function square_root(x){

	for(let i=0; i < x ;i++){

		if(i*i > x){
			return i - 1;
		}

	}
}


let x = 53;

console.log(square_root(x));