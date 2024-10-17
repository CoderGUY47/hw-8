let start = Number(prompt("Enter the first value: "))
let end = Number(prompt("Enter the end value: "))



for(let i=start; i<=end; i++)
{
    if(start==i)
    {
        console.log("=====================");
    }
    console.log(i + "'s multplying start");
    for(let j=1; j<=10; j++)
    {
        let reject = i*j;
        if(40!=reject && 30!=reject)
        {
            console.log(i + " x " + j + " = " + i*j);
        }
    }
    if(i==end)
    {
        console.log("=====================");
        console.log("All done");
        console.log("=====================");
    }
    else
    {
        console.log(i + "'s multiplying end ");
        console.log("=====================");
    }

}
