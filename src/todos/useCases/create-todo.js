export const createTodoHTML = (Todo) => {
    if (!Todo) {
        throw new Error("a todo is required");
    }
    const {done, description, id} = Todo;
    const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${done?"checked":""}>
        <label>${description}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    `
    const liElement = document.createElement("li");
    liElement.setAttribute("data-id",id)
    if (done) liElement.classList.add("completed");
    liElement.innerHTML = html;
    return liElement;
}