console.log("App.js is running!");

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>Hi, pizza is required right now</p>
  </div>
);

var templateTwo = (
  <div>
    <h1>Adèle</h1>
    <p>Age: 23</p>
    <p>Location: Paris</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
