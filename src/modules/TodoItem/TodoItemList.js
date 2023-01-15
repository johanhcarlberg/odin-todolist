import { getTodoItems } from "./TodoItemController"

class TodoItemList {
    constructor(filter) {
        this.filter = filters[filter];
        this.todoItems = this.filter['callback']();
    }

    static filters = {
        'All':{
            'callback':this.allTodoItemsFilter,
            'title':'All Todo Items'
        },
    }

    static allTodoItemsFilter() {
        return getTodoItems();
    }

    render() {
        const todoItemListContainer = document.createElement('div');
        const todoItemListHeader = document.createElement('h2');
        todoItemListHeader.textContent = this.filter['title'];
        todoItemListContainer.appendChild(todoItemListHeader);
        const todoItemsList = new todoItemsList(this.todoItems);
        todoItemListContainer.appendChild(todoItemsList);

        return todoItemListContainer;
    }
}

export default new TodoItemList();