import React, { useState } from 'react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet, IonButton, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import GelocationButton from '../components/Location';
import styled from 'styled-components';
import Table from '../pages/Table';
import './Sync.css';
import pic from '../images/Uploadresultss.png';




const Sync: React.FC = () => {

  const MyTitle = styled(IonTitle)`
    --color: #693e06;  
  `;

  const MyButton = styled(IonButton)`
    --background: #61873D;
    --color: #ffffff;
    --align-self: center;
    --font-wight: normal;
  `;


  const MyPage = styled(IonPage)`
    background-color: #BCE0A3;
    .box {
      border: 1px solid white;
      margin: 10px;
      height: 200px;
      width: 200px;
      background-color: #BCE0A3;
    } 
  `;

  const MyCol = styled(IonCol)`
    border: 1px solid rgba(128, 128, 128, 0);
    text-align: center;
    background-color: #CEDA95;
    padding-top: 0px;
  `;

  const DyCol = styled(IonCol)`
    border: 1px solid rgba(128, 128, 128, 0);
    text-align: center;
    background-color: #FBFFF3;
    padding-top: 0px;
  `;

  const SCol = styled(IonCol)`
    border: 1px solid rgba(128, 128, 128, 0);
    text-align: center;
    background-color: #CEDA95;
  `;

  const SRow = styled(IonRow)`
    margin-top: 20px;
  `;

  const MyContent = styled(IonContent)`
    background-color: #BCE0A3;
  `;

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <SRow>
              <SCol>
                <IonCard class="yousuck">
                  <IonImg src={pic} />
                </IonCard>
              </SCol>
          </SRow>
          <IonRow>
            <MyCol>
              <p>For analysis visit <u>crescentech.herokuapp.com</u></p>
            </MyCol>
          </IonRow>
          <IonRow >
            <MyCol>
              <MyButton>Upload Results</MyButton>
            </MyCol>
          </IonRow>
          <IonRow>
            <MyCol>
              <Table/>
            </MyCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
     
    
  );
};

export default Sync;
