import React from "react";
import UserContext from "./UserContext";
//The Provider component accepts a "value" prop that holds the shared data, and any component that is a child of the Provider component can access that shared data.
//This is a consumer.
const UserContextProvider  = ( ({children}) =>{ 
    //This children is the prop, (parameter) which stores data from usestate()
    const [user , setUser] = React.useState(false) 
    //This state calls which we want like api's and throws it in the return by its [paramter].
    //The setUser parmater is used to add a value in this file and user is used to insert a value from this.
        return(
                <UserContext.Provider value={{user , setUser}}> {/*This provider gives the access to all the children in it. */}
                    {children}                  
                </UserContext.Provider>
        )

  
    })
export default UserContextProvider

//In this example, we have a parent component called UserContextProvider. This component has a 
//state variable called "user", which is initially set to an empty string. We've
//also defined a function called setUser that can be used to update the value of user.

