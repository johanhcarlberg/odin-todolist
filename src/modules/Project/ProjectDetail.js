import { getTodoItemsForProject } from "../ProjectTodoItemMediator";
import { getProjectById } from "./ProjectController";

class ProjectDetail {
    render(id) {
        const project = getProjectById(id);
        const todoItems = getTodoItemsForProject(id);
        console.table(todoItems);
        const projectDetailDiv = document.createElement('div');
        projectDetailDiv.classList.add('project-detail');
        
        const projectDetailHeader = document.createElement('h2');
        projectDetailHeader.textContent = project.name || 'Project Details';
        projectDetailDiv.appendChild(projectDetailHeader);

        const todoItemsContainer = document.createElement('div');
        todoItemsContainer.classList.add('todo-items-container');

        for (let todoItem of todoItems) {
            const todoItemDiv = document.createElement('div');
            todoItemDiv.classList.add('todo-item');

            const todoItemHeader = document.createElement('h3');
            todoItemHeader.textContent = todoItem.title;
            todoItemDiv.appendChild(todoItemHeader);

            const todoItemDueDateDiv = document.createElement('div');
            todoItemDueDateDiv.textContent = `Due date: ${todoItem.dueDate}`;
            todoItemDiv.appendChild(todoItemDueDateDiv);

            todoItemsContainer.appendChild(todoItemDiv);
        }

        projectDetailDiv.appendChild(todoItemsContainer);
        return projectDetailDiv;
    }
}

export default new ProjectDetail();