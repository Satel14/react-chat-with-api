import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import '../../styles/Google.scss'
const Login = (props) => {
    const clientId = "840204595437-uef0n28i5kt903fc8vkllg6tb0p1ig2o.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        props.response(response)
    }
    return (
        <div className='google_login'>  
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login