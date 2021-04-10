import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src="https://i.blogs.es/16b956/gmail-nuevo-logo-google-workspace/840_560.jpg" 
                    alt=""
                />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search Email" type="text"/>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar 
                    onClick={signOut} 
                    src={user?.photoURL}
                    className="header__avatar"
                />
            </div>
        </div>
    )
}

export default Header
