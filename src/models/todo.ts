class Todo {
  id: string;
  text: string;

  // we are defining constructor here so that they (the properties) can receive a value
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo

// we are defining type here that our todo will be using we can use type, interface and class, here we are using class that we can instantiate  