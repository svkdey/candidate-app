import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApplcations } from '../../actions/applicationAction'
import Preloader from '../layout/Preloader'

import Left from './Left';
import Right from './Right';
class DashBaord extends Component {
    componentDidMount() {
        this.props.dispatch(getApplcations());
    }
    render() {
        const { applications, loading } = this.props;
        const list = applications.candidatelist !== undefined ? applications.candidatelist : [];
        console.log(list);
        var sde1Count = 0; var sde2Count = 0;
        var sde3Count = 0;
        var sde4Count = 0;
        var backendCount = 0;
        var frontendCount = 0;
        var devopsCount = 0;
        var securityCount = 0;
        var appliedCount = 0;
        var inprogressCount = 0;
        var completeCount = 0;
        if (list.length > 0) {
            list.forEach(item => {
                if (item.technology === 'BACK END') {
                    backendCount++;
                }
                if (item.technology === 'FRONT END') {
                    frontendCount++;
                }
                if (item.technology === 'DEVOPS') {
                    devopsCount++;
                }
                if (item.technology === 'SECURITY') {
                    securityCount++;
                }
                if (item.status === 'APPLIED') {
                    appliedCount++;
                }
                if (item.status === 'IN PROGRESS') {
                    inprogressCount++;
                }
                if (item.status === 'COMPLETE') {
                    completeCount++;
                }
                if (item.role === 'SDE 1') {
                    sde1Count++;
                }
                if (item.role === 'SDE 2') {
                    sde2Count++;
                }
                if (item.role === 'SDE 3') {
                    sde3Count++;
                }
                if (item.role === 'SDE 4') {
                    sde4Count++;
                }

            })
        }
        if (loading || applications.length === 0) {
            return <Preloader />
        }
        else return (
            <div>


                <div className="wrapper-container">
                    <Left sde1Count={sde1Count} sde2Count={sde2Count} sde3Count={sde3Count} sde4Count={sde4Count} securityCount={securityCount} backendCount={backendCount} frontendCount={frontendCount} devopsCount={devopsCount} appliedCount={appliedCount} inprogressCount={inprogressCount} completeCount={completeCount} />
                    <Right candidatelist={list} />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        applications: state.applications.applications,
        loading: state.applications.loading
    }
}
export default connect(mapStateToProps,)(DashBaord)