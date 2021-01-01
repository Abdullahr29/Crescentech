import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {NFC, Ndef} from '@ionic-native/nfc';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NFCReader from '../components/NFCReader';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NFCReader/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
