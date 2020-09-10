var users=[{ name: "divya",age: 21},
               { name: "roja",age:49}];


var ages = users.map(function(item,index){
    return{x:item.age}
});         

console.log(ages);