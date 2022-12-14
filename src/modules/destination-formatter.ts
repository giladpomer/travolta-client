import { Location } from '../types/location';

const SEPARATOR = ', ';

export function destinationAsString(destination: Location): string {
    return destination.city + SEPARATOR + destination.country;
}

export function stringAsDestination(destination: string): Location {
    const data = destination.split(SEPARATOR);

    return {
        city: data[0],
        country: data[1]
    };
}