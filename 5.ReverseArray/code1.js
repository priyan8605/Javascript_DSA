let arr=[7,1,5,3,6,4]

function reverseArray(arr)
{
    let reverseArr=Array(arr.length).fill(0)// create a new array of size arr.length and fill it with 0
    let j=0
    for(let i=arr.length-1;i>=0;i--)
    {
        reverseArr[j]=arr[i]
        j++
    }
   // arr=reverseArr//instead of returning the reverseArr, we can update the original array in place by assigning the reverseArr to arr.
    for(let i=0;i<reverseArr.length;i++)
    {
        arr[i]=reverseArr[i]//here as arr[i] is a reference to the original array, so any changes made to arr[i] inside the function will affect the original array.
        // as the address of arr[i] is x01, so now arr in parameter is pointing to the original array.
    }

}
reverseArray(arr)
console.log(`output of reverseArray: ${JSON.stringify(arr)}`) //output : [4,6,3,5,1,7]




let arr1=[5,9,1,8,2,3]

function swap(arr1,i,j){
    let temp=arr1[i];//if we just write arr1 then temp is referencing the entire array, not just the element at index i.
    arr1[i]=arr1[j]
    arr1[j]=temp
}

function reverseArrayInPlace(arr1)
{
    let i =0
    let j=arr1.length-1
    while(i<=j)
    {
        swap(arr1,i,j);
        i++;
        j--;
    }

    

}
reverseArrayInPlace(arr1)
console.log(`output of reverseArrayInPlace: ${JSON.stringify(arr1)}`) //output : [3,2,8,1,9,5]

console.log(`output of reverseArrayInPlace: ${arr1}`) //output : [3,2,8,1,9,5]





