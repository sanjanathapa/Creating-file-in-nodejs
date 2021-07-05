//A callback is a function passed as an argument to another function.
//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
  //example 1
   function myDisplay(hii) { 
       console.log(hii)
   }
  
   function myFirst() {
     myDisplay("Hello");
   }
  
   function mySecond() {
     myDisplay("Goodbye");
   }
  
   mySecond();
   myFirst();

   
   //example 2 sequence control
   function myDisplayer(num){ 
      console.log("sum of numbers:" ,num)
 }

 function myCalculator(num1, num2, callback) {
   let sum = num1 + num2;
   callback(sum);
  //console.log(sum)
 }

 myCalculator(3, 5, myDisplayer);


 //main example of callback
 function myfunc(){
     console.log("Intro to callback function!!");
 }
 setTimeout(myfunc, 3000);

 //another example
 function myfunc1(value){
console.log(value);
 }
setTimeout(function() {myfunc1("hello Asynchrous callback");}, 6000);

  

  
