//* While doWhile Loops

//? Kullanicidan 0-100 arası not girmesini iste ve yanlış girerse 0-100 arasi girmesini zorla

let number = Number(prompt("Please enter your grade"));

// if(number>=0 && number<=100){
//     console.log((`Your grade is ${number}`));
// }else{
//     console.log("Please enter between 0-100!!!")
// }

while(number<0 || number>100){
    console.log("Please enter between 0-100!!!");
    number = +prompt("Please enter your grade"); //!Doğrusunu yazdirana kadar döndürü
}
console.log("Your grade is" , number);