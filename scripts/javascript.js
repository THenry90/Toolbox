//Example 1 variables

let person = "Tom";
let age = 32;
let hobby = "Music Production";
let yearsProducing = age - 21;
let yearsLovedMusic = age - yearsProducing;

//Example 2 variables adding or subsctracrting numbers from a variabl
let cookiesInJar = 10;
cookiesInJar -= 2;
cookiesInJar += 14;

//Example 2A
function calculateCookiesLeft() {
// Get the values of the input fields
const cookiesInJarB = document.getElementById("cookies-in-jar").value;
const cookiesEaten = document.getElementById("cookies-eaten").value;

// Calculate the number of cookies left
const cookiesLeft = cookiesInJarB - cookiesEaten;

// Display the result in the "cookies-left" paragraph element
  document.getElementById("cookies-left").textContent = "Cookies Left: " + cookiesLeft;
}



//Example 3 variables Multiplication
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

//Example 4 variables

let numberOfCats = 2;
numberOfCats *= 6;  // numberOfCats is now 2*6 = 12;
numberOfCats /= 3; // numberOfCats is now 12/3 = 4;

//to get java displayed on html page
window.onload = function() {
    // connects to ID in HTML div
  ;document.getElementById("script-1").innerHTML = "Name: " + person + "<br>Age: " + age + "<br>Hobby: " + hobby
  + "<br>Years Producing: " + yearsProducing 
  + "<br>Years Loved Music: " + yearsLovedMusic; 

    //cookie jar
  ;document.getElementById("script-2").innerHTML ="Cookie Jar: " + cookiesInJar;
}