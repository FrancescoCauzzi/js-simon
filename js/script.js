let numbersContainerEL = document.querySelector(".__numbers-container");

let timerDisplay = document.querySelector(".__timer-card");

// create a function that generates the divs with the numbers inside and attach them to the father container

function generateNumbersDivs(father, type, number, className) {
  let arrOfRandNumbers = generateArrOfRandNumber(100, number);
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

// creao la funzione countdown
function countdown(seconds) {
  let countdownStart = seconds;

  generateNumbersDivs(numbersContainerEL, "div", 5, "__numbers-card");
  function updateTimerDisplay() {
    let myCards = document.querySelectorAll(".__numbers-card");
    //console.log(myCards);
    countdownStart--;

    timerDisplay.innerHTML = countdownStart;

    if (countdownStart === 0) {
      for (let i = 0; i < myCards.length; i++) {
        myCards[i].innerHTML = "";
      }
      clearInterval(intervalId);
    }
  }

  updateTimerDisplay();

  const intervalId = setInterval(updateTimerDisplay, 1000);
}

countdown(10);
