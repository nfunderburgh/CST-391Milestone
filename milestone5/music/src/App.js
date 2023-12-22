import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPrayer from "./SearchPrayer.js";
import NavBar from "./NavBar.js";
import NewPrayer from "./NewPrayer.js";
import OnePrayer from "./OnePrayer.js";
import './App.css';
import dataSource from "./dataSource.js";


const App = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [prayerList, setPrayerList] = useState([]);
    const [currentlySelectedPrayerId, setCurrentlySelectedPrayerId] = useState(0);

    let refresh = false;

    const loadPrayers = async () => {
        const response = await dataSource.get('/prayers');
        setPrayerList(response.data);
    }

    useEffect(() => {
        loadPrayers();
    }, [refresh]);

    const updateSearchResults = (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);
    };

    const updateSinglePrayer = (id, navigate) => {
        console.log('Update Single prayer = ', id);
        console.log('Update Single prayer = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < prayerList.length; ++i) {
            if (prayerList[i].id === id) indexNumber = i;
        }
        setCurrentlySelectedPrayerId(indexNumber);
        console.log('update path', '/show/' + indexNumber);
        navigate('/show/' + indexNumber);
    };

    console.log('prayerList', prayerList);
    const renderedList = prayerList.filter((prayer) => {
        if (
            prayer.name.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === ''
        ) {
            return true;
        }
        return false;
    });
    console.log('renderedList', renderedList)

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchPrayer
                            updateSearchResults={updateSearchResults}
                            prayerList={renderedList}
                            updateSinglePrayer={updateSinglePrayer}
                        />
                    }
                />
                <Route exact path='/new' element={<NewPrayer />} />
                <Route
                    exact
                    path='/show/:prayerId'
                    element={<OnePrayer prayer={prayerList[currentlySelectedPrayerId]} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;