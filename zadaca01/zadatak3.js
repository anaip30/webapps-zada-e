
let t = (x) =>
 { 
  var s = Math.floor(x / 60);  
  var m = x % 60;
  return (x + "->" + "Ovo je " + s +  " sata i " + m + " minuta")  ;       
}
console.log(t(88));
