import React from 'react'
// import { HorizontalBar } from 'react-chartjs-2';
import HorizontalCard from './HorizontalCard';

export default function Right(props) {
    const { candidatelist } = props;
    //  console.log(candidatelist);
    const fetchList = () => {
        if (candidatelist.length > 0) {
            return candidatelist.reverse().map((item, key) => {
                return <HorizontalCard candidateDetails={item} key={key} />
            })
        }
        return <div>
            No Data found!
        </div>
    }
    return (
        <div className="main-container-right ">
            <div className="wrapper-right scroller">{fetchList()}</div>

        </div>
    )
}
