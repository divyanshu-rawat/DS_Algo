

#include <iostream>
#include <algorithm>
using namespace std;

void swap(int *x, int *y){

	int temp;
	temp = *x;
	*x = *y;
	*y = temp;
}

void wave_array(int arr[],int n){

	for(int i=0; i < n - 1 ; i = i + 2 ){
		swap(&arr[i],&arr[i+1]);
	}

	for (int i=0; i<n; i++)
       cout << arr[i] << "\n";
	
}

int main(){

	int array[] = {10,90,49,2,1,5,23};
	int n = sizeof(array)/sizeof(array[0]);

	sort(array,array + n);
   	wave_array(array,n);

    return 0;

}