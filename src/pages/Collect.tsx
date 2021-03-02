import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {NFC, Ndef} from '@ionic-native/nfc';
import ExploreContainer from '../components/ExploreContainer';
import NFCReader from '../components/NFCReader';

const Collect: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Collect</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NFCReader/>
      </IonContent>
    </IonPage>
  );
};

export default Collect;
