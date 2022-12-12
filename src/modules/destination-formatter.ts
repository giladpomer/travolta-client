import { Destination } from '../types/destination';

export function destinationAsString(destination: Destination): string {
    return destination.city + ', ' + destination.country;
}