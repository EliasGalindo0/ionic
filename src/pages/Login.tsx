import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import {
  keyOutline,
  lockClosedOutline,
  logInOutline,
  logOutOutline,
  mailOpenOutline,
  personCircleOutline,
} from "ionicons/icons";
import login from "../assets/login.png";
import Intro from "../components/Intro";
import "./login.css";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seem";

const Login: React.FC = () => {
  const router = useIonRouter();

  const [intro, setIntro] = useState(false);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seem = await Preferences.get({ key: INTRO_KEY });
      setIntro(seem.value === "true");
    };

    checkStorage();
  }, []);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    await present("Carregando...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  const handleSignup = () => {
    router.push("/register", "root");
  };

  const seeIntroAgain = () => {
    Preferences.set({
      key: INTRO_KEY,
      value: "false",
    });
    setIntro(false);
  };

  const finishIntro = async () => {
    await Preferences.set({
      key: INTRO_KEY,
      value: "true",
    });
    setIntro(true);
  };

  return (
    <>
      {!intro ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonContent className='ion-padding' scrollY={false}>
            <IonGrid fixed>
              <IonRow class='ion-justify-content-center'>
                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                  <div className='ion-text-center'>
                    <img src={login} alt='login' width={300} height={300} />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid fixed>
              <IonRow class='ion-justify-content-center'>
                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                  <form onSubmit={handleLogin}>
                    <IonInput
                      id='email'
                      className='ion-margin-bottom'
                      type='email'
                      label='E-mail'
                      labelPlacement='floating'
                      fill='outline'
                      placeholder='Digite seu E-mail'>
                      <IonIcon id='email' icon={mailOpenOutline} slot='end' />
                    </IonInput>

                    <IonInput
                      id='password'
                      type='password'
                      label='Senha'
                      labelPlacement='floating'
                      fill='outline'
                      placeholder='Digite sua senha'>
                      <IonIcon icon={lockClosedOutline} slot='end' />
                    </IonInput>

                    <IonButton
                      type='submit'
                      color={"success"}
                      expand='block'
                      className='ion-margin-top'>
                      Login
                      <IonIcon icon={logInOutline} slot='end' />
                    </IonButton>
                    <IonButton
                      onClick={handleSignup}
                      type='button'
                      color={"secondary"}
                      expand='block'
                      className='ion-margin-top'>
                      Cadastrar
                      <IonIcon icon={personCircleOutline} slot='end' />
                    </IonButton>
                    <IonButton
                      routerLink='/forgot'
                      fill='clear'
                      type='button'
                      expand='block'>
                      Esqueci minha senha
                      <IonIcon icon={keyOutline} slot='end' />
                    </IonButton>
                    <IonButton
                      onClick={seeIntroAgain}
                      size='small'
                      fill='clear'
                      type='button'
                      color={"medium"}
                      expand='block'>
                      Ver introdução novamente
                      <IonIcon icon={logOutOutline} slot='end' />
                    </IonButton>
                  </form>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
