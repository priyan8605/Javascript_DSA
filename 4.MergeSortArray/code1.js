

// Example usage:
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];


// brute force approach
function merge(nums1, m, nums2, n) {
    let result=[]

// copy all nums2 elements to the end of nums1
    for(let i=0;i<n;i++)
    {
        nums1[m+i]=nums2[i]
    }

    //sort the nums1 merged array
   nums1.sort((a,b)=>a-b)
//    return nums1=> not return as leet code doesn't want us to return
result=nums1


}
console.log(`output of merge: ${JSON.stringify(merge(nums1, 3, nums2, 3))}`); // Output: [1,2,2,3,5,6]
console.log('nums1 after merge: ', nums1) // Output: [1,2,2,3,5,6]



// optimized approach
let num1 = [1,2,3,0,0,0];
let num2 = [2,5,6];

function mergeOptimized(num1, m, num2, n) {
    let mergedArray=Array(m+n).fill(0)// create a new array of size m+n and fill it with 0
let i=0;//iterate on nums1
let j=0;//iterate on nums2
let k=0;//iterate on mergedArray

while(i<m && j<n)// while both arrays have elements to compare
{
    if(nums1[i]<nums2[j])
    {
        mergedArray[k]=num1[i]
        i++
        k++
    }
    else
    {
        mergedArray[k]=num2[j]
        k++;
        j++
    }
}
while(i<m)//when nums1 has remaining elements, copy them to mergedArray as nums2 is already exhausted
{
    mergedArray[k]=num1[i]
    i++
    k++
}
while(j<n)//when nums2 has remaining elements, copy them to mergedArray as nums1 is already exhausted
{
    mergedArray[k]=num2[j]
    j++
    k++
}
//return mergedArray =>leet code does not want us to update num1 

return num1=mergedArray

// for leet code we need to update the num1 array in place, so we can use a for loop to copy the elements of mergedArray to num1
// for(let i=0;i<mergedArray.length;i++)
// {
//     num1[i]=mergedArray[i]
// }

}

// mergeOptimized(num1, 3, num2, 3) //use this way for leet code as it does not want us to return anything, but we need to update the num1 array in place
// console.log('nums1 after mergeOptimized: ', num1) // Output: [1,2,2,3,5,6]//use this way for leet code as it does not want us to return anything, but we need to update the num1 array in place
console.log(`output of mergeOptimized: ${JSON.stringify(mergeOptimized(num1, 3, num2, 3))}`); // Output: [1,2,2,3,5,6]    