import React from "react";

const TodoStateCard = () => {
  return (
    <div className=" p-2  bg-gray-300 rounded max-w-lg h-16">
      <div className="buttongroup p-4 flex justify-between items-center mx-12">
        <button>All</button>

        <button>Active</button>

        <button>Completed</button>
      </div>
    </div>
  );
};

export default TodoStateCard;
