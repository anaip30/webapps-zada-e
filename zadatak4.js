

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [];

let a = (x) => 
{
    for(let i=0; i<x.length; i++)
    {
        if(x[i]%3==0)
        {
            arr2.push(x[i])
        }
    }
    console.log("Ispis :" + x + " -> Brojevi djeljivi s 3:" + arr2)
}
a(arr1)


