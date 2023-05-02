export class TodoItem {
    constructor(id, title, priority, description, dueDate, isComplete, projectId) {
        this.id = id || '';
        this.title = title;
        this.priority = priority,
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = isComplete || false;
        this.projectId = projectId;
    }

    static priorities = {
        1: "Critical",
        2: "Important",
        3: "Default"
    }
}

export const todoItemConverter = {
    toFirestore: (todoItem) => {
        return {
            title: todoItem.title,
            priority: todoItem.priority,
            description: todoItem.description,
            dueDate: todoItem.dueDate.getTime(),
            isComplete: todoItem.isComplete,
            projectId: todoItem.projectId
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new TodoItem(snapshot.id, data.title, data.priority, data.description, new Date(data.dueDate), data.isComplete, data.projectId);
    }
}