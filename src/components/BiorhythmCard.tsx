import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import dayjs from 'dayjs';
import { calculateBiorhythms } from '../lib/biorhythms';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

type targetDateProps = {
  birthDate: string;
  targetDate: string;
};

function formatDate(isoString: string) {
  const day = dayjs(isoString);
  return day.format('D MMMM YYYY');
}

export default function BiorhythmCard({
  birthDate,
  targetDate,
}: targetDateProps) {
  const biorhythms = calculateBiorhythms(birthDate, targetDate);
  return (
    <IonCard className="BiorhythmCard ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p className="physical">Physical: {biorhythms.physical.toFixed(4)}</p>
        <p className="emotional">
          Emotional: {biorhythms.emotional.toFixed(4)}
        </p>
        <p className="intellectual">
          Intellectual: {biorhythms.intellectual.toFixed(4)}
        </p>
      </IonCardContent>
    </IonCard>
  );
}
