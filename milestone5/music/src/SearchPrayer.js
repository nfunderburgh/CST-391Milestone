import React from 'react';
import SearchForm from './SearchForm.js';
import PrayerList from './PrayerList.js';

const SearchPrayer= (props) => {
    console.log('props with update single prayer', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults} />
            <PrayerList prayerList={props.prayerList} onClick={props.updateSinglePrayer} />
        </div>
    );
};

export default SearchPrayer;