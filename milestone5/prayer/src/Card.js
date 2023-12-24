import React from 'react';

const Card = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.prayerId);
        props.onClick(props.prayerId, uri);
    }

    const handleDeleteClick = (event, uri) => {
        console.log(props);
        console.log('ID clicked is ' + props.prayerId);
        props.onDelete(props.prayerId);

    }
    
    return (
        <div className='card' style={{width: '18rem'}}>
            <div className='card-body'>
                <h5 className='card-title'>{ props.prayerName }</h5>
                <p className='card-text'>
                   Anonymous: {props.prayerAnonymous}
                </p>
                <p className='card-text'>
                    {props.prayerRequest}
                </p>
                <button className="btn btn-primary" onClick={() => handleButtonClick(props.prayerId, '/show/')}>{props.buttonText}</button>
                <button className="btn btn-primary" onClick={() => handleButtonClick(props.prayerId, '/edit/')}>Edit</button>
                <button className="btn btn-primary" onClick={() => handleDeleteClick(props.prayerId)}>Delete</button>
            </div>
        </div>
    );
}

export default Card;
