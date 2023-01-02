import { deleteTodoItem, getTodoItemById } from "./TodoItemController";
import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import { publishLink } from "../util";
import PubSub from "../PubSub";
class TodoItemDetail {
    render(id) {
        const todoItem = getTodoItemById(id);
        if (!todoItem) {
            return;
        }
        const project = ProjectTodoItemMediator.getProjectById(todoItem.projectId);
        const todoItemDiv = document.createElement('div');
    
        const todoItemHeader = document.createElement('h2');
        todoItemHeader.textContent = todoItem.title;
    
        const todoItemContent = document.createElement('div');

        const projectDiv = document.createElement('div');
        projectDiv.textContent = 'Project: ';
        const projectLink = document.createElement('a');
        projectLink.href = '#';
        projectLink.textContent = project.name;
        projectLink.addEventListener('click', (e) => {
            e.preventDefault();
            publishLink('ProjectDetail', project.id)
        });

        projectDiv.appendChild(projectLink);
        todoItemContent.appendChild(projectDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = todoItem.description;
        todoItemContent.appendChild(descriptionDiv);

        const dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = todoItem.dueDate;
        todoItemContent.appendChild(dueDateDiv);

        const isCompleteDiv = document.createElement('div');
        isCompleteDiv.textContent = todoItem.isComplete;
        todoItemContent.appendChild(isCompleteDiv);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', (e) => {
            deleteTodoItem(todoItem.id);
            PubSub.publish('changePage', {page: 'ProjectDetail', data: project.id});
        });
        todoItemContent.appendChild(deleteButton);
        
    
        todoItemDiv.appendChild(todoItemHeader);
        todoItemDiv.appendChild(todoItemContent);
    
        return todoItemDiv;
    }
}

export default new TodoItemDetail();