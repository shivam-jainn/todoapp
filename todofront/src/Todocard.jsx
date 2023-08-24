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
        done: !(checked),
      }) ;

      console.log(response);
      setIsChecked(!checked);

     } catch (error) {
        console.log(error);
     }
  }

  return (
    <div className={`w-full flex justify-between items-center p-2    bg-white     ${deleted?'hidden':''}  `}>
      <div className="inputbox w-1/6 mr-2">
        <input
          type="checkbox"
          name="todo"
          id="todo"
          className={`rounded-full   p-3
                     ${checked? 'checked:bg-gradient-to-r from-cyan-500 to-blue-500}':''} outline-none  `}
          onClick={handleFinishTodo}
       />
      </div>

      <div className={`todotext w-4/6 truncate   ${checked ? 'line-through text-gray-600':''}  `} >{todo.todotext}</div>

      <div className="killtask w-1/6 flex justify-end ml-2" onClick={deleteTodo}>
        <button>
          <X size={32} weight="thin" />
        </button>
      </div>
    </div>
  );
};

export default Todocard;
