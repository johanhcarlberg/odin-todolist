import { getTodoItems } from "./TodoItem/TodoItemController";

class ProjectTodoItemMediator {
    getTodoItemsForProject(projectId) {
        return getTodoItems().filter(item => item.projectId === projectId);
    }
}

export default new ProjectTodoItemMediator();

