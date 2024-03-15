var fruits = ["apple", "banana", 56, 15.55, 'cherry'];

for(i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

for(var i of fruits){
    console.log(i);
}

for(var i in fruits){
    console.log(i);
}
console.log("\nforEach");
fruits.forEach(
    function(items, index){
        console.log(items);
    }
);
