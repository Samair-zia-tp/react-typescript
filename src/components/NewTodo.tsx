import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  
  // we cannot use just useRef here simply we need to define the type of ref, in this case on which element we want to attach this to
  const todoTextInputRef= useRef<HTMLInputElement>(null)
  // also we need to pass initial value to null here  

  const submitHandler = (event: React.FormEvent) => { // here we need to specify which type is of event, here we are submitting the form and therefore we can set this to React.FormEvent
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // added ? here to check if the value is empty assign null / undefined . We can also add ! if we are sure that this value will not be empty

    if (enteredText.trim().length === 0 ){
      // throw an error
      return
    }

    props.onAddTodo(enteredText)

  }
  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo Text: </label>
    <input type="text" id="text" ref={todoTextInputRef}/>
    <button>Add Todo</button>
  </form>
}

export default NewTodo
