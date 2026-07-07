const str='javascript'

function countVowels(str){
const charCount={}

  // Loop through each character in the string
for(const char of str){
if(charCount.char)
{
// If this character already exists in the object, increase its count
charCount.char=charCount.char + 1
// charCount[char] = charCount[char] + 1;
}
else{
// If this character is seen for the first time, set its count to 1
charCount.char=1
}
}
 // Print results
  for (let key in charCount) {
    console.log(`${key} ${charCount[key]}`);//output : char 10
    // charCount.char always refers to a property literally named "char". 
    // aur char property ka naam "char" hai, isliye har loop iteration me bas usi ek property
    //  ko increment kiya ja raha hai. so else pe loop bss 1st iteration me hi jaa raha hai aur charCount.char ki value 1 ho ja rahi hai. kyki 1st 
    // iteration ke time charCount object me char property nahi hai, isliye else block execute ho raha hai aur charCount.char ki value 1 ho rahi hai.
    // and later iterations me charCount.char property already exist kar rahi hai, isliye if block execute ho raha hai aur charCount.char ki value 1 se increment ho kar 2 ho ja rahi hai.

// Every loop iteration just increments that one property.

// Since "javascript" has 10 characters, the final result is "char": 10.
  }
  return charCount
}
countVowels(str)

function countString(str){

const charCount={}

  // Loop through each character in the string
for(const char of str){
if(charCount[char])
{
// If this character already exists in the object, increase its count
charCount[char]=charCount[char] + 1
// charCount[char] = charCount[char] + 1;
}
else{
// If this character is seen for the first time, set its count to 1
charCount[char]=1
}
}
 // Print results
  for (let key in charCount) {
    console.log(`${key} ${charCount[key]}`);
//output : j 1
// a 2
// v 1
// s 1
// c 1
// r 1
// i 1
// p 1
// t 1
  }
  return charCount

}
countString(str)

