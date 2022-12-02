import {Radar, ResponsiveContainer,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis, LabelList, Legend } from "recharts";



export function UseStatsChart(){

    const data = [
        {
          subject: 'Sentadilla',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Peso muerto',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Press de banca',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Snatch',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Clean & Jerk',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        
      ];
    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} dot="true" label={true}/>
            <Legend/>
            
          </RadarChart>
        </ResponsiveContainer>
      );

}