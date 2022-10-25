//created a function for deck with its vaules in its array
function deck(){
    //gave values to the suits and numbers
    const values = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
//gave cards an open array of all combinations of value and suits 
    const cards = [];
    //ran a loop to get all the possible cards
    for(let s=0; s<suits.length; s++){
        for(let v=0; v<values.length; v++){
            const value = values[v];
            const suit = suits[s];
            //pushed the array of both vaule and suits as one array inside of the constant cards (combined the data) 
            cards.push({value, suit});
        }
    }
    // ended the function with return. The deck() should now have the value of all possible cards
    return cards;
}
//created const cards to equal to whats inside deck & assigned cards to randomCard to pick cards at random. 
const cards = deck();
    randomCard(cards);
//to get the random set of vaules on a card I used the math random with math floor to get whole numbers times by 51 (array 0-51 = 52 cards)
    const random = Math.floor(Math.random()*51);
//here Im assinging constants to each individual item since we have both value and suits, then seperatated them based on their const
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;

//created another function to get a random card from all the possible combination
function randomCard(cards){

}
//this part i dont fully understand but according to google html has a character entity for card suits so coded below allows
//the card to display the image of the suits without using images
//i also dont understand how it reads all the suits even though i put only diamonds
let entity;
cardSuit === "Diamonds" ? (entity = "&diams;") : (entity = "&" + cardSuit.toLowerCase() + ";");
//here I assigned a new const card not cards which i pushed into the html using document. , created a new div line.
const card = document.createElement("div");
//here i added a class to the div as #card and made it lower case so the function can read it
card.classList.add("card", cardSuit.toLowerCase());
card.innerHTML = 
'<span class="card-suit top">' + entity + '</span>' + 
'<span class="card-value">' + cardValue + '</span>' + 
'<span class="card-suit bot">' + entity + '</span>';
//using appendChild I put all the <span> under the Div i just created 
document.body.appendChild(card);

//s= cardSuitIndex
//n= cardNumberIndex
/*window.onload = function(){
    let generateSuit = generateRandomSuit();
    document.querySelector(".topSuit").innerHTML=generateSuit();
    document.querySelector(".bottomSuit").innerHTML=generateSuit();
    let generateNumber = generateRandomNumber();
    document.querySelector(".cardNumber").innerHTML=generateNumber();


let generateRandomSuit =() =>{
    let suit = ["♠", "♥", "♦", "♣"];
    console.log(suit)
}
let generateRandomNumber =() =>{
    let value = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
}
}*/

// use .push to push Suit & Numbers
//use Math.floor(Math.random()) to generate random card
//.onload to refresh card as you refresh window
//window.onload = function loadFunction()

// document.querySelector('#theTitle') to select class from html, then use
        