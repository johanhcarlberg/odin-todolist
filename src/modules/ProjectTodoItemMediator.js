import { getTodoItems } from "./TodoItem/TodoItemController";

export function getTodoItemsForProject(projectId) {
    return getTodoItems().filter(item => item.projectId === projectId);
}