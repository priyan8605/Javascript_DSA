let arr=[1,0,0,1,1,1,0,1,0,0,1]

function sortedArray(arr){
let zeroCount=0;
for(let i of arr){
    if(i==0){
        zeroCount++;
    }
}
// Fill the array with zeros
for(let i=0;i<zeroCount;i++){
   arr[i]=0;
}
// Fill the remaining array with ones
for(let i=zeroCount;i<arr.length;i++)
{
    arr[i]=1
}
return arr;

}
console.log(sortedArray(arr))

// time complexity is O(n) and space complexity is O(1) or  no extra space is used.
let arr1=[1,0,0,1,1,1,0,1,0,0,1]

// sorting
let result =arr1.sort((a,b)=>a-b)
console.log(result)
// time complexity is O(nlogn) and space complexity is O(1) or  no extra space is used.

// 2 pointer method
let arr2=[1,0,0,1,1,1,0,1,0,0,1]

function twoPointer(arr)
{
    let i=0;// pointer for 0 index of arr
    let j=arr.length-1;// pointer for last index of arr

while(i<j)//i<j because if i==j then we have only one element left in the array and we don't need to sort it.
// and i and j should not cross each other because if they cross then we have already sorted the array.
{
  if(arr[i]==0 )//if arr[i] is 0 then we don't need to swap them because they are already in the correct position. so we can move the pointer i to the next index because we have already sorted the array till index i.
  {
    i++;//when arr[i] is 0 then we can move the pointer i to the next index because we have already sorted the array till index i.
  }
  else if(arr[j]==1)// if arr[j] is 1 and arr[i] is 0 then we don't need to swap them because they are already in the correct position.
  {
    j--;//when arr[j] is 1 then we can move the pointer j to the previous index because we have already sorted the array till index j.
  }
  else{
    [arr[i] ,arr[j]]=[arr[j],arr[i]]// swap the elements if they are not in the correct position.
    i++;
    j--;
  }
  
}
return arr;
}
console.log(twoPointer(arr2),'...')




let arr3=[1,0,0,1,1,1,0,1,0,0,1]

function swap(arr,i,j)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;    
}

function TwoPointer(arr)
{
    let i=0;// pointer for 0 index of arr
    let j=arr.length-1;// pointer for last index of arr 
    while(i<j)//i<j because if i==j then we have only one element left in the array and we don't need to sort it.
    {
        if(arr[i]==1)
        {
          swap(arr,i,j)// swap the elements if they are not in the correct position.
           // so due to swapping the 1 will be at the end of the array and 0 will be at the start of the array. so we can move the pointer j to the previous index because we have already sorted the array till index j.
           j--;//when arr[j] is 1 then we can move the pointer j to the previous index because we have already sorted the array till index j.
        }
        else{
            i++;//when arr[i] is 0 then we can move the pointer i to the next index because we have already sorted the array till index i.
        }
    }
    return arr;
}
console.log(TwoPointer(arr3))

// sorting an array using bubble sort algorithm ascending order
let arr4=[10,9,2,4,5,6]
function swap(arr,i,j)
{
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function sort(arr)
{
    for(let i=0;i<=arr.length;i++)
    {
        for(let j=i+1;j<=arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                swap(arr,i,j)
        }
        }
    }
    return arr
}
console.log(sort(arr4))//[ 2, 4, 5, 6, 9, 10 ]
