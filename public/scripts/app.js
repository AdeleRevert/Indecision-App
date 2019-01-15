"use strict";

console.log("App.js is running!");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "Hi, pizza is required right now"
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Ad\xE8le"
  ),
  React.createElement(
    "p",
    null,
    "Age: 23"
  ),
  React.createElement(
    "p",
    null,
    "Location: Paris"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
