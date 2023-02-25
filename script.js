// // Question 1
// var x=prompt("Enter a number")
// console.log(x)
// // *******

// Question 2
// var x=prompt("Enter a number")
// if(x%3==0 && x%4==0)
// {
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
// *******************

// Question 3
// var x=prompt("first number")
// var y=prompt("second number")

// if (Number(x)>Number(y)){
//     console.log(x)
// }
// else if(Number(y)>Number(x)) {
//     console.log(y)
// }
// else if(x==y){
//     console.log("numbers are equal")
// }
// ************

// Question 4
// var x=prompt("Enter a number")

// if (Number(x)<0){
//     console.log("Negative");
// }
// else{
//     console.log("Positive");
// } 
// ***********

// Question 5
// var x=[]
// for(var i=0;i<3;i++){
//     x[i]=prompt("Enter the "+(i+1)+" number")    
// }
// var max=x[0]
// var min=x[0]
// for(var i=0;i<=2;i++){
//     if (x[i]>Number(max)){
//         max=x[i]
//     }
//     if(x[i]<Number(min)){
//         min=x[i]
//     }
// }
// console.log(x)
// console.log("max element= "+max)
// console.log("min element= "+min)
// ***************

// Question 6 & 7 الارقام متقررة في نفس السؤال
// var x=prompt("Enter a Number")
// if(Number(x)%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// **************


// Question 8

// var character=prompt("enter a character")

// if(character=="a" || character=="e" || character=="i" || character=="o" || character=="u" ){
//     console.log("Vowel")
// }
// else if(character=="A" || character=="E" || character=="I" || character=="O" || character=="U"){
//     console.log("Vowel");
// }
// else{
//     console.log("Consonant");
// }

// ************

// Question 9
// var x=prompt("enter a number")
// for(var i=1;i<=Number(x);i++){
//     console.log(i)
// }
// **********

// Question 10

// var x=prompt("enter a number")
// for(var i=1;i<=12;i++){
//     console.log(Number(x)*i)
// }
// ***********

// Question 11
// var x=prompt("enter a number")
// for(var i=1;i<=Number(x);i++){
//     if(Number(i)%2==0){
//         console.log(i);
//     }
// }
// **********

// Question 12
// var number=prompt("enter the number")
// var power=prompt("enter the power")
// var result=1
// for(var i=1;i<=Number(power);i++){
//      result=Number(result)*Number(number)
// }
// console.log(result)
// **********

// Question 12 رقم السؤال متكرر
// var marks=[]
// var total=0
// var avg=0
// var percentage=0
// for(var i=0;i<5;i++){
//     marks[i]=prompt("enter marks of "+(i+1)+" subject")
//     total=total+Number(marks[i])
// }
// console.log(marks);
// console.log("Total Marks= "+total);
// avg=total/5
// console.log("Average Marks= "+avg);
// percentage=(total/500)*100
// console.log("Percentage= "+ percentage+"%");
// ************

// Question 13
// var month=prompt("Enter Month number")
// if(Number(month)==1 || Number(month)==3 || Number(month)==5 || Number(month)==7 || Number(month)==8 || Number(month)==10 || Number(month)==12  ){
//     console.log("Days in Month: 31");
// }
// else if(Number(month)==4 || Number(month)==6 || Number(month)==9 || Number(month)==11){
//     console.log("Days in Month: 30");
// }
// else if(Number(month)==2){
//     console.log("Days in Month: 28");
// }
// else{
//     console.log("You have Entered a WRONG Month number please refresh");
// }

// *****************

// Question 14
// var physics=prompt("Enter Physics Grade")
// var Chemistry=prompt("Enter Chemistry Grade")
// var Biology=prompt("Enter Biology Grade")
// var Mathematics=prompt("Enter Mathematics Grade")
// var Computer=prompt("Enter Computer Grade")
// var total=Number(physics)+Number(Chemistry)+Number(Biology)+Number(Mathematics)+Number(Computer)
// var percentage=(total/500)*100
// console.log(total);
// console.log(percentage);

