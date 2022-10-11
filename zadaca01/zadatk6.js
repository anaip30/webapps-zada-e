let s=1; 
let check = (x) => 
{
    if (x>=0 && x<=1000)
    {
        for(let i=1; i<x; i++)
        {
            if(i%7===0)
            {
                s *= i;
            }
        } console.log("dani broj X: " + x + " -> " + s);
    } 
    else console.log(x + " je van inervala");
}

check(23)