import React from "react"
import Todo from "../models/todo"

// the way to create functional component in ts is by using this Generic way
// react ts provides us this React.FC which is used by all components if we wanna use props in our component, it comntains children as a prop
// if we want to define our own custom props we can use by adding <>

const Todos: React.FC < { items: Todo[] } > = (props) => {
  return <ul> {
    props.items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))
  } </ul>
}

export default Todos
