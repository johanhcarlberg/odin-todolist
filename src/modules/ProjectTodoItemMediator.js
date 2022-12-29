import { getTodoItems } from "./TodoItem/TodoItemController";

function getTodoItemsForProject(projectId) {
    return getTodoItems().filter(item => item.projectId === projectId);
}