let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxes = document.querySelectorAll(".box");
let drag = null;

btn.onclick = addTask;
inp.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

window.onload = () => {
  let saved = JSON.parse(localStorage.getItem("tasks")) || {};
  boxes.forEach((box) => {
    let boxName = box.dataset.box;
    if (saved[boxName]) {
      saved[boxName].forEach((task) => {
        createTask(task, box);
      });
    }
  });
  dragItem();
  updateCounts();
};

function addTask() {
  if (inp.value.trim() !== "") {
    let taskText = inp.value.trim();
    createTask(taskText, boxes[0]);
    saveToStorage();
    inp.value = "";
  }
  dragItem();
  updateCounts();
}

function createTask(text, parentBox) {
  let p = document.createElement("p");
  p.className = "item";
  p.setAttribute("draggable", "true");
  p.innerHTML = `${text} <button onclick="removeTask(this)"> ✖ </button>`;
  parentBox.insertBefore(p, parentBox.querySelector(".clear-btn"));
}

function removeTask(el) {
  el.parentElement.remove();
  saveToStorage();
  updateCounts();
}

function dragItem() {
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
      saveToStorage();
    });
  });

  boxes.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.style.background = "#b0e991ff";
    });

    box.addEventListener("dragleave", function () {
      this.style.background = "#fff";
    });

    box.addEventListener("drop", function () {
      if (drag) {
        this.insertBefore(drag, this.querySelector(".clear-btn"));
        this.style.background = "#fff";
        saveToStorage();
        updateCounts();
      }
    });
  });
}

function updateCounts() {
  boxes.forEach((box) => {
    let count = box.querySelectorAll(".item").length;
    let span = box.querySelector("span.count");
    if (span) span.textContent = count;
  });
}

function saveToStorage() {
  let tasks = {};
  boxes.forEach((box) => {
    let boxName = box.dataset.box;
    let items = box.querySelectorAll(".item");
    tasks[boxName] = [];
    items.forEach((item) => {
      tasks[boxName].push(item.childNodes[0].textContent.trim());
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.querySelectorAll(".clear-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let box = this.parentElement;
    box.querySelectorAll(".item").forEach((item) => item.remove());
    saveToStorage();
    updateCounts();
  });
});
