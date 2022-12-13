import React from 'react';
import axios from 'axios';

import './App.css';

//types
import { Destination } from './types/destination';
import { SearchParameters } from './types/search-parameters';

//components
import MainTitle from './components/MainTitle';
import SearchBar from './components/search/SearchBar';

//modules
import { getServerUrl } from './modules/server-url';

function App() {
    const [_destinations, setDestinations] = React.useState<Destination[]>([]);

    React.useEffect(() => {
        axios.get(getServerUrl() + '/destinations')
            .then(response => {
                setDestinations(response.data);
                console.log(response.data);
            });
    }, []);

    function onSearchClicked(searchParameters: SearchParameters) {
        console.log(searchParameters);
    }

    return (
        <div className="App">
            <MainTitle />
            <SearchBar destinations={_destinations} onSearchClicked={onSearchClicked} />
        </div>
    );
}

export default App;
