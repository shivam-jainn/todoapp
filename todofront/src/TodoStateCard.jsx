import React from "react";

const TodoStateCard = () => {
  return (
    <div className=" w-full bottom-5  px-4 shadow-sm shadow-neutral-500 text-sm flex justify-between items-center  p-2 rounded-lg max-sm:justify-center   bg-bkg text-content">
      
      <div className="w-1/5 max-sm:hidden">
        5 items left
      </div>


      <div className="flex justify-between  w-3/5 mx-4  max-sm:{justify-evenly w-full}">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      </div>

      <div className="w-1/5 mx-3 max-sm:hidden">
      <button className="text-sm">Clear Completed</button>
      </div>


    </div>
  );
};

export default TodoStateCard;
