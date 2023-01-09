import { useState } from "react";
import { useEffect } from "react";
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

export function UseStatsChart({lifts}) {


  
 
   
  const data = [
    {
      ejercicio: 'Press de banca',
      peso: lifts?.benchPress[0].maxWeight || 0 ,
    },
    {
      ejercicio: 'Sentadilla ',
      peso:lifts?.squat[0].maxWeight || 0  ,
    },
    {
      ejercicio: 'Peso muerto',
      peso: lifts?.deadlift[0].maxWeight || 0  ,
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
