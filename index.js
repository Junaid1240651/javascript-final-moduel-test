let ceasor = document.querySelector(".ceasor");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let tryAgainMsg = document.getElementById("tryAgain");
let line = document.getElementById("line");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let playAgain = document.querySelector(".playAgain");
let tryAgain = document.querySelector(".tryAgain");
let pick = document.querySelector(".pick");
let win = document.querySelector(".win");
let ruleBtn = document.getElementById("ruleBtn");
let hideBtn = document.getElementById("hideBtn");
let yourScore = document.getElementById("score");
let ruleDiv = document.getElementById("ruleDiv");
let score = 0;

function btnClick(btn) {
  pick.style.display = "flex";
  ruleDiv.style.paddingTop = "90px";
  ceasor.style.left = "17%";
  rock.style.left = "68%";
  lineHoverDisplayRemove();
  var a = Math.random() * 3;
  a = Math.floor(a + 1);
  if (btn == 1) {
    if (a == 1) {
      rock.setAttribute("src", "images/ceasor.png");
      ceasor.classList.add("pickerHover");
      rock.classList.add("pickerHover");
      paper.style.display = "none";
      win.innerHTML = "MATCH TIE <br> AGAINST PC";
      tryAgain.style.display = "flex";
    } else if (a == 2) {
      win.innerHTML = "YOU LOST <br> AGAINST Computer ";
      paper.style.display = "none";
      rock.classList.add("pickerHover");
    } else if (a == 3) {
      score++;
      yourScore.innerHTML = score;
      win.innerHTML = "YOU WON <br> AGAINST PC";
      paper.style.display = "none";
      // paper.classList.add("ceasorHover");
      rock.setAttribute("src", "images/paper.png");
      ceasor.classList.add("pickerHover");
    }
  } else if (btn == 2) {
    if (a == 1) {
      score++;
      yourScore.innerHTML = score;
      win.innerHTML = "YOU WON <br> AGAINST PC";
      ceasor.setAttribute("src", "images/rock.png");
      rock.setAttribute("src", "images/ceasor.png");
      paper.style.display = "none";
      ceasor.classList.add("pickerHover");
    } else if (a == 2) {
      win.innerHTML = "MATCH TIE <br> AGAINST PC";
      paper.style.display = "none";
      ceasor.setAttribute("src", "images/rock.png");
      ceasor.classList.add("pickerHover");
      rock.classList.add("pickerHover");
      tryAgain.style.display = "flex";
    } else {
      win.innerHTML = "YOU LOST <br> AGAINST Computer ";
      paper.style.display = "none";
      ceasor.setAttribute("src", "images/rock.png");
      rock.setAttribute("src", "images/paper.png");
      rock.classList.add("pickerHover");
    }
  } else if (btn == 3) {
    if (a == 1) {
      win.innerHTML = "YOU LOST <br> AGAINST Computer ";
      rock.setAttribute("src", "images/ceasor.png");
      ceasor.setAttribute("src", "images/paper.png");
      paper.style.display = "none";
      rock.classList.add("pickerHover");
    } else if (a == 2) {
      score++;
      yourScore.innerHTML = score;
      win.innerHTML = "YOU WON <br> AGAINST PC";
      ceasor.setAttribute("src", "images/paper.png");
      paper.style.display = "none";
      ceasor.classList.add("pickerHover");
    } else {
      win.innerHTML = "MATCH TIE <br> AGAINST PC";
      rock.setAttribute("src", "images/paper.png");
      ceasor.setAttribute("src", "images/paper.png");
      ceasor.classList.add("pickerHover");
      rock.classList.add("pickerHover");
      paper.style.display = "none";
      tryAgain.style.display = "flex";
    }
  }
  console.log(score);
}

playAgain.onclick = function () {
  ceasor.classList.remove("pickerHover");
  rock.classList.remove("pickerHover");
  paper.classList.remove("pickerHover");
  ruleDiv.style.paddingTop = "155px";
  tryAgain.style.display = "none";
  pick.style.display = "none";
  ceasor.style.left = "30%";
  rock.style.left = "57.5%";
  win.style.display = "none";
  lineadd();
  playAgain.style.display = "none";
  ceasor.setAttribute("src", "images/ceasor.png");
  rock.setAttribute("src", "images/rock.png");
  paper.setAttribute("src", "images/paper.png");
  ceasor.style.display = "flex";
  rock.style.display = "flex";
  paper.style.display = "flex";
};

ruleBtn.onclick = function () {
  ruleDiv.style.display = "flex";
};
hideBtn.onclick = function () {
  ruleDiv.style.display = "none";
};

function lineremove() {
  ceasor.classList.remove("button-1");
  rock.classList.remove("button-1");
  paper.classList.remove("button-1");
  line.style.display = "none";
  line1.style.display = "none";
  line2.style.display = "none";
}
function lineadd() {
  line.style.display = "flex";
  line1.style.display = "flex";
  line2.style.display = "flex";
}
function lineHoverDisplayRemove() {
  win.style.display = "flex";
  playAgain.style.display = "flex";
  lineremove();
}
