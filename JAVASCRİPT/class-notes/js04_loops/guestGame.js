//* Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.

console.log("*** WELCOME TO GUESS GAME ****");

const number = Math.round(Math.random() * 100);
console.log(number);
let guess;
let counter = 0;
let lastChange = 4;
while (counter < 5){
    guess = +prompt("please enter your guess: ");
    if (guess == number){
        console.log("Bingo!!");
        break
    }
    if(guess<number){
        console.log("please increase")
    }else if(guess>number){
        console.log("please decrease")
    }
    if(counter == 4){
        console.log("game over")
        break
    }
    counter++
    if(counter == lastChange){
        console.log("last chance!!");
    }
    if(counter !== lastChange  ){
      console.log("try again");

    }
      
}
