import { Project } from "./Project";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";
import ProjectRepository from "./ProjectRepository";
import ProjectRepositoryLocal from "./ProjectRepositoryLocal";
import { auth } from "../../firebase";

    let repository = auth.currentUser ? ProjectRepository : ProjectRepositoryLocal;

    export const addProject = async (name) => {
        const newProject = new Project('', name);
        const addedProject = await repository.addProject(newProject);
        PubSub.publish('ProjectChanged');
        return addedProject;
    }
    
    export const getProjects = async () => {
        const projects = await repository.getProjects();
        return projects;
    }
    
    export const getProjectById = async (id) => {
        const project = await repository.getProjectById(id);
        return project;
    }
    
    export const deleteProject = async (id) => {
        await repository.deleteProject(id);
        PubSub.publish('ProjectChanged');
    }
    
    export const addDefaultProject = async () => {
        const projects = await getProjects();
        if (projects.length === 0) {
            await addProject('Default');
        }
    };
    
    addDefaultProject();

    onAuthStateChanged(auth, (user) => {
        repository = user ? ProjectRepository : ProjectRepositoryLocal;
        addDefaultProject();
        PubSub.publish('ProjectChanged');
    })



