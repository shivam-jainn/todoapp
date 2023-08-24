import React, { useState } from "react";
import axios from "axios";

const AddTodoCard = ({ onTodoAdded }) => {
  const [todotext, setTodotext] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addTodoAPI(todotext);
      onTodoAdded(response.data);
      setTodotext("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const addTodoAPI = async (todoText) => {
    return axios.post("http://localhost:3000/todos/addTask", {
      todotext: todoText,
      done: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full my-4">
      <input
        type="text"
        className="p-2 rounded-md w-full border-none outline-none ring-none  "
        placeholder="Add a new todo"
        value={todotext}
        onChange={(e) => setTodotext(e.target.value)}
      />
    
    </form>
  );
};

export default AddTodoCard;
