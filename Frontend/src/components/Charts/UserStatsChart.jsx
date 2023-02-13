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
  );
}
