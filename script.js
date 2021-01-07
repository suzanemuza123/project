function greet() {
    alert ('Fresh flavors');
    
}
greet();

try{
    callExternalFunction();
}
catch(error) {
    console.log(error.message);
}

var connection= getExternalConnection(); try {
    connection.open();
    connection.callExternalFunction();
}
catch(error){
    console.log(error.message);
}
