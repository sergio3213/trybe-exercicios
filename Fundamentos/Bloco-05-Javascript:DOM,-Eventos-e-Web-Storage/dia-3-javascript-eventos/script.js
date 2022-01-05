function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//EXERCÍCIO 1
dezDayList = [29, 30];

for (cont = 0; cont <= 32; cont += 1) {
  if (cont != 0) {
    dezDayList.push(cont);
  }

  dias = document.createElement("li");
  dias.className = "day";
  dias.innerHTML = dezDayList[cont];

  document.querySelector("#days").appendChild(dias);
}
//feriados
document.getElementsByClassName("day")[25].className = "day holiday ";

document.getElementsByClassName("day")[26].className = "day holiday";

document.getElementsByClassName("day")[32].className = "day holiday";

//sexta feiras
document.getElementsByClassName("day")[5].className = "day friday";

document.getElementsByClassName("day")[12].className = "day friday";

document.getElementsByClassName("day")[19].className = "day friday";

document.getElementsByClassName("day")[26].className = "day friday holiday";

//EXERCÍCIO 2

function CreateButton(Feriados) {
  button = document.createElement("button");
  button.innerHTML = Feriados;
  button.id = "btn-holiday";

  document.querySelector(".buttons-container").appendChild(button);
}
CreateButton("Feriados");

//EXERCÍCIO 3
let clicado = false;

document.querySelector("#btn-holiday").addEventListener("click", function () {
  for (
    cont = 0;
    cont < document.querySelectorAll(".holiday").length;
    cont += 1
  ) {
    if (clicado == false) {
      document.querySelectorAll(".holiday")[cont].style.backgroundColor =
        "white";
    } else {
      document.querySelectorAll(".holiday")[cont].style.backgroundColor =
        "rgb(238,238,238)";
    }
  }
  if (clicado == false) {
    clicado = true;
  } else {
    clicado = false;
  }
});

//EXERCÍCIO 4

function createButtonFriday(Sextafeira) {
  let buttonFriday = document.createElement("button");
  buttonFriday.id = "btn-friday";
  buttonFriday.innerHTML = Sextafeira;

  document.querySelector(".buttons-container").appendChild(buttonFriday);
}

createButtonFriday("Sexta-feira");

//EXERCÍCIO 5
array = [];
clicado2 = false;
document.querySelector("#btn-friday").addEventListener("click", function () {
  if (clicado2 == false) {
    clicado2 = true;
    for (
      cont = 0;
      cont < document.querySelectorAll(".friday").length;
      cont += 1
    ) {
      array.push(document.querySelectorAll(".friday")[cont].innerHTML);
      document.querySelectorAll(".friday")[cont].innerHTML = "sexta-feira";
    }
  } else {
    clicado2 = false;
    for (
      cont = 0;
      cont < document.querySelectorAll(".friday").length;
      cont += 1
    ) {
      document.querySelectorAll(".friday")[cont].innerHTML = array[cont];
    }
  }
});

//EXERCÍCIO 6
for (cont = 0; cont < document.querySelectorAll(".day").length; cont += 1) {
  document
    .querySelectorAll(".day")
    [cont].addEventListener("mouseover", function () {
      this.style.fontSize = "30px";
    });
  document
    .querySelectorAll(".day")
    [cont].addEventListener("mouseleave", function () {
      this.style.fontSize = "20px";
    });
}

//EXERCÍCIO 7
function addCook(cook) {
  add = document.createElement("span");
  add.innerHTML = cook;
  document.querySelector(".my-tasks").appendChild(add);
}

addCook("cozinhar");

//EXERCÍCIO 8
function addColorAndDiv(color) {
  newDiv = document.createElement("div");
  newDiv.style.backgroundColor = color;
  newDiv.className = "task";

  document.querySelector(".my-tasks").appendChild(newDiv);
}
addColorAndDiv("Blue");

//EXERCÍCIO 9
selected = false;
document
  .querySelector(".my-tasks")
  .children[2].addEventListener("click", function () {
    if (selected == false) {
      this.classList.add("task-selected");
      selected = true;
    } else {
      this.className = "task";
      selected = false;
    }
  });

//EXERCÍCIO 10
function changeColorDayTask() {
  for (cont = 0; cont < document.querySelectorAll(".day").length; cont += 1) {
    document
      .querySelectorAll(".day")
      [cont].addEventListener("click", function () {
        if (
          this.style.color !=
          document.querySelector(".task-selected").style.backgroundColor
        ) {
          this.style.color =
            document.querySelector(".task-selected").style.backgroundColor;
        } else {
          this.style.color = "rgb(119,119,119)";
        }
      });
  }
}

changeColorDayTask();
