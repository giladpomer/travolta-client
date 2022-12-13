import { Destination } from './destination';

export interface SearchParameters {
    destination: Destination,
    checkInDate: Date,
    checkOutDate: Date,
    adultsAmount: number
}