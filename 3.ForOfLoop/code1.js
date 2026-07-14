let arr=[4,3,2,3]

// using traditional for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])//   4,3,2,3
}
// here we can use let and var to declare the variable i in the traditional for loop but const we can not use.
// using for of loop
for(const value of arr)
{
    console.log(value)//4,3,2,3
}
// here we can use let ,const and var to declare the variable value in the for of loop.

// using for of in string
let str="hello" 
for(const value of str)
{
    console.log(value)//h,e,l,l,o
}
// here we can use let ,const and var to declare the variable value in the for of loop.


