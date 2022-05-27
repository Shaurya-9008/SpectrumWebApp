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
                    src = "https://cdn.dribbble.com/users/112923/screenshots/2444129/spectrum-icon.jpg"
                    alt = ""
                />
                <h2 className='text'>Design and developed by Team Spectrum</h2>
                <div className='box'>
                    <h3 className="info">One platform for your team and your work
All the features of Spectrum work together so you can too...!</h3>
                </div>
            </div>
            <Button 
                onClick = {signIn}
                className = "login__button">Sign In with Google</Button>
        </div>
    )
}

export default Login
