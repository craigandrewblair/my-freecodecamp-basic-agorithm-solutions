// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    let arr = [];
    let reversedArr = [];
    arr = str.split("");
    for(var i = 0; i < arr.length; i++){
      reversedArr.unshift(arr[i]);
    }
    str = reversedArr.join("");
    return str;
  }
  
  console.log(reverseString("craig"));

reverseString("hello") ////should return a string.
// reverseString("hello") //should become "olleh".
// reverseString("Howdy") //should become "ydwoH".
// reverseString("Greetings from Earth") //should return "htraE morf sgniteerG".
