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
    console.log(`${key} ${charCount[key]}`);//output : char 10
  }
  return charCount

}
countString(str)

