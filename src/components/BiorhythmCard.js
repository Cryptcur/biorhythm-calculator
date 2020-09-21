import dayjs from "dayjs";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import React from "react";

const formatDate = () => {
  return null;
};

const BiorhythmCard = ({ targetDate }) => {
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{targetDate}</IonCardTitle>
        <IonCardContent>
          <p>Physical:</p>
          <p>Emotional:</p>
          <p>Intellectual:</p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
};

export default BiorhythmCard;
