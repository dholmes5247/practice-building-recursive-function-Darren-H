/*Tasks 
1. Write a function named reverseString that takes a string as input. 
2. The function should: 
○ Return the string itself if it contains only one character (base case). 
○ Use recursion to reverse the string by concatenating the last character 
of the string with the result of the recursive call on the remaining part 
of the string (recursive case). 
3. Test the function with various string inputs to verify its correctness. 
Example Inputs and Outputs: 
reverseString("hello"); // Outputs: "olleh" 
reverseString("recursion"); // Outputs: "noisrucer" 
reverseString("a"); // Outputs: "a" 
reverseString(""); // Outputs: "" 
// */

function reverseString(str){  // Function to reverse characters in a string
    //Base Case-recursion stops at this point
    if(str.length <= 1){ // if the string is empty of has one character its returned
        return str; // returns the string itself
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1)); // recursive case takes that last character of the string and concatenates with result of recursive call on the rest of the string. 

}
console.log(reverseString("hello"));  // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("A"));// Outputs: "A"
console.log(reverseString("")); // Outputs: ""
console.log(reverseString("Darren")); // Outputs: "nerraD"
console.log(reverseString("Just a Test")); // Outputs: "tseT a tsuJ"
console.log(reverseString("123456789")); // Outputs: "987654321"

function testReverseStrings() { // this is a function to test the reverseString function and eliminating all the console.logs.  Cleaner and smoother????
    return [
        reverseString("KISS"),  // Outputs: "SSIK"
        reverseString("it is warmer today"), // Outputs: "yadot remaw si ti"
        reverseString("Is this a proper recursive function?") // Outputs: "?noitcurserp a si siht"
    ];
}
console.log(testReverseStrings()); // Outputs: testing results from function to the terminal.