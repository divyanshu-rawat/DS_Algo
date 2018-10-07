

let a = [ 2, 3, -7, 6, 8, 1, -10, 15 ]
let i=0,j=0

while(i < a.length){

	if(a[i] < 0){
		let temp = a[j]
		a[j] = a[i]
		a[i] = temp
		j++
	}

	i++
}


console.log(a,j);

