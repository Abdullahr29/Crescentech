import React from 'react';
import { IonButton, IonButtons, IonIcon, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonGrid, IonCol } from '@ionic/react';
import { images, ellipse, square, triangle, star } from 'ionicons/icons';

const NavBar: React.FC = () => {

    //const image = 

    return (
        <IonToolbar>
            <IonTitle>Crescentech</IonTitle>
            <IonButtons slot="end">
                <IonMenuButton autoHide={false} />
            </IonButtons>
        </IonToolbar>
    );
};

export default NavBar;