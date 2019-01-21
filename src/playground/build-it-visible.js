console.log('Visible is running!');

let isClicked = false;

const showDetails = () => {
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
}

let textButton = 'Show details';    

const appRoot = document.getElementById('app');

const renderVisibleApp = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>
      {isClicked === false ? textButton = 'Show Details' : textButton ='Hide Details'}
      </button>
      {isClicked === true ? <p>Some details</p> : undefined}
      </div>
  )

  ReactDOM.render(visible, appRoot);
}

renderVisibleApp();


