import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import List from "./List";
import Settings from "./Settings";
import { Redirect, Route } from "react-router";
import { homeOutline, logOutOutline, settingsOutline } from "ionicons/icons";
import "./menu.css";
import Login from "./Login";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/list", icon: homeOutline },
    { name: "Settings", url: "/app/settings", icon: settingsOutline },
    { name: "Logout", url: "/", icon: logOutOutline },
  ];
  return (
    <IonPage>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar color={"danger"}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding'>
            {paths.map((path, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  routerLink={path.url}
                  routerDirection='none'
                  detail={false}>
                  {path.name}
                  <IonIcon slot='start' icon={path.icon} />
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id='main'>
          <Route exact path='/app/list' component={List} />
          <Route exact path='/app/settings' component={Settings} />
          <Route exact path='/' component={Login} />
          <Route exact path='/app'>
            <Redirect to='/app/list' />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
