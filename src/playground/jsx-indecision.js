console.log("App.js is running!");

const app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderTemplateApp();
}

const removeAll = (e) => {
  app.options = [];
  renderTemplateApp();
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
}

const appRoot = document.getElementById("app");

const renderTemplateApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}> Remove All</button>
      <ol>
        {app.options.map((oneOption) => {
          return <li key={oneOption}>{oneOption}</li>
        })
        }
      </ol>
      <form
        onSubmit={onFormSubmit}>
        <input
          type="text"
          name="option"
        />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderTemplateApp();
