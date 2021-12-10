import { createContext, useState } from "react";

const UserContext = createContext({
    user: {},
    updateUser: (user) => {}
})



export function UserContextProvider(props) {
    const [user, setUser] = useState({})
    
    function updateUser(user) {
        console.log("setUser", user)
        setUser(previousUser=>{
            return user;
        })
    }   

    const context = {
        user: user,
        updateUser: updateUser
    }
    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;