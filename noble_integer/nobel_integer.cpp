
#include <stdio.h>

int check_noble_integer(int arr[],int size){

	int count;

	for(int i=0; i < size ; i++ ){
		count = 0;

		for(int j=0 ; j < size ; j++){

			if(arr[i] < arr[j]){
				count++;
			}
		}

		if(count == arr[i]){
			return arr[i];
		}
	}

	return -1;
}

int main(){

	int array[] = {10,3,20,40,2};
	int size    = sizeof(array) / sizeof(array[0]);

	int noble_integer = check_noble_integer(array,size);
	printf("%d\n", noble_integer);
}