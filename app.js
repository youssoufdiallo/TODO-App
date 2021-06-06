const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);



function addTodo(event){
event.preventDefault();

const todoDiv = document.createElement('div');
todoDiv.className = "todo";
const newTodo = document.createElement('li');
newTodo.className = "todo-item";
const liInputValue = document.createTextNode(todoInput.value);
newTodo.appendChild(liInputValue);
todoDiv.appendChild(newTodo);

const completedButton = document.createElement('button');
completedButton.className = 'complete-btn ';
completedButton.innerHTML = "<i class='far fa-check-circle'></i>";
todoDiv.appendChild(completedButton);


const trashButton = document.createElement('button');
trashButton.className = 'trash-btn';
trashButton.innerHTML = "<i class='fas fa-trash'></i>";
todoDiv.appendChild(trashButton);


todoList.appendChild(todoDiv);

todoInput.value = "";

}

function deleteCheck(e){

    if (e.target.classList.contains("trash-btn")){
        if(confirm("are you sure delete?")){
            var li = e.target.parentElement;
            todoList.removeChild(li);
        }
    }

    if (e.target.classList[0] === "complete-btn"){
        const todo = e.target.parentElement;
        todo.classList.toggle("completed");
    }
}

function  filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display="none";
                }
                break;
                case "inComplete":
                 if(!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                 } else{
                    todo.style.display="none";
                 }
                 break;
        }
    });
}