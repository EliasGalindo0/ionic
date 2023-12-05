import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import intro1 from "../assets/intro/intro1.gif";
import intro2 from "../assets/intro/intro2.gif";
import { IonButton, IonText } from "@ionic/react";
import "./intro.css";

interface Containerprops {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<Containerprops> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={intro1} alt='intro1' />
        <IonText>
          <h3>Carregando informações...</h3>
        </IonText>
        <SwiperButtonNext>Próximo</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={intro2} alt='intro2' />
        <IonText>
          <IonButton onClick={() => onFinish()}>Login</IonButton>
        </IonText>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
