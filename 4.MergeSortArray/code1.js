

// Example usage:
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];


// brute force approach
function merge(nums1, m, nums2, n) {

// copy all nums2 elements to the end of nums1
    for(let i=0;i<n;i++)
    {
        nums1[m+i]=nums2[i]
    }

    //sort the nums1 merged array
   nums1.sort((a,b)=>a-b)
   return nums1

}
// merge(nums1, 3, nums2, 3);
console.log(merge(nums1, 3, nums2, 3)); // Output: [1,2,2,3,5,6]
