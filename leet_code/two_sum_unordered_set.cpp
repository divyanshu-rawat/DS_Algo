#include <bits/stdc++.h> 
using namespace std;
#include <unordered_set>



void printPairs(int arr[], int arr_size, int target) 
{
	unordered_set<int> s;

	for(int i=0;i < arr_size ; i++){
		int temp = target - arr[i];

		if(temp > 0 && s.find(temp) != s.end()){
			cout << "Pair with given sum " << target << 
                 " is (" << arr[i] << ", " << temp << 
                 ")" << endl;
		}
		s.insert(arr[i]);
	}
}



int main() 
{ 
    int A[] = {1, 4, 45, 6, 10, 8}; 
    int target = 16; 
    int arr_size = sizeof(A)/sizeof(A[0]); 
   
    printPairs(A, arr_size, target); 
    return 0; 
} 