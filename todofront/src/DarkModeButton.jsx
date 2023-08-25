import React from 'react'
import {Moon} from '@phosphor-icons/react'
const DarkModeButton = ({darkMode,setDarkMode}) => {
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
        <button
        onClick={toggleDarkMode}
        >
        {darkMode? <Moon size={32} weight="fill" /> : <Moon size={32} weight="thin" />}
        </button>
    </div>
  )
}

export default DarkModeButton