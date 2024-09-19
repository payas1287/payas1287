import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const Header = ({todos, settodos}) => {
    const [task, setTask] = useState("")

    const addTodo = ()=>{
        // console.log(task)
        const newTodo ={
            id:uuidv4(),
            text:task,
            completed:false
        }
        console.log(newTodo)
        settodos([...todos, newTodo])
        setTask("")

    }
  return (
    <div className='container text-center mt-5 '>
    <h1>Todo App</h1>
    <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="ekleme yapınız"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
        <Button id="basic-addon2"
        disabled={!task.trim()}
        onClick={addTodo}
        >Add Todo</Button>
      </InputGroup>


    </div>
 
  )
}

export default Header