import { initializeApp } from "firebase/app";
import firebaseConfig from '../../../firebase_config';
import { addDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Project, ProjectConverter } from "./Project";

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const ProjectRepository = (() => {
    const getProjects = async () => {
        try {
            let q = query(collection(db, `users/${getAuth().currentUser.uid}/projects`)).withConverter(ProjectConverter);
            const projects = await getDocs(q);
            return projects.docs.map(doc => doc.data());
        } catch (error) {
            console.error('Error when retrieving projects from database', error);
        }
    }

    const getProjectById = async (id) => {
        try {
            const projectRef = doc(db, `users/${getAuth().currentUser.uid}/projects`, id).withConverter(ProjectConverter);
            const projectSnap = await getDoc(projectRef);
    
            if(projectSnap.exists()) {
                return projectSnap.data();
            } else {
                return null;
            }
        } catch (error) {
            console.error(`Error when retrieving project with id ${id}`, error);
        }
    } 
    
    const addProject = async (project) => {
        console.log(project);
        try {
            const ref = collection(db, `users/${getAuth().currentUser.uid}/projects`).withConverter(ProjectConverter);
            const projectRef = await addDoc(ref, project);
            return projectRef;
        } catch (error) {
            console.error(`Error when adding project ${{...project}}`, error);
        }
    }

    const deleteProject = async (projectId) => {
        try {
            await deleteDoc(doc(db, `users/${getAuth().currentUser.uid}/projects`, projectId));
        } catch (error) {
            console.error(`Error when deleting project with id ${projectId}`, error);
        }
    }
    
    return {
        getProjects,
        getProjectById,
        addProject,
        deleteProject
    }
})();

export default ProjectRepository;