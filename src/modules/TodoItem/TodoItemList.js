import { getTodoItems, getTodoItemsToday, getTodoItemsUpcoming } from "./TodoItemController"
import TodoItemsList from "../../components/TodoItemsList";
import { isFuture, isToday } from "date-fns";

class TodoItemList {

    filters = {
        'all':{
            'callback':this.allTodoItemsFilter,
            'title':'All Todo Items'
        }, 
        'today':{
            'callback':this.todayTodoItemsFilter,
            'title':"Today's Todo Items"
        },
        'upcoming':{
            'callback':this.upcomingTodoItemsFilter,
            'title':'Upcoming Todo Items'
        }
    };

    allTodoItemsFilter() {
        return getTodoItems();
    }

    todayTodoItemsFilter() {
        return getTodoItemsToday();
    }

    upcomingTodoItemsFilter() {
        return getTodoItemsUpcoming();
    }  

    render(filter) {
        this.filter = filter;
        this.todoItems = this.filter['callback']();

        const todoItemListContainer = document.createElement('div');
        const todoItemListHeader = document.createElement('h2');
        todoItemListHeader.textContent = this.filter['title'];
        todoItemListContainer.appendChild(todoItemListHeader);
        const todoItemsList = new TodoItemsList(this.todoItems).render();
        todoItemListContainer.appendChild(todoItemsList);

        return todoItemListContainer;
    }
}

export default new TodoItemList();