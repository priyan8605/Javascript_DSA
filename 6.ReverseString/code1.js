// reverse the string using push
let str='hello'
function reverse(str)
{
   let arr=[]
   for(let i=str.length-1;i>=0;i--)
   {
       arr.push(str[i])
   }
   return arr.join('')//join() binds the element of array and convert it into string
}
console.log(reverse(str))//ooleh


let str1='hello'
function swap(str1,i,j)
{
    let temp=str1[i]
     str1[i]=str1[j]
     str1[j]=temp
}
function reverseString()
{
    let i=0
    let j=str1.legth-1
    while(i<j)
    {
        swap(str1,i,j)
        i++;
        j++
    }
}
reverseString(str1)
console.log('str1 after reverse',str1)//hello is only the out because swap() won't work in string 
// because You cannot do str1[i] = str1[j]. Strings don’t allow direct character assignment. 


function swaps(arr,i,j)
{
    let temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
}
function reverseStrings(str1)
{
    let arr=str1.split('')
    console.log('split str1',arr)//[ 'h', 'e', 'l', 'l', 'o' ]
    let i=0
    let j=arr.length-1
    while(i<j)
    {
        swaps(arr,i,j)
        i++;
        j--
    }
   return arr.join('')

    // won't work because string do not allow character assignment str1[i]==arr[i]
//    for(let i=0;i<arr.length;i++)
//    {
//     str1[i]==arr[i]
//    }
}
str1=reverseStrings(str1)
console.log('str1 after reverse',str1)//olleh


// 🔹 Approach : reversed = str[i] + reversed
function reverseString2(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;   // prepend at the front
  }
  return reversed;
}

console.log('reverseString2=>',reverseString2("abc")); 
// Output: "cba"








