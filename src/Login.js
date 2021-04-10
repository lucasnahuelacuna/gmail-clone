import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                }))
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" 
                    alt=""
                />
                <Button 
                    onClick={signIn}
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
