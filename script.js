function clearLocalStorage() {
  localStorage.clear();
  alert("Local storage has been cleared.");
}

let users = [];

const storedUsers = localStorage.getItem("users");

if (storedUsers) {
  users = JSON.parse(storedUsers);
} else {
  users = [
    {
      name: "Jan",
      surname: "Kowalski",
      age: "20",
      sex: "male",
      email: "jankowalski@gmail.com",
    },
  ];

  function AddRow() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var email = document.getElementById("email").value;

    if (
      name === "" ||
      surname === "" ||
      age === "" ||
      sex === "" ||
      email === ""
    ) {
      alert("Fill all fields, then click ''ADD''");
      return;
    }

    if (!email.includes("@")) {
      alert("Be sure email is correct!");
      return;
    }

    if (isNaN(age)) {
      alert("Age must be numerical!");
      return;
    }

    var newUser = {
      name: name,
      surname: surname,
      age: age,
      sex: sex,
      email: email,
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    var table = document
      .getElementById("userTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    var cells = [name, surname, age, sex, email];

    cells.forEach((cellContent) => {
      var cell = newRow.insertCell();
      cell.textContent = cellContent;
    });
  }
}

console.log(users);

const userTable = document
  .getElementById("userTable")
  .getElementsByTagName("tbody")[0];
users.forEach((user) => {
  const row = userTable.insertRow();
  const cells = [user.name, user.surname, user.age, user.sex, user.email];

  cells.forEach((cellContent) => {
    const cell = row.insertCell();
    cell.textContent = cellContent;
  });
});
