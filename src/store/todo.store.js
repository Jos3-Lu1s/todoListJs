import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: "all",
    Completed: "completed",
    Pending: "pending"
}

const state = {
    todos: [
        new Todo("Lorem ipsum dolor sit amet, consectetur"),
        new Todo("Ut enim ad minim veniam, quis nostrud"),
        new Todo("Duis aute irure dolor in reprehenderit"),
        new Todo("Excepteur sint occaecat cupidatat non "),
        new Todo("sunt in culpa qui officia deserunt mollit"),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
}

const loadStore = () => {
    if (!localStorage.getItem("state")) return;
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem("state"));
    state.todos = todos;
    state.filter=filter;
}

const saveInLocalStorage=()=>{
    localStorage.setItem("state",JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

const addTodo = (description) => {
    if (!description) {
        throw new Error(`Description is required`);
    }
    state.todos.push(new Todo(description));
    saveInLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id == todoId) {
            todo.done = !todo.done;
        }
        return todo
    });
    saveInLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveInLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveInLocalStorage();
}

const filterTodo = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveInLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    Filters,
    filterTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    toggleTodo,
}