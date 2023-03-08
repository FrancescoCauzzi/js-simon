let numbersContainerEL = document.querySelector(".__numbers-container");
let inputContainerEl = document.querySelector(".__input-container");
let buttonContainerEl = document.querySelector(".__button-container");

let elementsContainerEL = document.querySelector(`.__elements-container`);

let timerDisplay = document.querySelector(".__timer-card");
let verifyBtn = document.getElementById("verify-btn");
let playBtn = document.getElementById("play-btn");

// create a function that generates the input divs
function generateInputDivs(father, type, number, className) {
  for (let i = 0; i < number; i++) {
    let myInput = document.createElement("input");
    myInput.type = "number";
    let myDiv = document.createElement(type);
    myDiv.classList.add(className);

    myDiv.style.aspectRatio = "1/1";
    myDiv.style.backgroundImage = "url('img/cardbg.jpg')";
    myDiv.append(myInput);

    father.append(myDiv);
  }
}

// create a function that generates the divs with the numbers inside and attach them to the father container

function generateNumbersDivs(father, type, number, className) {
  let arrOfRandNumbers = generateArrOfRandNumber(10, number);
  for (let i = 0; i < number; i++) {
    let myDiv = document.createElement(type);
    myDiv.classList.add(className);
    myDiv.style.width = `calc(100%/${number})`;
    myDiv.style.aspectRatio = "1/1";
    myDiv.style.backgroundImage = "url('img/cardbg.jpg')";
    myDiv.innerHTML = arrOfRandNumbers[i];

    father.append(myDiv);
  }
}

// create a function that generates 5 random numbers

function generateArrOfRandNumber(maxNumb, arrLength) {
  let myArr = [];
  for (let i = 0; i < arrLength; i++) {
    let randNum = Math.floor(Math.random() * (maxNumb - 1) + 1);
    myArr.push(randNum);
  }
  return myArr;
}

function resetTheGame(elementsContainerEL) {
  let childElements = elementsContainerEL.children;
  for (let i = childElements.length - 1; i >= 0; i--) {
    elementsContainerEL.removeChild(childElements[i]);
  }
}

// creao la funzione countdown

function countdown() {
  resetTheGame(numbersContainerEL);
  resetTheGame(inputContainerEl);
  generateNumbersDivs(numbersContainerEL, "div", 5, "__numbers-card");
  let countdownStart = 6;

  function updateTimerDisplay() {
    countdownStart--;

    timerDisplay.innerHTML = countdownStart;
    let myCards = document.querySelectorAll(".__numbers-card");
    let myNewArr = [];
    for (let i = 0; i < myCards.length; i++) {
      myNewArr.push(Number(myCards[i].innerHTML));
    }

    if (countdownStart === 0) {
      timerDisplay.innerHTML = "";
      for (let i = 0; i < myCards.length; i++) {
        myCards[i].innerHTML = "";
        verifyBtn.style.display = "block";
      }

      generateInputDivs(inputContainerEl, "div", 5, "__input-card");
      verifyBtn.addEventListener("click", function () {
        verifyBtn.style.display = "none";

        let myInputCards = document.querySelectorAll(".__input-card input");
        let areEqual = arraysAreEqual(myNewArr, myInputCards);

        console.log(areEqual, myNewArr);
      });

      clearInterval(intervalId);
    }
  }
  updateTimerDisplay();
  const intervalId = setInterval(updateTimerDisplay, 1000);
}

playBtn.addEventListener("click", countdown);

// let numbersContainerEL = document.querySelector(".__numbers-container");
// let inputContainerEl = document.querySelector(".__input-container");
// let buttonContainerEl = document.querySelector(".__button-container");

// Check if two array are equal in length and values inside
function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
