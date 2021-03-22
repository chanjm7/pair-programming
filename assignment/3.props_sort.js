const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
    copiedTodos = [...todos];
    if (key === 'id') {
        return copiedTodos.sort((a, b) => a.id - b.id);
    } else if (key === 'content') {
        return copiedTodos.sort((a, b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0));
    } else if (key === 'completed') {
        return copiedTodos.sort((a, b) => a.completed - b.completed);
    }
}

console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/