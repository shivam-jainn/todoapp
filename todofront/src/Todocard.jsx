import React from "react";
import { X } from "@phosphor-icons/react";
const Todocard = ({ todo }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-300 rounded max-w-lg h-16">
        
        <div className="inputbox grow-0">
        <input
          type="checkbox"
          name="todo"
          id="todo"
          className=" h-8 w-8 rounded-full border-none outline-none checked:bg-gradient-to-r from-violet-500 to-fuchsia-500  focus:ring-0"
        />

        </div>
      
        

      <div className="todotext grow max-w-prose mx-3">
        {todo}

      </div>


      <div className="killtask grow-0">
        <button>
        <X size={32} weight="thin" />
        </button>
      </div>

      </div>
  );
};

export default Todocard;
