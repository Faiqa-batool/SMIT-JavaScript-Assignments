function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var studentList = document.getElementById("studentList");
    var newRow = studentList.insertRow();

    var nameCell = newRow.insertCell();
    var ageCell = newRow.insertCell();
    var actionsCell = newRow.insertCell();

    nameCell.textContent = name;
    ageCell.textContent = age;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
      deleteStudent(this);
    };

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function() {
      editStudent(this);
    };

    actionsCell.appendChild(deleteBtn);
    actionsCell.appendChild(editBtn);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }

  function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  function editStudent(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].textContent;
    var age = row.cells[1].textContent;

    var editForm = document.getElementById("editForm");
    editForm.style.display = "block";

    document.getElementById("editName").value = name;
    document.getElementById("editAge").value = age;

    var saveChangesBtn = editForm.querySelector("button");
    saveChangesBtn.onclick = function() {
      updateStudent(row);
    };
  }

  function updateStudent(row) {
    var name = document.getElementById("editName").value;
    var age = document.getElementById("editAge").value;

    row.cells[0].textContent = name;
    row.cells[1].textContent = age;

    var editForm = document.getElementById("editForm");
    editForm.style.display = "none";
  }

  function cancelEdit() {
    var editForm = document.getElementById("editForm");
    editForm.style.display = "none";
  }