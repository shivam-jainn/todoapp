import MainTodoDiv from "./MainTodoDiv";
import bgdesktoplight from "./assets/bg-desktop-light.jpg"
export default function App() {
  return (
    <div>
      <img src={bgdesktoplight} className="relative" />
      <MainTodoDiv />
    </div>

  );
}
