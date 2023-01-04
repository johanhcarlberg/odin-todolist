export class TodoItem {
    constructor(id, title, description, dueDate, projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
        this.projectId = projectId;
    }
}