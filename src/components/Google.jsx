import React, { useState } from 'react'
import Login from '../components/Google/Login'
import Logout from '../components/Google/Logout'
import '../styles/Google.scss'
const App = () => {
    const [stateAuth, setStateAuth] = useState()
    const response = (res) => {
        setStateAuth(res)
    }
    return (
        <div className='google_content'>
            {!stateAuth
                ?
                <Login response={response} />
                :
                <div className='google__header'>
                    <img src={stateAuth.profileObj.imageUrl} alt='' />
                    <h5>{stateAuth.profileObj.name}</h5>
                    <Logout response={response} />
                </div>
            }
        </div>
    )
}

export default App
