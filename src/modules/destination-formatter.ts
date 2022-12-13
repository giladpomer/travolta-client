import { Destination } from '../types/destination';

const SEPARATOR = ', ';

export function destinationAsString(destination: Destination): string {
    return destination.city + SEPARATOR + destination.country;
}

export function stringAsDestination(destination: string): Destination {
    const data = destination.split(SEPARATOR);

    return {
        city: data[0],
        country: data[1]
    };
}