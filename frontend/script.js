const API_URL = 'localhost:8081'
const ADD_NEW_TASK = 'addTask'
const DELETE_ONE_TASK = 'deleteTask/:id'
const COMPLETE_ONE_TASK = 'completedTask/:id'
const GET_ALL_TASK = 'allTask'

function loginSystem(){
    return {
        loggedIn:  localStorage.getItem('email') ? true : false,
        email: "",
        login(){
            if ( this.email.trim() == ""){
                Swal.fire(
                    'Error !',
                    'Please enter your email !',
                    'error'
                  )
            } else {
                localStorage.setItem('email',this.email);
                this.loggedIn = true;
            }

        },
        logout(){
            localStorage.clear();
            this.loggedIn = false;
        },
      
    }
}
function toDoList() {
    return {
        childOf:null,
        newTodo: {
            title:"",
            description:null,
            date:null
        },
        todos: [],
        addToDo() {
            if (this.newTodo.title.trim() == ""){
                Swal.fire(
                    'Error !',
                    'Task Title is required !',
                    'error'
                  )
            } else {
                if (this.childOf !== null && this.childOf !== ""){
                    this.todos[this.childOf].children.push({
                        todo: this.newTodo,
                        completed: false
                    })
                } else {
                    this.todos.push({
                        todo: this.newTodo,
                        children: [],
                        completed: false
                    });
                }
              
    
                this.newTodo =  {
                    title:"",
                    description:null,
                    date:null
                };
            }
           
        },
        deleteToDo(index,child = null) {
            if (child != null){
                this.todos[index].children = this.todos[index].children.filter((todo, todoIndex) => {
                    return child !== todoIndex
                })
            } else {
                this.todos = this.todos.filter((todo, todoIndex) => {
                    return index !== todoIndex
                })
            }
           
        },
        numberOfToDosCompleted() {
            return this.todos.filter(todo => todo.completed).length;
        },
        toDoCount() {
            return this.todos.length
        },
        showMore(index,child){

            console.log('parent:',index)
            console.log('child:',child)
            if (child != null){
                Swal.fire(
                    this.todos[index].children[child].todo.title,
                    `${this.todos[index].children[child].todo.description ?? ''}<br>${this.todos[index].children[child].todo.date ?? ''}`,
                    'question'
                  )
            } else {
                Swal.fire(
                    this.todos[index].todo.title,
                    `${this.todos[index].todo.description ?? ''}<br>${this.todos[index].todo.date ?? ''}`,
                    'question'
                  )
            }
           
        }
    };
}
