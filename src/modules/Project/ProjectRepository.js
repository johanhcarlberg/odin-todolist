import { initializeApp } from "firebase/app";
import { addDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getProjects = async () => {
    try {
        const projects = await getDocs(collection(db, 'projects'));
        return projects;
    } catch (error) {
        console.error('Error when retrieving projects from database', error);
    }
}

export const getProjectById = async (id) => {
    try {
        const projectRef = doc(db, 'projects', id);
        const projectSnap = await getDoc(projectRef);

        if(projectSnap.exists()) {
            return projectSnap;
        } else {
            return null;
        }
    } catch (error) {
        console.error(`Error when retrieving project with id ${id}`, error);
    }
} 

export const addProject = async (project) => {
    try {
        const projectRef = await addDoc(collection(db, 'projects'), project);
        return projectRef;
    } catch (error) {
        console.error(`Error when adding project ${{...project}}`, error);
    }
}

export const deleteProject = async (projectId) => {
    try {
        await deleteDoc(doc(db, 'projects', projectId));
    } catch (error) {
        console.error(`Error when deleting project with id ${projectId}`, error);
    }
}

