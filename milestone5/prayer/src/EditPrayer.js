import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource.js';

const EditPrayer = (props) => {

    let prayer = {
        name: '',
        anonymous: Boolean,
        prayerRequest:'',

    };
    let NewPrayerCreation = true;
    if (props.prayer) {
        prayer = props.prayer;
        NewPrayerCreation = false;
    }

    const [name, setPrayerName] = useState('');
    const [anonymous, setAnonymous] = useState("");
    const [prayerRequest, setprayerRequest] = useState('');
    const navigate = useNavigate();

    const updateName = (event) => {
        setPrayerName(event.target.value);
    }
    const updateAnonymous = (event) => {
        let isAnonymous = false;
        if (document.getElementById('prayerAnonymous').checked){
            isAnonymous = true;
        }
        else{
            isAnonymous = false;
        }
        console.log(isAnonymous);
        setAnonymous(isAnonymous);
    }
    const updateprayerRequest = (event) => {
        setprayerRequest(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedPrayer = {
            prayerId: prayer.prayerId,
            name: name,
            anonymous: anonymous,
            prayerRequest: prayerRequest,
        };
        console.log(editedPrayer);
        savePrayer(editedPrayer);
    };

    const savePrayer = async (prayer) => {
        console.log('prayer is   ', prayer);
        let response;
        console.log('true ', NewPrayerCreation);
        if (NewPrayerCreation === true)
            response = await dataSource.post('/prayers', prayer);
        else
            response = await dataSource.put('/prayers', prayer);


        console.log(response);
        console.log(response.data);
        props.onEditPrayer(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    }



    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>{NewPrayerCreation ? "Create New" : "Edit"} Prayer</h1>
                <div className="form-group">
                    <label htmlFor="prayerName">Name</label>
                    <input type="text" className="form-control" id="prayerName" placeholder="Enter prayer Name" onChange={updateName} />

                    <div>
                        <label for="prayerAnonymous">Anonymous</label>
                        <br/>
                        <input type="checkbox" id="prayerAnonymous" onChange={updateAnonymous} />
                    </div>

                    <label htmlFor="prayerRequest">Prayer Request</label>
                    <input type="text" className="form-control" id="prayerRequest" placeholder="Enter prayer Request" onChange={updateprayerRequest} />
                </div>
                <br/>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}> Cancel </button>
                    <button type="submit" className="btn btn-primary"> Submit </button>
                </div>
            </form>
        </div>
    );
};

export default EditPrayer;