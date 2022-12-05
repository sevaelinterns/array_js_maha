var Array1 = [-2, -5, -6, -8, -12,-12,-17];
array = Array1 .map(s => Math.abs(s));
console.log(array);
var  Array2 =[3,4,7,30,11,11,13];
// var sum = arry.map((val, idx) => val + arry2[idx]);
// console.log(sum);
//add
var Total = [];
for( var i = 0; i < array.length; i++)
{
    Total.push(array[i]+ Array2[i]);
}
//sort
const number = Total;
Total.sort(function(a, b){return a - b});
console.log(Total);
//min max
console.log(Math.min(...Total));
console.log(Math.max(...Total));
 //duplicate
 let duplicate= [...new Set(Total)];

console.log(duplicate);
//muliplay 
let arr1=[5, 9, 13, 23, 30, 38]
let arr2=[4,5,7,9,12,14]
    
    for (let i = 0; i< arr1.length; i++) {
        let res=[];
        for (let j = 0; j < arr2.length; j++) {
            res[j]=arr1[i]*arr2[j];   
        }
        console.log(res)
    }
    

    function myFunction() {
        var values = document.getElementById("text").value;
       var values1 = Array.from(values);
       var values2 ="<br>";
       for(i=0;i<values1.length;i++){
        values2+=values1[i];
        document.write(values2)
       }
}
  