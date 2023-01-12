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
        1: "Critical",
        2: "Important",
        3: "Default"
    }
}