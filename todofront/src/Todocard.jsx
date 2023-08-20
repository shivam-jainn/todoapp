import React, { useState } from "react";
import { X } from "@phosphor-icons/react";
import axios from "axios";
const Todocard = ({ todo}) => {

  const [deleted, setIsdeleted] = useState(false);
  const [checked, setIsChecked] = useState(false);

  async function deleteTodo(){
          try {
       const response = await axios.post("http://localhost:3000/todos/deleteTask",{
         todoid: todo._id,
       }) ;
 
       setIsdeleted(true);
 
      } catch (error) {
         console.log(error);
      } 
  }


  async function handleFinishTodo(){
     try {
      const response = await axios.put("http://localhost:3000/todos/updateComplete",{
        todoid: todo._id,
        done: true,
      }) ;

      setIsChecked(!checked);

     } catch (error) {
        console.log(error);
     }
  }

  return (
    <div className={`flex justify-between items-center p-2 bg-gray-300 rounded max-w-lg h-16 ${deleted?'hidden':''}`}>
      <div className="inputbox grow-0">
        <input
          type="checkbox"
          name="todo"
          id="todo"
          className=" h-8 w-8 rounded-full border-none outline-none checked:bg-gradient-to-r from-violet-500 to-fuchsia-500  focus:ring-0"
          onClick={handleFinishTodo}
       />
      </div>

      <div className={`todotext notdone grow max-w-prose mx-3 ${checked ? 'line-through text-gray-500':''}  `} >{todo.todotext}</div>

      <div className="killtask grow-0" onClick={deleteTodo}>
        <button>
          <X size={32} weight="thin" />
        </button>
      </div>
    </div>
  );
};

export default Todocard;
