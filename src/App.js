import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonLabel,
  IonItem,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";

function App() {
  const [birthDate, setBirthDate] = useState("2020-01-31");
  const targetDate = new Date().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D-MMM-YYYY"
            value={birthDate}
            onIonChange={ev => setBirthDate(ev.detail.value)}
          />
        </IonItem>
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
