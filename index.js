//anagram



let isAnagram = function (str1, str2) {

  let sorted1 = str1.split('').sort().join('').toLowerCase();
  let sorted2 = str2.split("").sort().join("").toLowerCase();

  return(sorted1 === sorted2);

}

console.log(isAnagram("listen", "silent"));


//palindrome

/*
const str = "racecar";
console.log(str);

let isPalindrome = function (word) {

  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len- Math.floor(len / 2)).toLowerCase();

  let flip = end.split('').reverse().join('');

  return(start === flip);

  console.log(start,end);

}

console.log(isPalindrome('racecar'));

*/



//Reverse String welcome
/*
var str = "WELCOME";
console.log(str);

var output = str.split('').reverse().join('');
console.log(output);
*/