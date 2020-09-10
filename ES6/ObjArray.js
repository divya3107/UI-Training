var users=[{ name: "divya",age: 21},
               { name: "roja",age:49}];

  
 var x=users.filter(function(item,index){

    return item.age>30
 });
 
 console.log(x[0].name);