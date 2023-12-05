import React, { useState } from 'react'
import Login2 from '../Components/Login2'


    function UserContextProvider2() {
    const [text , settext] = useState()
        return(
            <UserContext.Provider2 value = {{text, settext}}>
                <Login2 />
            </UserContext.Provider2>
            )
}

export default UserContextProvider2