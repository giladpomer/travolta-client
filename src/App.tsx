import React from 'react';
import './App.css';

//ui components
import MainTitle from './components/ui/MainTitle';
import SearchBar from './components/ui/search/SearchBar';

function App() {
    return (
        <div className="App">
            <MainTitle />
            <SearchBar />
        </div>
    );
}

export default App;
