import { getTodoItems } from "./TodoItem/TodoItemController";
import { getProjectById } from "./Project/ProjectController";


class ProjectTodoItemMediator {
    getProjectById(id) {
        return getProjectById(id);
    }

    getTodoItemsForProject(projectId) {
        return getTodoItems().filter(item => item.projectId === projectId);
    }

}

export default new ProjectTodoItemMediator();

