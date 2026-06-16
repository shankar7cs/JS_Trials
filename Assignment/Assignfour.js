// Step 1: Create a function named that takes a number as a parameter
function checkNumberType(number) {
    
    
    
    // using conditional statement to check number type
    
    if (number > 0) // Check if number is greater than 0 (Positive number)
        {
        console.log ("Positive number "+number);  // Assign "Positive" if condition is true
        
        } 
    else if (number < 0) // Check if number is less than 0 (Negative number)
        {
         console.log ("Negative number "+number);  // Assign "Negative" if condition is true
        
    } 
    else
         {
         console.log ("zero value number "+number);      // Assign "Zero" if number equals 0
    }
    
}


checkNumberType(5); //  Call the function and print the result
checkNumberType(-5); 
checkNumberType(0); 