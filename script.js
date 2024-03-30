const todoListKey = 'todo-list';

function getTodoList() {
    const storedList = localStorage.getItem(todoListKey);
    return storedList ? JSON.parse(storedList) : [];
}

function setTodoList(todoList) {
    localStorage.setItem(todoListKey, JSON.stringify(todoList));
}

function addTask() {
    const itemName = document.getElementById('item-name').value;
    const itemDate = document.getElementById('item-date').value;
    const itemPriority = document.getElementById('item-priority').value;

    if (!itemName || !itemDate) {
        alert('Please enter both task name and date.');
        return;
    }

    const newTask = {
        name: itemName,
        date: itemDate,
        priority: itemPriority,
        completed: false,
    };

    const todoList = get;
}
