import React from 'react'

import { connect } from 'react-redux';
const SearchBox = (props) => {

    return (
        <nav className="blue">
            <div className="nav-wrapper container header">
                Candidate Portal
            </div>
        </nav>
    )
}

export default connect(null, null)(SearchBox)
