'use strict';

console.log('Visible is running!');

var isClicked = false;

var showDetails = function showDetails() {
  //console.log('test');
  if (isClicked === false) {
    isClicked = true;
    //textButton = 'Hide Details';
    //console.log('was false', isClicked);
    renderVisibleApp();
  } else {
    isClicked = false;
    //textButton = 'Show Details';
    //console.log('was true', isClicked);
    renderVisibleApp();
  }
};

var textButton = 'Show details';

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
      isClicked === false ? textButton = 'Show Details' : textButton = 'Hide Details'
    ),
    isClicked === true ? React.createElement(
      'p',
      null,
      'Some details'
    ) : undefined
  );

  ReactDOM.render(visible, appRoot);
};

renderVisibleApp();
