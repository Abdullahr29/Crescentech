import React, { useState } from 'react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet, IonButton } from '@ionic/react';
import ExploreContainer from './ExploreContainer';
import GelocationButton from './Location';
import styled from 'styled-components';




const Table: React.FC = () => {

  const MyTitle = styled(IonTitle)`
    --color: #693e06;  
  `;

  const MyButton = styled(IonButton)`
    --background: green;
  `;


  const MyPage = styled(IonPage)`
    .box {
      border: 1px solid white;
      margin: 10px;
      height: 200px;
      width: 200px;
      background: #BCE0A3
    } 
  `;


  return (
    <MyPage>
      <MyButton>

      </MyButton>
    </MyPage>
     
    
  );
};

export default Table;