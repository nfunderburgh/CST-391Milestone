import React from 'react';
import Card from './Card.js';
import { useNavigate } from 'react-router-dom';

const PrayerList = (props) => {

    const handleSelectionOne = (prayerId) => {
        console.log('Selected ID is ' + prayerId);
        props.onClick(prayerId, navigator);
    };


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
            />
        );
    });
    return <div className='container'>{prayers}</div>
};

export default PrayerList;