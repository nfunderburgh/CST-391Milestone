import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPrayer from "./SearchPrayer.js";
import NavBar from "./NavBar.js";
import EditPrayer from "./EditPrayer.js";
import OnePrayer from "./OnePrayer.js";
import './App.css';
import dataSource from "./dataSource.js";
import PrayerList from "./PrayerList.js";


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

    const updateSinglePrayer = (prayerId, navigate, uri) => {
        console.log('Update Single prayer = ', prayerId);
        console.log('Update Single prayer = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < prayerList.length; ++i) {
            if (prayerList[i].prayerId === prayerId) indexNumber = i;
        }
        setCurrentlySelectedPrayerId(indexNumber);
        let path = uri + prayerId;
        console.log('path =' + path);
        navigate(path);
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

    const onEditPrayer = (navigate) => {
        loadPrayers();
        navigate("/");
    }


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
                <Route exact path='/new' element={<EditPrayer onEditPrayer={onEditPrayer} />} />
                <Route exact path='/edit/:prayerId' element={<EditPrayer onEditPrayer={onEditPrayer} prayer={prayerList[currentlySelectedPrayerId]}/>} />
                <Route
                    exact
                    path='/show/:prayerId'
                    element={<OnePrayer prayer={prayerList[currentlySelectedPrayerId]} />}
                />
                 <Route
                    exact
                    path='/'
                    element={
                        <PrayerList
                            prayerList={prayerList}
                            setPrayerList={setPrayerList}
                            onClick={updateSinglePrayer} /> }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;