import React from 'react'

import { connect } from 'react-redux';
const SelectTechnician = (props) => {
    const techs = ['BACK END', 'FRONT END', 'DEVOPS', 'SECURITY']
    return (

        techs.map((t, key) => (
            <option key={key} value={t}>
                {t}
            </option>
        ))
    );
};


export default connect(null, null)(SelectTechnician);
