import dayjs from "dayjs";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import { calculationBiorhythms } from "../calculations";
import BiorhythmChart from "./BiorhythmChart";
import "./BiorhythmCard.css";
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
    <IonCard className="biorhythm-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
          <p className="physical">Physical: {physical.toFixed(4)}</p>
          <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
          <p className="intellectual">
            Intellectual: {intellectual.toFixed(4)}
          </p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
};

export default BiorhythmCard;
