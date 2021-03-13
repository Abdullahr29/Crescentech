import React from 'react';
import '../theme/variables.css';
import GelocationButton from '../components/Location';
import pics from './Uploadresults.png';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
  IonCol, IonImg, IonActionSheet, IonButton, IonList, IonItem, IonThumbnail, IonLabel, IonCard } from '@ionic/react';


  type Item = {
    src: string;
    text: string;
  };

  const items: Item[] = [{ src: pics, text: 'a picture of a cat' }];
  

const ExploreContainer: React.FC = () => {
  return (
    <IonContent>
    <IonList>
      {items.map((image, i) => (
        <IonCard key={i}>
            <IonImg src={image.src} />
        </IonCard>
      ))}
    </IonList>
  </IonContent>
    
  );
};

export default ExploreContainer;
