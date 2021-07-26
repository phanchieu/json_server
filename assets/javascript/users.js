var userAPI = "http://localhost:3000/users";

function start() {
  // When getUsers from API we active callback for render
  getUsers(renderUsers);

  createFormHandler();
}

start();

// Functions
function getUsers(callback) {
  fetch(userAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderUsers(users) {
  var listUsersBlock = document.querySelector("#list-Users");
  var htmls = users.map(function (user) {
    // data-id là attribute tự định nghĩa
    return `
    <li class="${user.id}">
      <h4>${user.fullname}</h4>
      <p>${user.phone}</p>
      <p>${user.Date_of_birth}</p>
      <p>${user.email}</p>
      <p>${user.password}</p>
      <button onclick="deleteUserHandler(${user.id})">Xóa</button>
    </li>`;
  });
  listUsersBlock.innerHTML = htmls.join("");
}

function createUser(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(userAPI, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function deleteUserHandler(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${userAPI}/${id}`, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      var userItem = document.querySelector(`.user-item-${id}`);
      if (userItem) {
        userItem.remove();
      }
    });
}

function createFormHandler() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function (e) {
    var fullname = document.querySelector('input[name="fullname"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var Date_of_birth = document.querySelector('input[name="Date_of_birth"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;

    var formData = {
      fullname: fullname,
      phone:phone,
      Date_of_birth:Date_of_birth,
      email:email,
      password: password,
    };

    createUser(formData, function () {
      getUsers(renderUsers);
    });
  };
}
