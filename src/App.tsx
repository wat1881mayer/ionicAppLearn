import { useState } from 'react';

import {
  IonApp,
  IonToolbar,
  IonHeader,
  IonContent,
  IonIcon,
  IonList,
  IonLabel,
  IonInput,
  IonTitle,
  IonItem,
  setupIonicReact,
} from '@ionic/react';
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import BiorhythmCard from './components/BiorhythmCard';
import './App.css';
import { useStoredState } from './lib/hooks';

setupIonicReact({
  mode: 'md',
});

function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);
}

function App() {
  const [targetDate, setTargetDate] = useState(getToday);
  const [birthDate, setBirthDate] = useStoredState('birthDate', '');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {Boolean(birthDate) && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonList>
          <IonItem>
            <IonLabel position="fixed">Date of Birth:</IonLabel>
            <IonInput
              aria-label="Birth Date"
              type="date"
              value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Target Date:</IonLabel>
            <IonInput
              aria-label="Target Date"
              type="date"
              value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value!)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;
