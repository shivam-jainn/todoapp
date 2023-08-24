import React, { useEffect } from 'react'
import axios from 'axios'
import Todocard from './Todocard'

const Todolist = ({list,setList}) => {
  
  useEffect(() => {
    fetchList();
  }, []);

  console.log(list);


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
    <div className='w-full my-3 overflow-y-auto rounded-lg shadow-sm shadow-neutral-500'>
      {renderList()}
    </div>
     
  );
}

export default Todolist;
