import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      name: "Bella",
      physics: 74,
      chemistry: 80,
      biology: 77,
      math: 76,
      higherMath: 79,
      religion: 82,
      ict: 74,
      bangla1st: 69,
      bangla2nd: 70,
      english1st: 73,
      english2nd: 75
    },
    {
      name: "Diya",
      physics: 66,
      chemistry: 70,
      biology: 73,
      math: 68,
      higherMath: 72,
      religion: 85,
      ict: 78,
      bangla1st: 75,
      bangla2nd: 74,
      english1st: 71,
      english2nd: 70
    },
    {
      name: "Farah",
      physics: 88,
      chemistry: 85,
      biology: 86,
      math: 90,
      higherMath: 89,
      religion: 91,
      ict: 87,
      bangla1st: 79,
      bangla2nd: 80,
      english1st: 82,
      english2nd: 83
    },
    {
      name: "Hina",
      physics: 95,
      chemistry: 97,
      biology: 96,
      math: 98,
      higherMath: 99,
      religion: 88,
      ict: 94,
      bangla1st: 90,
      bangla2nd: 92,
      english1st: 91,
      english2nd: 93
    },
    {
      name: "Dua",
      physics: 72,
      chemistry: 70,
      biology: 69,
      math: 74,
      higherMath: 73,
      religion: 81,
      ict: 75,
      bangla1st: 70,
      bangla2nd: 71,
      english1st: 72,
      english2nd: 74
    }
  ];
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={400} height={400} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;