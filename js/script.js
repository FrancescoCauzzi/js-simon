let numbersContainerEL = document.querySelector(".__numbers-container");
let inputContainerEl = document.querySelector(".__input-container");

let timerDisplay = document.querySelector(".__timer-card");
let verifyBtn = document.getElementById("verify-btn");
let playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", countdown);

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

//let elementsContainerEL = document.querySelector(`.__elements-container`);
// timerDisplay.innerHTML = "";
//     let childElements = elementsContainerEL.children;
//     for (let i = childElements.length - 1; i >= 0; i--) {
//       elementsContainerEL.removeChild(childElements[i]);
//     }

// creao la funzione countdown
function countdown() {
  let countdownStart = 6;

  generateNumbersDivs(numbersContainerEL, "div", 5, "__numbers-card");
  function updateTimerDisplay() {
    let myCards = document.querySelectorAll(".__numbers-card");
    countdownStart--;

    timerDisplay.innerHTML = countdownStart;

    let myNewArr = [];
    for (let i = 0; i < myCards.length; i++) {
      myNewArr.push(Number(myCards[i].innerHTML));
    }
    if (countdownStart === 0) {
      for (let i = 0; i < myCards.length; i++) {
        myCards[i].innerHTML = "";
        verifyBtn.style.display = "block";
        generateInputDivs(inputContainerEl, "div", 1, "__input-card");
      }
      clearInterval(intervalId);

      verifyBtn.addEventListener("click", function () {
        let myInputCards = document.querySelectorAll(".__input-card input");
        console.log(myCards);
        let areEqual = true;
        for (let i = 0; i < myInputCards.length; i++) {
          console.log(myInputCards[i].value);
          console.log();

          if (Number(myInputCards[i].value) !== myNewArr[i]) {
            areEqual = false;
            break;
          }
        }
        if (areEqual === true) {
          alert("hai vinto");
        } else {
          alert("hai perso");
        }
      });
    }
  }

  updateTimerDisplay();

  const intervalId = setInterval(updateTimerDisplay, 1000);
}
