  


 let array = []

 for(let line = 0 ; line < 5; line++ ){
 	
 	array.push([]);
 	
 	for(let i=0 ; i<=line; i++){
 		if( i == 0 || i == line){
			array[line][i] = 1;
		}
		else{
			array[line][i] = array[line - 1][i - 1] + array[line - 1][i];
		}
 	}
 }

console.log(array);

