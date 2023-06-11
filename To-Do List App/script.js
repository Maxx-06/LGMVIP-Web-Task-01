const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function to add task 
function addTask() {
  if (inputBox.value === "") {
    alert("Empty Task Are Not Allowed!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = `\u00d7`;
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);


// ASSIGN VAR TO SAVE TASK
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}


// SAVING THE TASK
function savedList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

savedList();

// CLEAR FUNCTION TO DELETE LOCAL STORAGE
function clearButton() {
  localStorage.clear();
  listContainer.innerHTML = "";
  console.log("lol");
}
