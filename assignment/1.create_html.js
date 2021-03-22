const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

function render() {
    let html = '';

    const li = ({ id }, child) => `<li id="${id}">\n  ${child}\n</li>\n`;
    const label = (child) => `<label>${child}</label>`;
    const input = ({ content, completed }) => `<input type="checkbox"${completed ? " checked":""}>${content}`

    todos.forEach(todo => {
        html += li(todo, label(input(todo)));
    });

    return html;
}

console.log(render());