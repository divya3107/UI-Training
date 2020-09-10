var condition='positive'

var p= new Promise(function(resolve,reject){
    if(condition=='positive'){
        resolve("Iam good")
    }
    else{
        reject("OOps!!!!!")
    }
});

p.then(function(response){
      console.log(response);

})
.catch(function(errorResponse){

     console.log(errorResponse);
});