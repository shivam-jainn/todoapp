import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todocard from './Todocard'
import AddTodoCard from './AddTodoCard';

const Todolist = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  function addTodoToList(newTodo) {
    setList(prevList => [...prevList, newTodo]);
  }

  async function fetchList() {
    try {
      const response = await axios.get('http://localhost:3000/todos/showList');
      console.log(response.data);
      setList(response.data);

    } catch (error) {
      console.error('Error fetching list:', error);
    }
  }

  function renderList() {
    return list.map(todo => (
      <Todocard key={todo._id}  todo={todo} />
    ));
  }

  return (
    <div>
      <AddTodoCard onTodoAdded={addTodoToList} />
     
      {renderList()}
    </div>
  );
}

export default Todolist;
