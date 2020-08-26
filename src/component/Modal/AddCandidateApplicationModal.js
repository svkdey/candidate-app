import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import { addApplication } from '../../actions/applicationAction';
import SelectTechnogy from './SelectTechnology';
import SelectRole from './SelectRole';

const AddCandidateApplicationModal = (props) => {


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState('APPLIED');
    const [role, setRole] = useState('');
    // const [date, setDate] = useState('');
    const [technology, setTechnology] = useState("");

    const onSubmitForm = () => {
        if (name === '' || surname === '' || role === '' || technology === '' || contact === '' || email === '' || status === '') {
            M.toast({ html: 'Please fill all the data' });
        } else {
            const id = uuidv4();
            const date = new Date();
            const formData = { id, name, surname, contact, email, role, status, technology, date };
            props.dispatch(addApplication(formData));
            M.toast({ html: `Application ${id} is submitted successfully ! It will be reflected soon` })




            // console.log(message, tech, attention)
            setName('');
            setSurname('');
            setRole('');
            setStatus('');
            setTechnology('');
            setEmail('');
            setContact('');

        }

    }

    return (

        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4> Add Candidate Details</h4>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
                        <label htmlFor="name" className="active"> Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" name="surname" value={surname} onChange={e => setSurname(e.target.value)} required />
                        <label htmlFor="surname" className="active"> Surname</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        <label htmlFor="email" className="active"> Email Address</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" name="contact" value={contact} onChange={e => setContact(e.target.value)} required maxLength={10} />
                        <label htmlFor="contact" className="active"> Contact Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select className="browser-default" name="technology" value={technology} required onChange={e => setTechnology(e.target.value)} >
                            <option value="" disabled>Select Technician</option>
                            <SelectTechnogy />
                        </select>

                    </div>
                    <div className="input-field col s6">
                        <select className="browser-default" name="role" value={role} required onChange={e => setRole(e.target.value)} >
                            <option value="" disabled>Select Position</option>
                            <SelectRole />
                        </select>

                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn"
                    onClick={() => { onSubmitForm() }}
                >Enter</a>
            </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    heigth: '75%'
}
const mapStateToProps = (state) => {

    return {
        applications: state.applications
    }
}

export default connect(mapStateToProps, null)(AddCandidateApplicationModal);
