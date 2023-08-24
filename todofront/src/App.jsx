import TodoStateCard from "./TodoStateCard";
import Todolist from "./Todolist";
export default function App() {
  return (
      <div className="max-w-lg mx-auto my-10 flex flex-col items-center px-4">
      <Todolist />
       <TodoStateCard  />
      </div>

  );
}
