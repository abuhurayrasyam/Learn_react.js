import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataResponse = use(marksPromise);
    const marksData = marksDataResponse.data;

    //data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            biology: studentData.marks.biology,
        }

        const averageMark = (student.physics + student.chemistry + student.biology) / 3;
        student.averageMark = averageMark;

        return student;
    })

    return (
        <div>
            <BarChart width={400} height={400} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'averageMark'} fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;