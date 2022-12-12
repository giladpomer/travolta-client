import React from 'react';
import './App.css';

//components
import MainTitle from './components/MainTitle';
import SearchBar from './components/search/SearchBar';

function App() {
    return (
        <div className="App">
            <MainTitle />
            <SearchBar />
        </div>
    );
}

export default App;
