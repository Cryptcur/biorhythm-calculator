import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime
} from "@ionic/react";
import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";
import { useLocalStorage } from "./hooks";

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D-MMM-YYYY"
            value={birthDate}
            onIonChange={ev => setBirthDate(ev.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="D-MMM-YYYY"
            value={targetDate}
            onIonChange={ev => setTargetDate(ev.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
