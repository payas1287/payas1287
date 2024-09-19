import React from 'react'
import { ListGroup } from 'react-bootstrap'




const TodoList = ({todos, settodos}) => {
    const deleteTodo = (id) =>{
        const newTodos = todos.filter((todo) => todo.id !== id);
        settodos(newTodos)
    }

    const toggleTodo = (id) => {
        const newTodos = todos.map(todo=> todo.id === id ? { ...todo, completed :!todo.completed} : todo)
        settodos(newTodos)
    }
 

  return (
    <div>
       <h2 className='text-center text-danger'>Todos</h2>
      <ListGroup>
      {todos.map((todo)=>(
        <ListGroup.Item 
        key={todo.id}
        variant="info"
        className='m-2 text-capitalize rounded-3 d-flex justify-content-between text-secondary w-50 mx-auto'
        role='button'
        onDoubleClick={()=>toggleTodo(todo.id)}>

        <span
        className={todo.completed ? "text-decoration-line-through" 
         :"text-decoration-none"}>

{todo.text}
         </span>
        
        




        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="blue"
              role="button"
              onClick={() => deleteTodo(todo.id)}
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>


        
        
        </ListGroup.Item>
       
      

      ))}
      </ListGroup>
    
    </div>
  )
}

export default TodoList