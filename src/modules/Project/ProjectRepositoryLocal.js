import { Project } from "./Project";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";


const ProjectRepositoryLocal = (() => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    const getProjects = async () => {
        return projects;
    }

    const getProjectById = async (id) => {
        const project = projects.find(project => project.id === id);
        return project;
    } 
    
    const addProject = async (project) => {
        const newId = getNextId(projects);
        const newProject = new Project(newId, project.name);
        projects.push(newProject);
        return newProject;
    }

    const deleteProject = async (projectId) => {
        projects.splice(getIndexFromId(projects, projectId), 1);
    }

    PubSub.subscribe('ProjectChanged', () => {
        localStorage.setItem('projects', JSON.stringify(projects));
    });
    
    return {
        getProjects,
        getProjectById,
        addProject,
        deleteProject
    }
})();

export default ProjectRepositoryLocal;