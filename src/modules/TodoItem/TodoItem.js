export class TodoItem {
    constructor(id, title, priority, description, dueDate, projectId) {
        this.id = id;
        this.title = title;
        this.priority = priority,
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
        this.projectId = projectId;
    }

    static priorities = {
        1: "High",
        2: "Medium",
        3: "Low"
    }
}