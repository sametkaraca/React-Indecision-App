console.log('app.js is running')

const app = {
    title: 'Title',
    subtitle: 'Subitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault() //means dont refresh the full page (prevent from it)
    const option = e.target.elements.option.value
    
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    } 
    
}

const onRemoveAll = (e) =>{
  app.options = []
  render()
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options && app.options.length >0) ? <p>You have options</p> : <p>'No Options'</p>}
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/> 
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()
