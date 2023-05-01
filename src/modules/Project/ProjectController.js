import ProjectFactory from "./Project";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";
import * as ProjectRepository from "./ProjectRepository";


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

function getProjectById(id) {
    return projects.find(project => project.id === id);
}

function deleteProject(id) {
    projects.splice(getIndexFromId(projects, id), 1);
    PubSub.publish('ProjectChanged');
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