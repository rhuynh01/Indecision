console.log('App.js is running');

// Command to compile in babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react -watch
// live-server public

// JSX - Javascript XML



const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
}




const appRoot = document.getElementById('app');

let visibility = false;

const buttonText='hello'

const toggleVisibility = () => {
    visibility = !visibility
    render();
};
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1> 
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. There are some details you can see</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render()


