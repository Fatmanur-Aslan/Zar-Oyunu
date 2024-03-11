var randomNumber1=Math.floor(Math.random()* 6)+1; //1 ile 6 arasında sayı oluşturma kodu//
var randomDiceImage="dice" + randomNumber1 + ".png"; //zar1 fotoğrafı ile zar6 fotoğrafı arasında rastgele fotoğraf seçme kodu//
var randomImageSource ="images/" + randomDiceImage; //imageszar1 ile imageszar6 fotoğrafları arasından birini seçme kodu//
var image1 = document.querySelectorAll("img")[0]; //buradada işlem tammalanır//
image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= //htmldeki yazıyı değiştirdik//
    "Oyuncu 1 Kazandı !"
}

else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=
    "Oyuncu 1 ve Oyuncu 2 Eşitsiniz !"
} 

else{
    document.querySelector("h1").innerHTML=
   "Oyuncu 2 Kazandı !"
}
