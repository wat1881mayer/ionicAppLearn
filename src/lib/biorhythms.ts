import dayjs from 'dayjs';

type biorhtym = {
  physical: number;
  emotional: number;
  intellectual: number;
};

type series = {
  date: string;
  physical: number;
  emotional: number;
  intellectual: number;
};

export function calculateBiorhythms(
  birthDate: string,
  targetDate: string
): biorhtym {
  return {
    physical: calculateBiorhythm(birthDate, targetDate, 23),
    emotional: calculateBiorhythm(birthDate, targetDate, 28),
    intellectual: calculateBiorhythm(birthDate, targetDate, 33),
  };
}

export function calculateBiorhythm(
  birthDate: string,
  targetDate: string,
  cycle: number
): number {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, 'day');
  console.log('diff', diff);
  return Math.sin((2 * Math.PI * diff) / cycle);
}

export function calculateBiorhythmSeries(
  birthDate: string,
  centralDate: string,
  range: number
): Array<series> {
  const series = [];
  const centralDay = dayjs(centralDate);
  for (let diff = -range; diff <= range; diff++) {
    const targetDay = centralDay.add(diff, 'day');
    const biorhythms = calculateBiorhythms(
      birthDate,
      targetDay.format('YYYY-MM-DD')
    );
    series.push({ date: targetDay.format('D MMM'), ...biorhythms });
  }
  return series;
}
