export class Project {
    constructor(id, name) {
        this.id = id || '';
        this.name = name;
    }


}

export const ProjectConverter = {
        toFirestore: (project) => {
            return {
                name: project.name
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Project(snapshot.id, data.name);
        }
};