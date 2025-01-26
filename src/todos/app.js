import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./useCases";

const elementIDs = {
    todoList: ".todo-list",
    todoInput: "#new-todo-input",
    clearComplete: ".clear-completed",
    todoFilters: ".filtro",
    renderCount: "#pending-count",
}

/**
 * @param {string} elementId - Elemento en el cual se va a renderizar la aplicacion.
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.todoList, todos);
        updatePendingCount();
    }

    const updatePendingCount=()=>{
        renderPending(elementIDs.renderCount);
    }

    (() => {
        const app = document.createElement("div");
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // referencias HTML
    const newDescription = document.querySelector(elementIDs.todoInput);
    const todoList = document.querySelector(elementIDs.todoList);
    const clearComplete = document.querySelector(elementIDs.clearComplete);
    const filters = document.querySelectorAll(elementIDs.todoFilters);

    // Listeners
    newDescription.addEventListener("keyup", (event) => {
        console.log(event);
        console.log(event.target.value);
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = "";
    });

    todoList.addEventListener("click", (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute("data-id"));
        displayTodos();
    });

    todoList.addEventListener("click", (event) => {
        const isDestroyElement = event.target.className === "destroy";
        const element = event.target.closest('[data-id]');
        if (!element || !isDestroyElement) return;
        todoStore.deleteTodo(element.getAttribute("data-id"));
        displayTodos();
    });

    clearComplete.addEventListener("click", (event) => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    filters.forEach(element => {
        element.addEventListener("click", (element) => {
            filters.forEach(el => {
                el.classList.remove("selected");
            })
            element.target.classList.add("selected");
            console.log(element.target.text);
            switch (element.target.text) {
                case "Todos":
                    todoStore.filterTodo(todoStore.Filters.All);
                    displayTodos();
                    break;
                case "Pendientes":
                    todoStore.filterTodo(todoStore.Filters.Pending);
                    displayTodos();
                    break;
                case "Completados":
                    todoStore.filterTodo(todoStore.Filters.Completed);
                    displayTodos();
                    break;
                default:
                    break;
            }

        })
    });

}