import {
  Radar,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LabelList,
  Legend,
} from "recharts";

export function UseStatsChart() {
  const data = [
    {
      subject: "Sentadilla",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Peso muerto",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Press de banca",
      A: 86,
      B: 130,
      fullMark: 150,
    }
  ];
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart cx="50%" cy="60%" outerRadius="95%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          dataKey="A"
          stroke="#FFFFFF"
          fill="#FF0000"
          fillOpacity={0.3}
          dot="true"
          label={true}
         
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
