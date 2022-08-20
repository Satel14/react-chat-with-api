import React from 'react'
import { GoogleLogout } from 'react-google-login';
import '../../styles/Google.scss'
const Logout = (props) => {
    const logout = () => {
        props.response()
    }
    const clientId = "840204595437-uef0n28i5kt903fc8vkllg6tb0p1ig2o.apps.googleusercontent.com";
    return (
        <div className='google_logout'>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
        </div>
    )
}

export default Logout