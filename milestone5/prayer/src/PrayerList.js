import React from 'react';
import Card from './Card.js';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource.js';

const PrayerList = (props) => {

    const handleSelectionOne = (prayerId, uri) => {
        console.log('Selected ID is ' + prayerId);
        props.onClick(prayerId, navigator, uri);
    };

    const handleDeletePrayer = async (prayerId) => {
        console.log('Selected delete ID is ', prayerId);
        try {
            let response = await dataSource.delete('/prayers/' + prayerId);
            console.log(response);
            console.log(response.data);
            window.location.reload(false);
        } catch (error) {
            console.error('Error deleting prayer:', error);
        }
    }

    console.log('props prayerList', props);
    const navigator = useNavigate();
    const prayers = props.prayerList.map((prayer) => {
        return (
            <Card
                key={prayer.prayerId}
                prayerId={prayer.prayerId}
                prayerName={prayer.name}
                prayerRequest={prayer.prayerRequest}
                buttonText='OK'
                prayerAnonymous={prayer.anonymous}
                onClick={handleSelectionOne}
                onDelete={handleDeletePrayer}
            />
        );
    });
    return <div className='container'>{prayers}</div>
};

export default PrayerList;