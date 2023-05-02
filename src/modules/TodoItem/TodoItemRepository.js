import { TodoItem, todoItemConverter } from "./TodoItem";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";
import { addDoc, deleteDoc, getDocs, query, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

const TodoItemRepository = (() => {
    async function addTodoItem(title, priority, description, dueDate, projectId) {
        if (!title || !priority || !description || !dueDate) {
            return null;
        }
        if (!Number(priority)) {
            return null;
        }
        dueDate = new Date(dueDate);
        const newTodoItem = new TodoItem('', title, Number(priority), description, dueDate, false, projectId);
        console.log(newTodoItem);
        try {
            const ref = collection(db, `users/${auth.currentUser.uid}/todoItems`)
                .withConverter(todoItemConverter);
            const todoItemRef = await addDoc(ref, newTodoItem);
            PubSub.publish('TodoItemsChanged');
            return todoItemRef;
        } catch(error) {
            console.error('Error when adding todoItem', error);
        }
        
        
    }

    async function getTodoItems() {
        try {
            let q = query(collection(db, `users/${auth.currentUser.uid}/todoItems`))
                .withConverter(todoItemConverter);
            const todoItems = await getDocs(q);
            return todoItems.docs.map(doc => doc.data());
        } catch(error) {
            console.error('Error when retrieving todoItems from database', error);
        }
    }

    async function getTodoItemById(id) {
        try {
            console.log(id);
            const todoItemRef = doc(db, `users/${auth.currentUser.uid}/todoItems`, id)
                .withConverter(todoItemConverter);
            const todoItemSnap = await getDoc(todoItemRef);
            console.log(todoItemSnap);
            if (todoItemSnap.exists()) {
                return todoItemSnap.data();
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error when retrieving todoItem with id ' + id, error);
        }
    }

    async function deleteTodoItem(id) {
        try {
            await deleteDoc(db, `users/${auth.currentUser.uid}/todoItems`, id);
        } catch(error) {
            console.error('Error when deleting todoItem with id ' + id, error);
        }
    }

    async function updateTodoItem(item) {
        const todoItemRef = doc(db, `users/${auth.currentUser.uid}/todoItems`, item.id)
            .withConverter(todoItemConverter);
        await setDoc(todoItemRef, item);
        PubSub.publish('TodoItemsChanged');
    }

    return {
        getTodoItems,
        getTodoItemById,
        addTodoItem,
        deleteTodoItem,
        updateTodoItem
    }
})();

export default TodoItemRepository;