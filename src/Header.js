import { Search,Home,SupervisorAccount,BusinessCenter,Chat,Notifications } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
import { auth } from './firebase'
import "./Header.css"
import HeaderOption from './HeaderOption'

const Header = () => {
  const dispatch = useDispatch()
  const logoutUser = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
            <div className="header__search">
                <Search />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={Home}  title="Home"/>
            <HeaderOption Icon={SupervisorAccount} title="My Network"/>
            <HeaderOption Icon={BusinessCenter} title="My Network"/>
            <HeaderOption Icon={Chat} title="My Network"/>
            <HeaderOption Icon={Notifications} title="My Network"/>
            <HeaderOption avatar={true} title="Me" onClick={logoutUser}/>
        </div>
    </div>
  )
}

export default Header