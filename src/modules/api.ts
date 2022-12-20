import axios from 'axios';

//modules
import { getServerUrl } from './server-url';

//types
import { Location } from '../types/location';
import { SearchParameters } from '../types/search-parameters';
import { HotelSearchResult } from '../types/hotel-search-result';

export async function search(searchParameters: SearchParameters): Promise<HotelSearchResult[]> {
    const response = await axios.post(getServerUrl() + '/search', searchParameters);
    return response.data;
}

export async function getDestinations(): Promise<Location[]> {
    const response = await axios.get(getServerUrl() + '/destinations');
    return response.data;
}