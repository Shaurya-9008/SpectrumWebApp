import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = (e) => {
       auth.signInWithPopup(provider)
    }
    return (
        <div className = "login">
            <div className = "login__logo">
                <img 
                    src = "https://static.vecteezy.com/system/resources/thumbnails/000/595/469/small/20012019-14.jpg"
                    alt = ""
                />
                <h2>Design and developed by Team Spectrum</h2>
            </div>
            <Button 
                onClick = {signIn}
                className = "login__button">Sign In</Button>
        </div>
    )
}

export default Login
