import { getTodoItems } from "./TodoItem/TodoItemController";

class ProjectTodoItemMediator {
    async getTodoItemsForProject(projectId) {
        const todoItems = await getTodoItems();
        return todoItems.filter(item => item.projectId === projectId);
    }
}

export default new ProjectTodoItemMediator();

