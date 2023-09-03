import React from "react";
import MainTodoDiv from "./MainTodoDiv";
import bgdesktoplight from "./assets/bg-desktop-light.jpg"
import DarkModeButton from "./DarkModeButton";
import ProfileButton from "./ProfileButton";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  return (
      <RecoilRoot>
    <div >
      <img src={bgdesktoplight} className="relative" />
      <div className="absolute top-2 flex right-2">
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* <ProfileButton  darkMode={darkMode}/> */}
      </div>
      <MainTodoDiv darkMode={darkMode} /> 
    </div>
      </RecoilRoot>

  );
}
