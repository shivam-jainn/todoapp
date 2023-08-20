import React, { useState } from "react";
import axios from "axios";

const AddTodoCard = ({onTodoAdded}) => {
  const [todotext, setTodotext] = useState(""); // Initialize with an empty string

  async function addTodo(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/todos/addTask", {
        todotext: todotext,
        done: false,
      });

      console.log(response.data); // Access the response data
      onTodoAdded(response.data);

      setTodotext('');
      // You can also update your state here or perform other actions if needed
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        className="p-4 rounded-md"
        placeholder="Add a new todo"
        value={todotext} // Use value instead of onChange
        onChange={(e) => setTodotext(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoCard;
