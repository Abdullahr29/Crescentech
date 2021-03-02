import React, { useState } from 'react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import GelocationButton from '../components/Location';

const Sync: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const[photoToDelete, setPhotoToDelete] = useState<Photo>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Upload</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer/>
        <GelocationButton/>
        <IonButton>Upload</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Sync;
