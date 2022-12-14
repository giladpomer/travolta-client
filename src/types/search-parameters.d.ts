import { Location } from './location';

export interface SearchParameters {
    destination: Location,
    checkInDate: Date,
    checkOutDate: Date,
    adultsAmount: number
}