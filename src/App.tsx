import React from 'react';
import axios from 'axios';

import './App.css';

//types
import { Location } from './types/location';
import { SearchParameters } from './types/search-parameters';
import { HotelSearchResult } from './types/hotel-search-result';

//components
import MainTitle from './components/MainTitle';
import SearchBar from './components/search/SearchBar';
import SearchResults from './components/results/SearchResults';

//modules
import { getServerUrl } from './modules/server-url';

function App() {
    const [_isSearchClickedOnce, setIsSearchClickedOnce] = React.useState<boolean>(false);

    const [_destinations, setDestinations] = React.useState<Location[]>([]);
    const [_searchResults, setSearchResults] = React.useState<HotelSearchResult[]>([]);

    React.useEffect(() => {
        axios.get(getServerUrl() + '/destinations')
            .then(response => {
                setDestinations(response.data);
            });
    }, []);

    function search(searchParameters: SearchParameters) {
        setIsSearchClickedOnce(true);

        axios.post(getServerUrl() + '/search', searchParameters)
            .then(response => {
                setSearchResults(response.data);
            });
    }

    return (
        <div className="App">
            {!_isSearchClickedOnce &&
                <MainTitle />
            }
            <SearchBar
                destinations={_destinations}
                search={search}
                isSearchClickedOnce={_isSearchClickedOnce} />
            {_isSearchClickedOnce &&
                <SearchResults searchResults={_searchResults} />
            }
        </div>
    );
}

export default App;
