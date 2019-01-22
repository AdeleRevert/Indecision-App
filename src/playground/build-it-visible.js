console.log('Visible is running!');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggle(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
        {!this.state.visibility ? 'Show Details' : 'Hide Details'}
        </button>
        {this.state.visibility && <p>Some details</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let isClicked = false;

// const showDetails = () => {
//   isClicked = !isClicked;
//   renderVisibleApp();
// }

// const appRoot = document.getElementById('app');

// const renderVisibleApp = () => {
//   const visible = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>
//         {!isClicked ? 'Show Details' : 'Hide Details'}
//       </button>
//       {isClicked && <p>Some details</p>}
//     </div>
//   )

//   ReactDOM.render(visible, appRoot);
// }

// renderVisibleApp();


