import TodoItemsList from "../../components/TodoItemsList";

class TodoItemList {
    async render({title, callback}) {
        this.todoItems = await callback();

        const todoItemListContainer = document.createElement('div');
        const todoItemListHeader = document.createElement('h2');
        todoItemListHeader.textContent = title;
        todoItemListContainer.appendChild(todoItemListHeader);
        const todoItemsList = new TodoItemsList(this.todoItems).render();
        todoItemListContainer.appendChild(todoItemsList);

        return todoItemListContainer;
    }
}

export default new TodoItemList();