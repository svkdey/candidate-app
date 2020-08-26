import React from 'react'
import { Doughnut } from 'react-chartjs-2';
export default function DonutComponent(props) {
    const { securityCount, backendCount, frontendCount, devopsCount } = props;
    console.log(props)
    var data = {
        labels: [
            'BACK END', 'FRONT END', 'DEVOPS', 'SECURITY'
        ],
        datasets: [{

            data: [backendCount, frontendCount, devopsCount, securityCount],
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
            <div className="heading">Technology Wise Stats</div>
            <Doughnut data={data} />
        </div>
    )
}
