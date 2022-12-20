import React from 'react';

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
import * as API from './modules/api';

function App() {
    const [_isSearchClickedOnce, setIsSearchClickedOnce] = React.useState<boolean>(false);

    const [_destinations, setDestinations] = React.useState<Location[]>([]);
    const [_searchResults, setSearchResults] = React.useState<HotelSearchResult[]>([]);

    React.useEffect(() => {
        updateDestinations();
    }, []);

    async function updateDestinations(): Promise<void> {
        const destinations: Location[] = await API.getDestinations();
        setDestinations(destinations);
    }

    async function search(searchParameters: SearchParameters): Promise<void> {
        setIsSearchClickedOnce(true);

        const searchResults: HotelSearchResult[] = await API.search(searchParameters);
        setSearchResults(searchResults);
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
