
// let myVar = setInterval(myTime, 1000);

// function myTime(){
//     let d = new Date();
//     let t = d.toLocaleTimeString();
//     console.log(t)
// }


// let counter = 10;
// let myVar = setInterval(myCount, 1000)

// function myCount(){
//     console.log(counter);
//     counter--;
//     if(counter == 0){
//         clearInterval(myVar);
//         console.log("game over");
//     }
// }

//*  1_2

// const zeit = document.querySelector(".zeit");
// const btn = document.querySelector("#btn");
// const btn2 = document.querySelector("#btn2");




// btn.addEventListener("click", countDown);
// let myVar = setInterval(countDown, 500);
// let num = 99;

// btn.onclick = function () {
//     interval = setInterval(function () {
//         console.log(num);
//         zeit.innerHTML = num + "%";
//         num--;
//         if (num == -1) {
//             clearInterval(interval)
//         }
//     }, 50)
// }

//?  second edition - not anonym funcstions and on event! 

// btn2.addEventListener("click", count)

// function count() {
//     interval = setInterval(countDown, 50)
//     num =100;
// }

// function countDown() {
//     console.log(num);
//     zeit.innerHTML = num + "%";
//     num--;
//     if (num == -1) {
//         clearInterval(interval)
//     }
// }

// * 2_1

// const message = document.querySelector(".message");
// const p = document.querySelector("p");
// const count = document.getElementById('count');

// let counter = 10;
// let myVar = setInterval(myCount, 1000)

// function myCount(){

//     console.log(counter);
//     if(counter == 10){
//         count.innerHTML = counter
//     } else if(counter<10){
//         count.innerHTML = "0"+counter
//     }
//     counter--;
//     if(counter == -1){
//         clearInterval(myVar);
//         message.style.display = "none"
//         console.log("game over");
//     }
// }

// * 2_2
//! not perfect but working except unpause

// const time = document.getElementById("time");
// const minutes = document.getElementById("minutes");

// let minutesCount = minutes.value;

// function startMinCountdown() {
//     let minutesCount = Number(minutes.value);
//     console.log(minutesCount)
//     var mins = 60 * minutesCount
//     display = document.querySelector('#time');
//     startTimer(mins, display);
// }

// function pauseMinCountdown() {
//     clearInterval(interval)
// }

// function restartMinCountdown() {
//     pauseMinCountdown()
//     startMinCountdown()
// }

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     interval = setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// *2_4

const year = document.getElementById("year")
const month = document.getElementById("month")
const day = document.getElementById("day")
const btn = document.getElementById("btn")

btn.addEventListener("click", setYourDate)

function setYourDate(){
    var countDownDate = new Date(year.value + "," + month.value + "," + day.value ).getTime();
    return  countDownDate;
}

// Set the date we're counting down to
var countDownDate = new Date("2021, 4, 3, 19:00").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = setYourDate() - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



