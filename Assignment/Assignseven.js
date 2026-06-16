/*sample to self understand

const originalString = "java";

// 1. Split into array, 2. Sort array elements, 3. Join back into a string
const sortedString = originalString.split("").sort().join()
//split method takes the string and converts it into array
// sort method rearranges the character in ascending a to z here inside the array
//join method converts it back as string
console.log(sortedString); 

*/
//Example 3


function isAnagram(str1,str2){    //anagram function def block
    let sorterstr1 = str1.split("").sort().join("")
    let sorterstr2 = str2.split("").sort().join("")
    
    console.log("Sorted String 1 is ",sorterstr1);
    console.log("Sorted String 2 is ",sorterstr2);
    if(sorterstr1 === sorterstr2){
        return true;
    }
    else{
        return false;
    }
}


let isAnagramBoolean1= isAnagram("listen", "silent")
console.log("isAnagram => ",isAnagramBoolean1)
let isAnagramBoolean2 = isAnagram('Hello', 'World')
console.log("isAnagram => ",isAnagramBoolean2)
