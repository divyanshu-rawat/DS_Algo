/*
 * 3. Longest Substring without Repeating Characters
 *
 * Idea:
 *
 * Two pointers + hash map to record 
 */

// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Simple

// * Find all substrings.
// * Out of all substrings how many substrings have unique characters.
// * complexity - o(n^3) 


#include <bits/stdc++.h> 
using namespace std;
#include <unordered_map>

int max(int a, int b){ return a > b ? a : b; }

int longestUniqueSubsttr(string s){


	if(s.size() == 0)
		return -1;


	unordered_map<int, int> set;
	int i = 0;
	int j = 0;
	int result = 0;
	

	while(j < s.size()){

		if(set.find(s[j]) == set.end()){

			set.insert({ s[j] ,j });
			
		}else{

			i = max(i, set[s[j]] + 1);
			set[s[j]] = j;
		}

		result = max(result, j - i + 1);
		j++;
	};

	return result;
};

int main() 
{ 
    char str[] = "ABDEFGABEF"; 
    
    printf("\n The input string is %s", str); 
    
    int len =  longestUniqueSubsttr(str); 

    printf("\n The length of the longest non-repeating "
           "character substring is %d \n", len); 
    return 0; 
} 
