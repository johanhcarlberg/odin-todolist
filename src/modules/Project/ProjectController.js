import ProjectFactory from "./Project";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";
import ProjectRepository from "./ProjectRepository";

const addProject = async (name) => {
    const newProject = ProjectFactory(name);
    await ProjectRepository.addProject(newProject);
    PubSub.publish('ProjectChanged');
    return newProject;
}

const getProjects = async () => {
    const projects = await ProjectRepository.getProjects();
    return projects;
}

const getProjectById = async (id) => {
    const project = await ProjectRepository.getProjectById(id);
    return project;
}

const deleteProject = async (id) => {
    await ProjectRepository.deleteProject(id);
}

PubSub.subscribe('ProjectChanged', () => {
    localStorage.setItem('projects', JSON.stringify(projects));
});

const addDefaultProject = async () => {
    const projects = await getProjects();
    console.log(projects);
    if (projects.length === 0) {
        addProject('Default');
    }
};

addDefaultProject();


export { addProject, getProjects, getProjectById, deleteProject }