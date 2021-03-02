import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButton, IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonGrid, IonCol,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, ellipse, square, triangle, star } from 'ionicons/icons';
import Collect from './pages/Collect';
import Sync from './pages/Sync';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Context from "./context";
import NavBar from "./components/NavBar";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

import AuthContext from "./context"

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const App: React.FC = () => {

  const { authValues } = React.useContext(AuthContext);
  return (
    <IonApp>
      <NavBar/>
      {/* {!authValues.authenticated ? (
        <IonReactRouter>
          <Route path="/login" component={Login} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
          <Route path="*" render={() => <Redirect to="/login" />} exact={true} />
        </IonReactRouter>
      ) : ( */}
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/collect" component={Collect} exact={true} />
                <Route path="/" render={() => <Redirect to="/collect" />} exact={true} />
                <Route path="/sync" component={Sync} exact={true} />
                <Route path="/profile" component={Profile} />
                <Route path="/register" component={Login} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="collect" href="/collect">
                  <IonIcon icon={triangle} />
                  <IonLabel>Collect Data</IonLabel>
                </IonTabButton>
                <IonTabButton tab="sync" href="/sync">
                  <IonIcon icon={ellipse} />
                  <IonLabel>Upload Data</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile">
                  <IonIcon icon={square} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        {/*)}*/}
    </IonApp >
  )
};

export default App;
