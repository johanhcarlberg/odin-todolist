import { TodoItem } from "./TodoItem";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";

const TodoItemRepositoryLocal = (() => {
    function loadTodoItems() {
        const tempTodoItems = JSON.parse(localStorage.getItem('todoItems'));
        if (!tempTodoItems) {
            return false;
        }
        const newTodoItems = tempTodoItems.map(item => {
            const newItem = new TodoItem(
                item.id,
                item.title,
                item.priority,
                item.description,
                new Date(item.dueDate),
                item.isComplete,
                Number(item.projectId)
            )
            return newItem;
        });
        return newTodoItems;
    }

    const todoItems = loadTodoItems() || [];

    async function addTodoItem(title, priority, description, dueDate, projectId) {
        const newId = getNextId(todoItems);
        if (!title || !priority || !description || !dueDate) {
            return null;
        }
        if (!Number(priority)) {
            return null;
        }
        dueDate = new Date(dueDate);
        const newTodoItem = new TodoItem(newId, title, Number(priority), description, dueDate, false, projectId || 1);
        todoItems.push(newTodoItem);
        PubSub.publish('TodoItemsChanged');
        return newTodoItem;
    }

    async function getTodoItems() {
        return todoItems;
    }

    async function getTodoItemById(id) {
        return todoItems.find(item => item.id === id);
    }

    async function deleteTodoItem(id) {
        todoItems.splice(getIndexFromId(todoItems, id), 1);
        PubSub.publish('TodoItemsChanged');
    }

    async function updateTodoItem(item) {
        const oldItem = getTodoItemById(item.id);
        if (!oldItem) {
            return;
        }

        todoItems[getIndexFromId(todoItems, item.id)] = item;
        PubSub.publish('TodoItemsChanged');
    }

    PubSub.subscribe('TodoItemsChanged', () => {
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    });

    return {
        getTodoItems,
        getTodoItemById,
        addTodoItem,
        deleteTodoItem,
        updateTodoItem
    }
})();

export default TodoItemRepositoryLocal;