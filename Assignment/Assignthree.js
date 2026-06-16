function odd() 
{
    for (let a = 0; a <= 25; a++) //incrementer from 0 to 25 and loop stops when 25=25
        {
        if (a%2!=0) //module division while dividing by 2 if it returns any reminder than it is odd
            {
            console.log(a);
        }
    }
}
odd();



function even() 
{
    for (let b = 0; b <= 25; b++) //incrementer from 0 to 25 and loop stops when 25=25
        {
        if (b%2===0) //module division while dividing by 2 if the reminder is zero then it is even
            {
            console.log(b);
        }
    }
}
even();