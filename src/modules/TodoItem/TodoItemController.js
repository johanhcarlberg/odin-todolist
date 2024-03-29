import { TodoItem } from "./TodoItem";
import { getNextId, getIndexFromId } from "../util";
import isFuture from "date-fns/isFuture";
import isToday from "date-fns/isToday";
import PubSub from "../PubSub";
import TodoItemRepositoryLocal from "./TodoItemRepositoryLocal";
import TodoItemRepository from "./TodoItemRepository";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase";

let repository = auth.currentUser ? TodoItemRepository : TodoItemRepositoryLocal;

async function addTodoItem(title, priority, description, dueDate, projectId) {
    console.log(title, priority, description, dueDate, projectId)
    const newTodoItem = await repository.addTodoItem(title, priority, description, dueDate, projectId);
    return newTodoItem;
}

async function getTodoItems() {
    return await repository.getTodoItems();
}

async function getTodoItemsToday() {
    const items = await repository.getTodoItems();
    return items.filter(item => {
        return isToday(item.dueDate);
    });
}

async function getTodoItemsUpcoming() {
    const items = await repository.getTodoItems();
    return items.filter(item => {
        return isFuture(item.dueDate);
    });
}

async function getTodoItemById(id) {
    return await repository.getTodoItemById(id);
}

async function deleteTodoItem(id) {
    await repository.deleteTodoItem(id);
}

async function updateTodoItem(item) {
    await repository.updateTodoItem(item);
}

onAuthStateChanged(getAuth(), (user) => {
    repository = user ? TodoItemRepository : TodoItemRepositoryLocal;
    PubSub.publish('TodoItemsChanged');
})

export { addTodoItem, getTodoItems, getTodoItemById, deleteTodoItem, updateTodoItem, getTodoItemsToday, getTodoItemsUpcoming };