console.log('Visible is running!');

let isClicked = false;

const showDetails = () => {
  console.log('test');
  if (isClicked === false) {
    isClicked = true;
    console.log('was false', isClicked);
    renderVisibleApp();
  } else {
    isClicked = false;
    console.log('was true', isClicked);
    renderVisibleApp();
  }
}

const textButton = 'Show details';

const changeButtonText = () => {
  console.log('hey');
  if(textButton === 'Show details'){
    textButton = 'Hide Details';
     console.log('hey2')
  } else {
    textButton = 'Show Details';
     console.log('hey3')
  }
}

const appRoot = document.getElementById('app');

const renderVisibleApp = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>{isClicked === false ? textButton = 'Show Details' : textButton ='Hide Details'}{textButton}</button>
      {isClicked === true ? <p>Some details</p> : undefined}
      </div>
  )

  ReactDOM.render(visible, appRoot);
}

renderVisibleApp();


