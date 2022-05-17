import React from 'react'
import { useState } from 'react';
import styles from "./todo.module.css"
import TodoItem from './TodoItem';



const Todo = () => {
    const [todos,setTodos] = useState([])
    let [newTodo,setNewTodo] = useState("")

    // delete
    const onDelete = (id)=>{
        let nyaTodo = todos.filter((todo)=> todo.id !== id )
        setTodos(nyaTodo)
    }

    // input handle change fun
 const handleChange = (e)=>{
     console.log(e.target.value)
     setNewTodo(e.target.value)
 }

  return (
      <>
    
      <div>
       
      <input value={newTodo} onChange={handleChange} className={styles.input} />
      <button className={styles.btn} onClick = {()=>{
      
        setTodos([...todos,{id:Date.now(),value: newTodo,isCompleted:false},])
          console.log(todos)
          setNewTodo("")
        
      } } 
      > + </button>
      
      <div className={styles.todoList}>
 {todos.map((todo)=>(
        // create div
         <TodoItem key={todo.id} todo = {todo} onDelete={onDelete}/>
      ))}

      </div>
      
     
      
     </div>
      </>
    
  )
}

export default Todo
