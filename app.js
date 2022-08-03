// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoFilter = document.querySelector('.filter-todo');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteChceck);
todoFilter.addEventListener('click',filterTodo);

// adding
function addTodo(event){
    event.preventDefault();
    
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('.todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-adjust"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
}

//
function deleteChceck(e){
    const item = e.target;
    
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
     
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//
function filterTodo(e){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        console.log(todo);
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }       
        }
    });
}