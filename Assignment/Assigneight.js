//Write the JS program to print duplicates in an array.

/*
let num = [56,78,90,23,90,76,43,56];

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] === num[j]) {
            console.log(num[i]);
        }
    }
} */



    // print sum value of numers present inside the array 
let a = [1, 2, 3, 4, 5];

// Declare a variable to store the sum
let sum = 0;

// Use a for loop to iterate through the array
// i starts at 0, continues while i < array length, increments by 1 each time
for (let i = 0; i < a.length; i++) {
    // Add the current element to the sum variable
    // a[i] gives us the value at position i in the array
    sum = sum + a[i];
}

// Print the final sum to the console
console.log("The sum of array elements is: " + sum);
