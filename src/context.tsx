import React from "react"
import axios from "axios";

export const Context = React.createContext<any>(undefined);

export const AuthProvider: React.FC = ({children}) => {

    let [authValues, setAuthValues] = React.useState({
        authenticated: false,
        email: "",
        id: "",
        token: "",
        name: "",
    });

    const login =  async ({ email, password}: {email : string; password : string}) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        const body = JSON.stringify({ email, password });
        
        try {
            const res = await axios.post("https://evening-eyrie-40887.herokuapp.com/api/auth", body, config);
            const confi = {
                headers: {
                    "x-auth-token": res.data.token
                }
            }
            const re = await axios.get("https://evening-eyrie-40887.herokuapp.com/api/auth", confi);
            setAuthValues({
                authenticated: true,
                email: email,
                id: re.data._id,
                token: res.data.token,
                name: re.data.name
            });
            console.log(re)
        } catch (e) {

            console.log(e)

            // const errors = e.response.errors;
        
            // if(errors){
            //   errors.forEach((error: { msg: any; }) => console.log(error.msg));
            // }
        
            
        }

        // return new Promise((resolve) => {
        //     if(){
                
        //         resolve(true);
        //     } else {
        //         resolve(false);
        //     }
        // });
    };

    const logout = () => {
        setAuthValues({
            authenticated: false,
            email: "", 
            id: "", 
            token: "",
            name: ""
        });
    };

    let state = {
        authValues,
        login,
        logout,
    };

    return <Context.Provider value={state}>{children}</Context.Provider>;

};

export default Context;