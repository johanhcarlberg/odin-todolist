import TodoItemsList from "../../components/TodoItemsList";
import PubSub from "../PubSub";

class TodoItemList {
    async render({title, callback}) {
        this.todoItems = await callback();
        this.todoItemListContainer = document.createElement('div');
        this.renderItemsList(title);

        PubSub.subscribe('TodoItemsChanged', async () => {
            this.todoItems = await callback();
            this.todoItemListContainer.innerHTML = '';
            this.renderItemsList(title);
        })

        
        

        return this.todoItemListContainer;
    }

    renderItemsList(title) {
        const todoItemListHeader = document.createElement('h2');
        todoItemListHeader.textContent = title;
        this.todoItemListContainer.appendChild(todoItemListHeader);
        const todoItemsList = new TodoItemsList(this.todoItems).render();   
        this.todoItemListContainer.appendChild(todoItemsList);
    }
}

export default new TodoItemList();