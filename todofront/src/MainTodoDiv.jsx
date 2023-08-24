import React, {  useState } from 'react'

import TodoStateCard from "./TodoStateCard";
import Todolist from "./Todolist";
import AddTodoCard from './AddTodoCard';


const MainTodoDiv = () => {
  const [list, setList] = useState([]);
  
  function addTodoToList(newTodo) {
      setList(prevList => [...prevList, newTodo]);
    }


    return (
    <div className="max-w-lg mx-auto my-10 flex flex-col items-center px-4  absolute top-0 right-0 left-0 bottom-0">
      <AddTodoCard onTodoAdded={addTodoToList}  />
    <Todolist list={list} setList={setList} />
     <TodoStateCard  />
    </div>
  )
}

export default MainTodoDiv