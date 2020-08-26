import React from 'react'

export default function ApplicationSummery(props) {
    const { appliedCount, inprogressCount, completeCount } = props;
    return (
        <div className="summaryContainer card">
            <div className="sub-summaryContainer">Application Summary</div>
            <div className="sub-summaryContainer text-decor">
                <span className="success">{completeCount}</span>{"/"}
                <span className="ok">{inprogressCount}</span>{"/"}
                <span className="alert">{appliedCount}</span>

            </div>
        </div>
    )
}
