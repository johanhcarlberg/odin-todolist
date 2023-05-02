import { Project } from "./Project";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";
import ProjectRepository from "./ProjectRepository";
import ProjectRepositoryLocal from "./ProjectRepositoryLocal";

const repository = ProjectRepositoryLocal;

const addProject = async (name) => {
    const newProject = new Project('', name);
    const addedProject = await repository.addProject(newProject);
    PubSub.publish('ProjectChanged');
    return addedProject;
}

const getProjects = async () => {
    const projects = await repository.getProjects();
    return projects;
}

const getProjectById = async (id) => {
    const project = await repository.getProjectById(id);
    return project;
}

const deleteProject = async (id) => {
    await repository.deleteProject(id);
    PubSub.publish('ProjectChanged');
}

const addDefaultProject = async () => {
    const projects = await getProjects();
    console.log(projects);
    if (projects.length === 0) {
        addProject('Default');
    }
};

addDefaultProject();


export { addProject, getProjects, getProjectById, deleteProject }