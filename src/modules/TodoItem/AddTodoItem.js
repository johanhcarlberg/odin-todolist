import { getProjects } from "../Project/ProjectController";
import './AddTodoItem.css';
import { TodoItem } from "./TodoItem";
import { addTodoItem } from "./TodoItemController";

class AddTodoItem {
    async render() {
        const projects = await getProjects();

        const addTodoItemContainer = document.createElement('div');

        const addTodoItemHeader = document.createElement('h2');
        addTodoItemHeader.textContent = 'Add Todo Item';

        const todoItemForm = document.createElement('form');
        todoItemForm.addEventListener('submit', this.onFormSubmit);
        
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'title');
        nameLabel.textContent = 'Title';
        todoItemForm.appendChild(nameLabel);
        const nameInput = document.createElement('input');
        nameInput.required = true;
        nameInput.name = 'title';
        nameInput.type = 'text';
        nameInput.id = 'title';
        todoItemForm.appendChild(nameInput);

        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority';
        todoItemForm.appendChild(priorityLabel);
        const prioritySelect = document.createElement('select');
        prioritySelect.required = true;
        prioritySelect.name = 'priority';
        prioritySelect.id = 'priority';
        for (let priority of Object.keys(TodoItem.priorities)) {
            const priorityOption = document.createElement('option');
            priorityOption.name = 'priority';
            priorityOption.value = priority;
            priorityOption.text = TodoItem.priorities[priority];
            prioritySelect.appendChild(priorityOption);
        }
        todoItemForm.appendChild(prioritySelect);
        
        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description';
        todoItemForm.appendChild(descriptionLabel);
        const descriptionTextArea = document.createElement('textarea');
        descriptionTextArea.required = true;
        descriptionTextArea.name = 'description';
        descriptionTextArea.id = 'description';
        todoItemForm.appendChild(descriptionTextArea);

        const dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'dueDate');
        dueDateLabel.textContent = 'Due Date';
        todoItemForm.appendChild(dueDateLabel);
        const dueDatePicker = document.createElement('input');
        dueDatePicker.required = true;
        dueDatePicker.type = 'date';
        dueDatePicker.name = 'dueDate';
        dueDatePicker.id = 'dueDate';
        todoItemForm.appendChild(dueDatePicker);

        const projectLabel = document.createElement('label');
        projectLabel.setAttribute('for', 'project');
        projectLabel.textContent = 'Project';
        const projectSelect = document.createElement('select');
        projectSelect.required = true;
        projectSelect.name = 'project';
        projectSelect.id = 'project';
        for (let project of projects) {
            const projectOption = document.createElement('option');
            projectOption.value = project.id;
            projectOption.textContent = project.name;
            projectSelect.appendChild(projectOption);
        }
        todoItemForm.appendChild(projectSelect);
    
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Add';
        todoItemForm.appendChild(submitButton);

        addTodoItemContainer.appendChild(addTodoItemHeader);
        addTodoItemContainer.appendChild(todoItemForm);
        return addTodoItemContainer;
    }

    async onFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        if(!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        let formData = new FormData(form);
        const newTodoItem = await addTodoItem(
            formData.get('title'), 
            formData.get('priority'),
            formData.get('description'), 
            formData.get('dueDate'),
            Number(formData.get('project'))
        );
        if (newTodoItem) {
            form.reset();
        }
    }
}

export default new AddTodoItem();