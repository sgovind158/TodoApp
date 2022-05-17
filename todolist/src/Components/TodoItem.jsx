import React from 'react'
import styles from "./todo.module.css"
import { useState } from 'react';

const TodoItem = ({todo,onDelete}) => {
    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)
  return (
    <div className={styles.todo} key={todo.id}> 
   
    <div className={styles.value}>{todo.value}</div>

    
    <input type="checkbox" className={styles.box} checked={isCompleted} 
    onChange = {(e)=>{
        setIsCompleted(e.target.checked)
        console.log(e.target.checked)
    }} />
   
    <button className={styles.d} onClick={()=>{
        onDelete(todo.id)
    }}>Delete </button>
    </div>
  )
}

export default TodoItem
