class AddTodoItem {
    render() {
        const addTodoItemContainer = document.createElement('div');

        const addTodoItemHeader = document.createElement('h2');
        addTodoItemHeader.textContent = 'Add Todo Item';

        addTodoItemContainer.appendChild(addTodoItemHeader);
        return addTodoItemContainer;
    }
}

export default new AddTodoItem();