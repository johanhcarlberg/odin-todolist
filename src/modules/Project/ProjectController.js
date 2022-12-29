import { Project } from "./Project";
import { getNextId } from "../util";

const projects = [
    new Project(1, "Default"),
];

function addProject(name) {
    const newId = getNextId(projects);
    const newProject = new Project(newId, name);
    projects.push(newProject);
    return newProject;
}

function getProjects() {
    return projects;
}

function getProjectById(id) {
    return projects.find(project => project.id === id);
}

export { addProject, getProjects, getProjectById }