import { getTodoItems, getTodoItemsToday, getTodoItemsUpcoming } from "./TodoItemController"
import TodoItemsList from "../../components/TodoItemsList";
import { isFuture, isToday } from "date-fns";

class TodoItemList {

    render({title, callback}) {
        console.log(title, callback);
        this.todoItems = callback();

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