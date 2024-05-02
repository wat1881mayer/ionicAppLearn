import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { calculateBiorhythmSeries } from '../lib/biorhythms';

// type staticData = {
//   date: string;
//   physical: number;
//   emotional: number;
//   intellectual: number;
// };

type targetDateProps = {
  birthDate: string;
  targetDate: string;
};

export default function BiorhythmChart({
  birthDate,
  targetDate,
}: targetDateProps) {
  const series = calculateBiorhythmSeries(birthDate, targetDate, 3);
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={series}>
        <CartesianGrid vertical={false} strokeDasharray="2 4" />
        <XAxis
          dataKey="date"
          ticks={[series[0].date, series[3].date, series[6].date]}
        />
        <ReferenceLine x={series[6].date} />
        <Line dataKey="physical" stroke="green" dot={false} type="natural" />
        <Line dataKey="emotional" stroke="red" dot={false} type="natural" />
        <Line dataKey="intellectual" stroke="blue" dot={false} type="natural" />
      </LineChart>
    </ResponsiveContainer>
  );
}
