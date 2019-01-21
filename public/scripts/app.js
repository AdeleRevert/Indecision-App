'use strict';

console.log('Visible is running!');

var isClicked = false;

var showDetails = function showDetails() {
  isClicked = !isClicked;
  renderVisibleApp();
};

var appRoot = document.getElementById('app');

var renderVisibleApp = function renderVisibleApp() {
  var visible = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: showDetails },
      !isClicked ? 'Show Details' : 'Hide Details'
    ),
    isClicked && React.createElement(
      'p',
      null,
      'Some details'
    )
  );

  ReactDOM.render(visible, appRoot);
};

renderVisibleApp();
