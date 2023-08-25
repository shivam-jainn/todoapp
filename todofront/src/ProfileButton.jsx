import React from 'react'
import {UserCircle} from '@phosphor-icons/react'
const ProfileButton = ({darkMode}) => {
  return (
    <div>
        {darkMode? <UserCircle size={32} weight="fill" /> : <UserCircle size={32} weight="thin" />}
    </div>
  )
}

export default ProfileButton