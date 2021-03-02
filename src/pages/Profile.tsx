import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import AuthContext from "../context"
import { useHistory } from 'react-router';

const Profile: React.FC = () => {

  const { authValues, logout } = React.useContext(AuthContext);
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          Hello, {(authValues.user)}
        </div>
        <IonButton onClick={() => {logout(); history.replace("/login")}}>Logout</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Profile;
