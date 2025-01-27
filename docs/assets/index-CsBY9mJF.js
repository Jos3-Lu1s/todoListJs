(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function L(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}let w;const C=new Uint8Array(16);function S(){if(!w){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");w=crypto.getRandomValues.bind(crypto)}return w(C)}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function A(e,t,a){var o;if(T.randomUUID&&!e)return T.randomUUID();e=e||{};const i=e.random??((o=e.rng)==null?void 0:o.call(e))??S();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,L(i)}class h{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"completed",Pending:"pending"},l={todos:[new h("Lorem ipsum dolor sit amet, consectetur"),new h("Ut enim ad minim veniam, quis nostrud"),new h("Duis aute irure dolor in reprehenderit"),new h("Excepteur sint occaecat cupidatat non "),new h("sunt in culpa qui officia deserunt mollit")],filter:c.All},P=()=>{v()},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(l))},x=(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(t=>t.done);case c.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},k=e=>{if(!e)throw new Error("Description is required");l.todos.push(new h(e)),f()},q=e=>{l.todos=l.todos.map(t=>(t.id==e&&(t.done=!t.done),t)),f()},U=e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},D=()=>{l.todos=l.todos.filter(e=>!e.done),f()},I=(e=c.All)=>{l.filter=e,f()},M=()=>l.filter,d={addTodo:k,deleteCompleted:D,deleteTodo:U,Filters:c,filterTodo:I,getCurrentFilter:M,getTodos:x,initStore:P,loadStore:v,toggleTodo:q},F=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let b;const O=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`${e} not found`);b.innerHTML=d.getTodos(c.Pending).length},H=e=>{if(!e)throw new Error("a todo is required");const{done:t,description:a,id:i}=e,o=`
    <div class="view">
        <input class="toggle" type="checkbox" ${t?"checked":""}>
        <label>${a}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    `,r=document.createElement("li");return r.setAttribute("data-id",i),t&&r.classList.add("completed"),r.innerHTML=o,r};let g;const R=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element id ${e} not found`);g.innerHTML="",t.forEach(a=>{g.append(H(a))})},m={todoList:".todo-list",todoInput:"#new-todo-input",clearComplete:".clear-completed",todoFilters:".filtro",renderCount:"#pending-count"},V=e=>{const t=()=>{const n=d.getTodos(d.getCurrentFilter());R(m.todoList,n),a()},a=()=>{O(m.renderCount)};(()=>{const n=document.createElement("div");n.innerHTML=F,document.querySelector(e).append(n),t()})();const i=document.querySelector(m.todoInput),o=document.querySelector(m.todoList),r=document.querySelector(m.clearComplete),p=document.querySelectorAll(m.todoFilters);i.addEventListener("keyup",n=>{console.log(n),console.log(n.target.value),n.keyCode===13&&n.target.value.trim().length!==0&&(d.addTodo(n.target.value),t(),n.target.value="")}),o.addEventListener("click",n=>{const u=n.target.closest("[data-id]");d.toggleTodo(u.getAttribute("data-id")),t()}),o.addEventListener("click",n=>{const u=n.target.className==="destroy",y=n.target.closest("[data-id]");!y||!u||(d.deleteTodo(y.getAttribute("data-id")),t())}),r.addEventListener("click",n=>{d.deleteCompleted(),t()}),p.forEach(n=>{n.addEventListener("click",u=>{switch(p.forEach(y=>{y.classList.remove("selected")}),u.target.classList.add("selected"),console.log(u.target.text),u.target.text){case"Todos":d.filterTodo(d.Filters.All),t();break;case"Pendientes":d.filterTodo(d.Filters.Pending),t();break;case"Completados":d.filterTodo(d.Filters.Completed),t();break}})})};d.initStore();V("#app");
