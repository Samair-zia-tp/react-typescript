import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
import classes from './Todos.module.css'

// the way to create functional component in ts is by using this Generic way
// react ts provides us this React.FC which is used by all components if we wanna use props in our component, it comntains children as a prop
// if we want to define our own custom props we can use by adding <>

const Todos: React.FC < { items: Todo[]; onRemoveTodo: (id: string) => void } > = (props) => {
  return <ul className={classes.todos}> {
    props.items.map(item => (
      <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/> // null referes to this, here we don't need to speficy this so setting it to null
    ))
  } </ul>
}

export default Todos
