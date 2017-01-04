// In this assignment, you will need to work through each of the steps and figure out what the value of the variable equals each
// step of the way. Once you have worked out what the value is at each step, send an email to your instructor letting us
// know what you think the answers are.

//variable created:
var x = 3;

//step 1, what does x after the changes in the code below?
x = x + x
//x = 3 + 3
//x = 6

//step 2, what does x after the changes in the code below?
//x is currently 6
for(var i = 0; i < 4; i++){
    x = x + 1
}
//It will run through the loop 4 times
//1st time x = 6 so 6 + 1 is 7, then counter moves to 1 and i is still less than 4 -->repeat
//2nd time x = 7 so 7 + 1 is 8, the counter moves to 2, i is still less than 4-->repeat
//3rd time x = 8 so 8 + 1 is 9, the counter moves to 3, i is still less than 4-->repeat
//4th time x = 9 so 9 + 1 is 10, the counter moves to 4, i is not less than 4 now-->STOP

//step 3, what does x after the changes in the code below?
//x is currently 10
if(x > 10){
    x = 2;
} else {
    x = 3;
}
//10 is n ot more than 10 (it's equal) so x will equal 3.

//step 4, what does x after the changes in the code below?
//x is currently 3
function doubleIt(value){ //function is declared here and is called doubleIt and is passed a value as a parameter
    return value*2; //the function returns the value multiplied by 2
}

doubleIt(x);  //the function is called here and passed our x value which is 3
x = doubleIt(x); //3 * 2 = 6 This is a global variable, since there is no "var" infront of it

//step 5, what does x after the changes in the code below?
//x is currently 6
var numberArray = [1,2,3]; //here is a variable called numberArray

for(i = 0; i < numberArray.length; i++){//while i is less than the length of the array, the loop will continue with the code in the {} and i will then increase by 1
    x = x + numberArray[i]; //x + whatever number i is
}
//When i = 0, x = 6 + 0, which means x is still 6. The i is less than numberArray length, so i increments by 1 and the loop repeats;
//When i = 1, x = 6 +1, which means x is now 7. The i is less than numberArray length, so i increments by 1 and the loop repeats;
//When i = 2, x = 7 + 2, which means x is now 9. The i is less than numberArray length, so i increments by 1 and the loop repeats;
//When i = 3, x = 9 + 3, which means x is now 12. The i is no longer < 3, so the loop stops
//x = 12 is our final answer
