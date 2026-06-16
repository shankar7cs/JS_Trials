//looping -to perform repeated actions

/* console.log(1);
console.log(2); */

/* for (let index = 0; index < array.length; index++) {  //initialization; condition; iteration
    const element = array[index];
    
} */

// when the no of count/iterations are known, we go for loop

/* for(i=0;i<=10;i++){
    console.log(i);
    
} */


//while -> when iterations are not kown or undefined count.

/* while (true) {
    console.log("Hello");
    
} */
   /* let number=0
   if(number==1){
    while (number<10) {
        console.log("the number is", number);
        number++
        
    }
    } */


    const input=process.argv[2]

    const age=Number(process.argv[3])


    console.log(process.argv);


    console.log("Enter your name", input);
    console.log("your age is",age);