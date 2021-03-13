import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonGrid, IonCol } from '@ionic/react';

import AuthContext from "../context"
import { useHistory } from 'react-router';
import './login.css';

const Login: React.FC = () => {

  const { login } = React.useContext(AuthContext);
  const history = useHistory();

  const doLogin = async () => {
    let result = await login({ email: "abdu@gmail.com", password: "abdu1234" });

    if (result) {
      history.replace("/collect")
    }
  }

  return (
    
            <div className="login">

            <h1>Log in!</h1>
            <h2>Fill in with your details to log in</h2>
  
  
            <div className="card card-login">
              <form >
                <input
                  className="login-input"

                  name="email"
                  placeholder="Email"

                />
                <input
                  className="login-input"

                  type="password"
                  name="password"
                  placeholder="Password"

                />
                <input className="login-submit btn" type="submit" value="Log in" />
              </form>
            </div>
  
            <p><a href="/forgotpass">Forgot password</a></p>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
  
          </div>
  
  );
};

export default Login