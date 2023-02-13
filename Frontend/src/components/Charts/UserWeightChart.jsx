import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

import { formatDate } from "../../tools/formatDate";
export function UserWeightChart({ prop,color }) {
  const data = [{}];

  for (let index = 0; index < prop?.length; index++) {
    const element = prop[index];

    let user_log = {};
    user_log = {};
    user_log.fecha = formatDate(element.date);
    user_log.peso = element.weight;
    data[index] = user_log;
  }


  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5 5" />
          <XAxis dataKey="fecha" />
          <YAxis dataKey="peso" />
          <Tooltip />
          <Area type="monotone" dataKey="peso" stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
