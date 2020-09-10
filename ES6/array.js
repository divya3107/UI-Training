var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.reverse());



/*var a = numbers.filter(function(x,index){

    console.log("elements==>",x);
    console.log("index==>",index);
    console.log("-------------------");



    return x%2==0
});*/

var a =numbers.filter(function(x,index){
        return x%2==1
});

console.log(a);