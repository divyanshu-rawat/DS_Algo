


// C++ program to print largest contiguous array sum
#include<iostream>
#include<climits>
using namespace std;


void maxSubArraySum(int arr[],int n){

	int max_so_far = INT_MIN, max_ending_here = 0;
	int end = 0;
	int start = 0;

	for(int i=0; i<n; i++){

		max_ending_here = max_ending_here + arr[i];

		if(max_so_far < max_ending_here){
			max_so_far = max_ending_here;
			end = i;
		}

		if( max_ending_here < 0){
			max_ending_here = 0;
			start = i + 1;
		}
	}

	printf("%d\n", max_so_far);
	printf("Starting Index: %d\n", start);
	printf("End Index:%d\n", end);
 

}

int main()
{
    int a[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    int n = sizeof(a)/sizeof(a[0]);
    maxSubArraySum(a, n);
    return 0;
}