// if(Number(percentage)>=90 && Number(percentage)<=100){
//     console.log("Grad A");
// }
// else if(Number(percentage)>=80 && Number(percentage)<=89){
//     console.log("Grad B");
// }
// else if(Number(percentage)>=70 && Number(percentage)<=79){
//     console.log("Grad C");
// }
// else if(Number(percentage)>=60 && Number(percentage)<=69){
//     console.log("Grad D");
// }
// else if(Number(percentage)>=40 && Number(percentage)<=59){
//     console.log("Grad E");
// }
// else if(Number(percentage)<40){
//     console.log("Grad F");
// }

// **********

// Question 15
// var month=prompt("enter the number of the month")
// switch(Number(month)){
//     case 1:
//         console.log("31 Days in this month (January)")
//         break;
//     case 2:
//         console.log("28 Days in this month (February)")
//         break;
//     case 3:
//         console.log("31 Days in this month (March)")
//         break;
//     case 4:
//         console.log("30 Days in this month (April)")
//         break;
//     case 5:
//         console.log("31 Days in this month (May)")
//         break;
//     case 6:
//         console.log("30 Days in this month (June)")
//         break;
//     case 7:
//         console.log("31 Days in this month (July)")
//         break;
//     case 8:
//         console.log("31 Days in this month (August)")
//          break;
//     case 9:
//         console.log("30 Days in this month (September)")
//         break;
//     case 10:
//         console.log("31 Days in this month (October)")
//         break;
//     case 11:
//         console.log("30 Days in this month (November)")
//         break;
//     case 12:
//         console.log("31 Days in this month (December)")
//         break;
// }
// ***********
// Question 16
// var vowel=prompt("Enter a character")
// switch (vowel){
//     case "a":
//         console.log("Vowel")
//         break;
//     case "e":
//         console.log("Vowel")
//         break;
//     case "i":
//         console.log("Vowel")
//         break;
//     case "o":
//         console.log("Vowel")
//         break;
//     case "u":
//         console.log("Vowel")
//         break;
//     case "A":
//         console.log("Vowel")
//         break;
//     case "E":
//         console.log("Vowel")
//         break;
//     case "I":
//         console.log("Vowel")
//         break;
//     case "O":
//         console.log("Vowel")
//         break;
//     case "U":
//         console.log("Vowel")
//         break;
//     default:
//         console.log("Consonant!");
//         break;
        
    
// }
// ***********
// Question 17

// var num1=prompt("Enter the first number")
// var num2=prompt("Enter the second number")
// switch(true){
//     case (Number(num1)>Number(num2)):
//         console.log("The Maximum number is: "+num1);
//         break;
//     case (Number(num1)<Number(num2)):
//         console.log("The Maximum number is: "+num2);
//         break;
//     case (Number(num1)==Number(num2)):
//         console.log("both numbers are equal")
//         break;
// }
// ***************

// Question 18
// var num=prompt("enter a number")
// switch(true){
//     case (num%2==0):
//         console.log("Even");
//         break;
//     case (num%2==1):
//         console.log("Odd");
//         break;
// }
// ************

// Question 19
// var num=prompt("enter a number")
// switch(true){
//     case(Number(num)>0):
//         console.log("Positive");
//         break
//     case(Number(num)<0):
//         console.log("Negative");
//         break
//     case(Number(num)==0):
//         console.log("Eqaul Zero");
// }
// **********

// Question 20
// var num1=prompt("enter the first number")
// var num2=prompt("enter the second number")
// var Operation=prompt("Enter the Operation Sign (+,-,*,/)")
// switch(Operation){
//     case "+":
//         console.log("The Sum= "+(Number(num1)+Number(num2)));
//         break
//     case "-":
//         console.log("The Subtraction= "+(Number(num1)-Number(num2)));
//         break
//     case "*":
//         console.log("The Multiplication= "+(Number(num1)*Number(num2)));
//         break;
//     case "/":
//         if(num2==0){
//             console.log("Operation Error Cannot divid by Zero!");
//             break
//         }
//         console.log("The Division= "+(Number(num1)/Number(num2)));
//         break;
// }
// **********