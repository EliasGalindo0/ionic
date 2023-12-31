import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Tab 2</IonTitle>
          </IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>Tab 2</IonContent>
    </IonPage>
  );
};

export default Tab2;
