class IndecisionApp extends React.Component {
    render(){
        const title="Indecision App"
        const subtitle="Put ur life in the hands of a computer"
        const options = ['One','Two']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div> 
        )
    }
}

class Header extends React.Component {
    render(){
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        )
    }
}

class Action extends React.Component {
    
    handlePicker(){
        alert('handlePick')
    }
    
    render(){
        return (
        <div>
            <button onClick={this.handlePicker}>What should I do?</button>
        </div>
        )
    }
}

// Options -> Options component here

class Options extends React.Component {
    
    handleRemoveAll(){
        alert('handleRemoveAll')
    }

    render(){
        return (
            
            <div>
            <button onClick={this.handleRemoveAll}>Remove</button>
            {
                this.props.options.map(
                    (option)=> <Option key={option} optionText={option} />
                )
            }
            </div> 
        )
    }
}

// AddOption -> AddOption component here
class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    
    handleAddOption(e){
        
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()
        
        if(option){
            alert(option)
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div> 
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))