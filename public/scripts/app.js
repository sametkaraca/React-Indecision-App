'use strict';

console.log('app.js is running');

var app = {
    title: 'Title',
    subtitle: 'Subitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //means dont refresh the full page (prevent from it)
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll(e) {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        app.options && app.options.length > 0 ? React.createElement(
            'p',
            null,
            'You have options'
        ) : React.createElement(
            'p',
            null,
            '\'No Options\''
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
