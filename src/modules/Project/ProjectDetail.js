import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import { publishLink } from "../util";
import { getProjectById } from "./ProjectController";

class ProjectDetail {
    render(id) {
        const project = getProjectById(id);
        const todoItems = ProjectTodoItemMediator.getTodoItemsForProject(project.id);

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

            const todoItemLink = document.createElement('a');
            todoItemLink.href = '#';
            todoItemLink.addEventListener('click', (e) => {
                e.preventDefault();
                publishLink('TodoItemDetail', todoItem.id);
            })
            const todoItemHeader = document.createElement('h3');
            todoItemHeader.textContent = todoItem.title;
            todoItemLink.appendChild(todoItemHeader);
            todoItemDiv.appendChild(todoItemLink);

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