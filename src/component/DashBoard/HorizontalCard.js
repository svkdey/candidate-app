import React from 'react'

export default function HorizontalCard(props) {
    const { candidateDetails } = props;
    return (
        <div className="card card-margin">

            <div className="card-content">
                <div className="row">
                    <div className="col s4"><span className="dark">#Application ID :</span>
                        <span className="dark2">{" "}{candidateDetails.id}</span>
                    </div>
                    <div className="col s4"><span className="dark"> </span>

                    </div>
                    <div className="col s4"><span className="dark">  Applied On :</span>
                        <span className="dark2">{" "}{candidateDetails.date}</span>
                    </div>

                </div>
                <div className="row">
                    <div className="col s4"><span className="dark">    Name :</span>
                        <span className="dark2">{" "}{candidateDetails.name} {" "}{candidateDetails.surname}</span>
                    </div>
                    <div className="col s4">

                    </div>
                    <div className="col s4"><span className="dark">  Role :</span>
                        <span className="dark2">{" "}{candidateDetails.role}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4"><span className="dark">     Technology :</span>
                        <span className="dark2">{" "}{candidateDetails.technology} ENGINEER</span>
                    </div>

                </div>
                <div className="row">
                    <div className="col s4"><span className="dark">   Contact :</span>
                        <span className="dark2">{" "}{candidateDetails.contact}</span>
                    </div>
                    <div className="col s4"><span className="dark">            Email :</span>
                        <span className="dark2">{" "}{candidateDetails.email}</span>
                    </div>
                    <div className="col s4">
                        <span className="dark">  Application Status :</span>
                        <span className={`dark2 ${candidateDetails.status}`}>{" "}{candidateDetails.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
