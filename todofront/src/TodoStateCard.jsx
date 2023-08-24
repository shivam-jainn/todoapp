import React from "react";

const TodoStateCard = () => {
  return (
    <div className=" w-full bottom-5  px-4 shadow-sm shadow-neutral-500 text-sm flex justify-between items-center bg-white p-2 rounded-lg">
      
      <div className="w-1/5">
        5 items left
      </div>


      <div className="flex justify-between  w-3/5 mx-4">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      </div>

      <div className="w-1/5 mx-3">
      <button className="text-sm">Clear Completed</button>
      </div>


    </div>
  );
};

export default TodoStateCard;
