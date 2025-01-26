import todoStore, {Filters} from "../../store/todo.store";

let element;
export const renderPending = (elemenId) => {
    if (!element) {
        element = document.querySelector(elemenId);
    }
    if (!element) {
        throw new Error(`${elemenId} not found`);
    }
    element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}
