console.log('Visible is running!');

let isClicked = false;

const showDetails = () => {
  isClicked = !isClicked;
  renderVisibleApp();
}

const appRoot = document.getElementById('app');

const renderVisibleApp = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>
        {!isClicked ? 'Show Details' : 'Hide Details'}
      </button>
      {isClicked && <p>Some details</p>}
    </div>
  )

  ReactDOM.render(visible, appRoot);
}

renderVisibleApp();


