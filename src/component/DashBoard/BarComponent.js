import React from 'react'
import { Bar, HorizontalBar } from 'react-chartjs-2';


export default function BarComponent(props) {
    const { appliedCount, inprogressCount, completeCount } = props;
    const data = {
        labels: ['APPIED', 'IN PROGRESS', 'COMPLETE'],
        datasets: [
            {
                label: 'Candidation Application Status',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [appliedCount, inprogressCount, completeCount]
            }
        ]
    };
    return (
        <div className="card">
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    beginAtZero: true,
                    legend: {
                        display: true,
                        position: 'top'
                    }, maintainAspectRatio: false
                }}

            />
        </div>
    )
}
