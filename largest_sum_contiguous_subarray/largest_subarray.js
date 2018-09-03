
// Handles Negative Cases as well.

// Kadane's Algorithm 

module.exports = { 
 //param A : array of integers
 //return an integer
	maxSubArray : function(A){
	    
	    
	var max_so_far = A[0];
	var max_ending_here = 0;


    for(var i=0; i<A.length; i++){

        max_ending_here = max_ending_here + A[i];

        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here;
        }

        if( max_ending_here < 0){
            max_ending_here = 0;
        }
    }

    return max_so_far;

	}
};
