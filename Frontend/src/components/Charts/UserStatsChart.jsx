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

export function UseStatsChart({benchPress,squat,deadlift}) {


  let benchWeight = benchPress ? benchPress : 0;
  let squatWeight = squat ? squat : 0;
   let deadliftWeight = deadlift ? deadlift : 0;
  
  const data = [
    {
      ejercicio: 'Press de banca',
      peso: benchWeight,
    },
    {
      ejercicio: 'Sentadilla ',
      peso: squatWeight,
    },
    {
      ejercicio: 'Peso muerto',
      peso: deadliftWeight,
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart cx="52%" cy="60%" outerRadius="75%" data={data}  >
        <PolarGrid stroke="#ffffff" type="number" />
        <PolarAngleAxis dataKey="ejercicio" type="category" stroke="#ffffff"/>
        <PolarRadiusAxis  />
        <Radar
          dataKey="peso"
          stroke="#b91c1c"
          fill="#b91c1c"
          fillOpacity={0.7}
          dot="true"
        
         
        />
      </RadarChart>
    </ResponsiveContainer>
  //   <ResponsiveContainer width="100%" height="100%">
  //   <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
  //     <PolarGrid />
  //     <PolarAngleAxis dataKey="ejercicio"  type="category" stroke="#ffffff" />
  //     <PolarRadiusAxis/>
  //     <Radar name="Marcas" dataKey="peso" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  //   </RadarChart>
  // </ResponsiveContainer>
  );
}
