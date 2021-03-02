import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonGrid, IonCol } from '@ionic/react';

import AuthContext from "../context"
import { useHistory } from 'react-router';

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonCol size="3">
            <IonItem>
              <IonInput placeholder="Username" ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type = "password" placeholder="Password" ></IonInput>
            </IonItem>
            <IonButton onClick={() => doLogin()}>Login</IonButton>
          </IonCol>
          <IonCol size="6"></IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login