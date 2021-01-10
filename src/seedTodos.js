import { v4 as uuidv4 } from "uuid";

const seedTodos = [
    {
      id: uuidv4(),
      task: "Taking care of myself",
      completed: false,
    },
    { id: uuidv4(), task: "Tell people I like them", completed: true },
    { id: uuidv4(), task: "Donating to homeless people", completed: false },
    { id: uuidv4(), task: "You can add, cancel or delete your todos", completed: false },

  ];

  export default seedTodos;