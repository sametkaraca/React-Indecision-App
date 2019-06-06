console.log('app.js is running')

const app = {
    title: 'Title',
    subtitle: 'Subitle',
    options: ['One','Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options && app.options.length >0) ? <p>You have options</p> : <p>'No Options'</p>}
    </div>
)




let count=0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button> 
        </div>
    )    
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()