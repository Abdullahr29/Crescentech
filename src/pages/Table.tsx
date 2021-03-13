import React, { useState } from 'react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet, IonButton } from '@ionic/react';
import './Table.css'

import {cloudDoneOutline, cloudOfflineOutline} from 'ionicons/icons';


const Table: React.FC = () => {


  return (

    <IonGrid class='doe'>
      <IonRow>
        <IonCol size="3" class='head' >
          Title
        </IonCol>
        <IonCol size="3.3" class='head'>
          Date
        </IonCol>
        <IonCol size="3" class='head'>
          Result
        </IonCol>
        <IonCol size="2" class='hde'>
          Status
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" class='h'>
          Garden
        </IonCol>
        <IonCol size="3.3" class='h'>
          10/03/2021
        </IonCol>
        <IonCol size="3" class='h'>
          Positive
        </IonCol>
        <IonCol size="2" class='hed'>
          <IonIcon class="notdone" icon={cloudOfflineOutline} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" class='h'>
          Wheat Field
        </IonCol>
        <IonCol size="3.3" class='h'>
          14/02/2021
        </IonCol>
        <IonCol size="3" class='h'>
          Negative
        </IonCol>
        <IonCol size="2" class='hed'>
          <IonIcon class="notdone" icon={cloudOfflineOutline} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" class='h'>
          Maize Field
        </IonCol>
        <IonCol size="3.3" class='h'>
          16/05/2020
        </IonCol>
        <IonCol size="3" class='h'>
          Positive
        </IonCol>
        <IonCol size="2" class='hed'>
          <IonIcon  class="done" icon={cloudDoneOutline} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" class='had'>
          Radish Field
        </IonCol>
        <IonCol size="3.3" class='had'>
          29/03/2020
        </IonCol>
        <IonCol size="3" class='had'>
          Negative
        </IonCol>
        <IonCol size="2" class='hd'>
          <IonIcon class="done" icon={cloudDoneOutline} />
        </IonCol>
      </IonRow>

    </IonGrid>
    
  );
};

export default Table;