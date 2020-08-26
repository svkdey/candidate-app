import React from 'react'
import DonutComponent from './DonutComponent'
import PieComponent from './PieComponent'

import BarchartComponent from './BarchartComponent';

export default function Left(props) {
    console.log(props)
    const { sde1Count, sde2Count, sde3Count, sde4Count, securityCount, backendCount, frontendCount, devopsCount, appliedCount, inprogressCount, completeCount } = props;
    return (
        <div className="main-container-left ">
            {/* <ApplicationSummery appliedCount={appliedCount} inprogressCount={inprogressCount} completeCount={completeCount} /> */}


            <div className="sub-container-left "><BarchartComponent appliedCount={appliedCount} inprogressCount={inprogressCount} completeCount={completeCount} /></div>

            <div className="sub-container-left "><DonutComponent securityCount={securityCount} backendCount={backendCount} frontendCount={frontendCount} devopsCount={devopsCount} /></div>

            <div className="sub-container-left "> <PieComponent sde1Count={sde1Count} sde2Count={sde2Count} sde3Count={sde3Count} sde4Count={sde4Count} /></div>





        </div>
    )
}
