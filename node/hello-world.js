console.log('hello world from Node');

for (let i = 0; i<=10;i++){
    console.log(i)
}



// set timeout
setTimeout(doThis,2000);


var counter = 0;
alsoDoThis = () => {
    console.log( new Date());
    counter++;
    if(counter>=10){
        clearInterval(runningTimer);
    }
}

// set interval
setInterval( ()=> {
    console.log('pushing alert from lambda timeout');
} ,2000);

var delayInMilliseconds = 1000; //1 second
setTimeout(function() {
  console.log('hello world I am from the future')
}, delayInMilliseconds);

// array handling
console.log("\n\nArray Handling")
const myArray = [10,20,30];
console.log(myArray);
for (let i = 0;i<myArray.length;i++){
    console.log(myArray[i])
}

// push and pop, shift and unshift
myArray.push(400);
myArray.push(500)
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(5);
myArray.unshift(6);
console.log(myArray);
myArray.shift();
console.log(myArray);