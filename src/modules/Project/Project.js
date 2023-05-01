export class Project {
    constructor(name) {
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
            return new Project(data.name);
        }
};