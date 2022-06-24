const minnum = document.querySelector(".minnumber");
maxnum = document.querySelector(".maxnumber");
getinput = document.querySelector("#guessnumber");
getbtn = document.querySelector(".btn");
message1 = document.querySelector("#message1");
message2 = document.querySelector("#message2");
getgame = document.querySelector("#game");

let min = 1;
max = 10;
gameleft = 3;
winningnum = randomnum(min, max);

minnum.textContent = min;
maxnum.textContent = max;

getbtn.addEventListener("click", function () {
  let guess = parseInt(getinput.value);

  if (guess < min || guess > max || isNaN(guess)) {
    setmessage2(`Please enter a number between ${min} to ${max} !`);
  }
  if (guess === winningnum) {
    gameover(true, `You won !!!  ${winningnum} is correct!`);
  } else {
    gameleft -= 1;
  }

  if (gameleft === 0) {
    gameover(false, `You lose !!! The correct number is ${winningnum} `);
  } else {
    getinput.value = "";

    setmessage1(`${guess} is not correct ! ${gameleft} guess left!`);
  }
});

function setmessage1(msg) {
  message1.textContent = msg;
}

function setmessage2(msg) {
  message2.textContent = msg;

  setTimeout(function () {
    message2.textContent = "";
  }, 2000);
}

function gameover(won, msg) {
  let color;

  won === true ? (color = "green") : (color = "red");

  getinput.disabled = true;
  getinput.style.borderColor = color;

  setmessage1(msg, color);

  getbtn.value = "play again";

  getbtn.classList.add("playgain");
}

getgame.addEventListener("mouseup", function (e) {
  if (
    e.target.className ===
    "btn btn-outline-dark mx-5 py-2 border border-warning rounded-pill playgain"
  ) {
    window.location.reload();
  }
});

function randomnum(min, max) {
  let getrdm = Math.floor(Math.random() * (max - min) + 1);
  return getrdm;
}
