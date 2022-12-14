//types
import { HotelSearchResult } from '../../types/hotel-search-result';

//components
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
    searchResults: HotelSearchResult[]
}

export default function SearchResults({ searchResults }: SearchResultsProps) {
    return (
        <div>
            {searchResults.map(item => <SearchResultItem
                key={item.hotelInfo.id}
                data={item}
            />)}
        </div>
    );
}
