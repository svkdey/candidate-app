import React from 'react'
import { Pie } from 'react-chartjs-2';
export default function PieComponent(props) {
    const { sde1Count, sde2Count, sde3Count, sde4Count } = props;
    console.log(props)
    var data = {
        labels: [
            'SDE 1',
            'SDE 2',
            'SDE 3',
            'SDE 4',
        ],
        datasets: [{
            data: [sde1Count, sde2Count, sde3Count, sde4Count],
            backgroundColor: [
                'rgba(234, 4, 4,.7)',
                'rgba(255,99,132,0.7)',
                'rgba(5, 84, 162,.7)',
                'rgb(242, 246, 8,.7)'
            ],
            hoverBackgroundColor: [
                'rgba(234, 4, 4,.9)',
                'rgba(255,99,132,0.9)',
                'rgba(5, 84, 162,.9)',
                'rgb(242, 246, 8,.9)'
            ]
        }]
    };
    return (
        <div className="card">
            <div className="heading">Applied Role Wise Stats</div>
            <Pie data={data} />

        </div>
    )
}
