// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// SOLUTION:
function findLongestWordLength(str) {
  var longestWord = 0;
  var arr = str.split(' ');
  for( var i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord){
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");

// TESTS
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

// findLongestWordLength("May the force be with you") should return 5.

// findLongestWordLength("Google do a barrel roll") should return 6.

// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
