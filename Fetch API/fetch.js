getCustomerData();
getUserData();

function getCustomerData() {
  fetch("customer.json")
    .then((resp) => {
      let respObj = resp.json();
      return respObj;
    })
    .then((jsonData) => {
      let result = "<table border='4'>";
      result += "<tr><th>Id</th><th>Name</th><th>Age</th><th>Amount</th>";
      jsonData.forEach((data) => {
        result +=
          "<tr><td>" +
          data.id +
          "</td><td>" +
          data.name +
          "</td><td>" +
          data.age +
          "</td><td>" +
          data.amount +
          "</td><tr>";
      });
      result += "</table>";
      document.getElementById("fetchList").innerHTML = result;
    })
    .catch((error) => console.log(error));
}

function getUserData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => {
      let respObj = resp.json();
      return respObj;
    })
    .then((jsonData) => {
      let result = "<table border='4'>";
      result += "<tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th>";
      jsonData.forEach((data) => {
        result +=
          "<tr><td>" +
          data.id +
          "</td><td>" +
          data.name +
          "</td><td>" +
          data.username +
          "</td><td>" +
          data.email +
          "</td><tr>";
      });
      result += "</table>";
      document.getElementById("fetchUsersList").innerHTML = result;
    })
    .catch((error) => console.log(error));
}