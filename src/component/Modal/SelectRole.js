import React from 'react'

import { connect } from 'react-redux';
const SelectRole = (props) => {
    const roles = ['SDE 1', 'SDE 2', 'SDE 3', 'SDE 4']
    return (

        roles.map((t, key) => (
            <option key={key} value={t}>
                {t}
            </option>
        ))
    );
};


export default connect(null, null)(SelectRole);
