import React from 'react';
import { IonButton, IonButtons, IonIcon, IonMenuButton, IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonGrid, IonCol } from '@ionic/react';
import { images, ellipse, square, triangle, star } from 'ionicons/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import pic from '../images/Group.png';
import './NavBar.css';

const NavBar: React.FC = () => {

    const history = useHistory();

    const toLogin = async () => {
          history.replace("/login")
      }

    const MyBar = styled(IonToolbar)`
    --background: #F5F0E0;
    `;

    const MyTitle = styled(IonTitle)`
    --color: #693e06;
    
    `;

    const MyButton = styled(IonButton)`
        background-color: #CEDA95;
        color: #000000;
        border-radius: 10px;
    --
    `;

    return (
        <MyBar>
            <IonImg class='displayed' src={pic} />
            <IonButtons slot="end">
                <MyButton onClick={() => toLogin()}>Login</MyButton>
            </IonButtons>
        </MyBar>
    );
};

export default NavBar;