import { publishLink } from "../util";
import { addProject } from "./ProjectController";

class AddProject {
    render() {
        const addProjectContainer = document.createElement('div');

        const header = document.createElement('h2');
        header.textContent = 'Add Project';

        const form = document.createElement('form');
        form.addEventListener('submit', this.onFormSubmit);

        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name');
        nameLabel.textContent = 'Project name';
        form.appendChild(nameLabel);

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'name';
        nameInput.id = 'name';
        nameInput.required = true;
        form.appendChild(nameInput);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Add';
        form.appendChild(submitButton);

        addProjectContainer.appendChild(header);
        addProjectContainer.appendChild(form);

        return addProjectContainer;
    }

    onFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);

        const newProject = addProject(
            formData.get('name')
            );
        if (newProject) {
            publishLink('ProjectList');
        }
        console.table(formData);
    }
}

export default new AddProject();