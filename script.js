let students = [];

const input = document.getElementById("studentInput");
const addBtn = document.getElementById("addBtn");
const totalEl = document.getElementById("total");
const listEl = document.getElementById("studentList");

function render() {
  totalEl.textContent = "Total Students: " + students.length;
  listEl.innerHTML = "";

  if (students.length === 0) {
    listEl.innerHTML = '<p class="empty">No students added yet.</p>';
    return;
  }

  students.forEach(function (name, index) {
    const item = document.createElement("div");
    item.className = "student-item";

    const label = document.createElement("span");
    label.textContent = (index + 1) + ". " + name;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      deleteStudent(index);
    });

    item.appendChild(label);
    item.appendChild(delBtn);
    listEl.appendChild(item);
  });
}

function addStudent() {
  const name = input.value.trim();
  if (name === "") {
    alert("Please enter a student name");
    return;
  }
  students.push(name);
  input.value = "";
  input.focus();
  render();
}

function deleteStudent(index) {
  students.splice(index, 1);
  render();
}

addBtn.addEventListener("click", addStudent);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addStudent();
});

render();
