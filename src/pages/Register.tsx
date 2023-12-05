import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import {
  backspaceOutline,
  lockClosedOutline,
  mailOpenOutline,
  personCircleOutline,
} from "ionicons/icons";
import React from "react";
import register from "../assets/register.png";
import "./register.css";

const Register: React.FC = () => {
  const router = useIonRouter();

  const handleRegister = (event: any) => {
    event.preventDefault();
    console.log("register");
    router.push("/", "root");
  };

  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <IonGrid fixed>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
              <div className='ion-text-center ion-padding'>
                <img src={register} alt='register' width={300} height={300} />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid fixed>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
              <form onSubmit={handleRegister}>
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
                  Criar Conta
                  <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                </IonButton>
                <IonButton
                  onClick={handleRegister}
                  type='button'
                  color={"secondary"}
                  expand='block'
                  className='ion-margin-top'>
                  Voltar
                  <IonIcon icon={backspaceOutline} slot='end' />
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
