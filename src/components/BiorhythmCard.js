import dayjs from "dayjs";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import { calculationBiorhythms } from "../calculations";
import React from "react";

const formatDate = isoString => {
  return dayjs(isoString).format("D MMM YYYY");
};

const BiorhythmCard = ({ birthDate, targetDate }) => {
  const { physical, emotional, intellectual } = calculationBiorhythms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        <IonCardContent>
          <p>Physical: {physical.toFixed(4)}</p>
          <p>Emotional: {emotional.toFixed(4)}</p>
          <p>Intellectual: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
};

export default BiorhythmCard;
