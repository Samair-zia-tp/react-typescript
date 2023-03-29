import React from "react"
import { useContext } from "react"
import { TodosContext } from "../store/todos.context"
import TodoItem from "./TodoItem"
import classes from './Todos.module.css'

// the way to create functional component in ts is by using this Generic way
// react ts provides us this React.FC which is used by all components if we wanna use props in our component, it comntains children as a prop
// if we want to define our own custom props we can use by adding <>

const Todos: React.FC = () => {

  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}> {
      todosCtx.items.map(item => (
        <TodoItem 
          key={item.id} 
          text={item.text} 
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        /> // null referes to this, here we don't need to speficy this so setting it to null
      ))} 
    </ul>
  )
}

export default Todos
