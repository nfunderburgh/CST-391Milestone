import React from 'react';

const Card = (props) => {

    
    return (
        <div className='card' style={{width: '18rem'}}>
            <div className='card-body'>
                <h5 className='card-title'>{ props.prayerName }</h5>
                <p className='card-text'>
                    {props.prayerAnonymous}
                </p>
                <p className='card-text'>
                    {props.prayerRequest}
                </p>
                <button href='#' className='btn btn-primary'>
                    {props.buttonText}    
                </button>
            </div>
        </div>
    );
}

export default Card;
