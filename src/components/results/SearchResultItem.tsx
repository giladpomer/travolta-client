import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

//types
import { HotelSearchResult } from '../../types/hotel-search-result';

interface SearchResultItemProps {
    data: HotelSearchResult
}

export default function SearchResultItem({ data }: SearchResultItemProps) {
    return (
        <Card className="search-result-item">
            <Card.Img variant="top" src={data.hotelInfo.photo_url} />
            <Card.Body>
                <Card.Title>{data.hotelInfo.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {data.hotelInfo.location.city + ', ' + data.hotelInfo.location.country}
                </Card.Subtitle>
                <Card.Text>
                    <Badge bg={data.is_available ? 'success' : 'danger'}>
                        {data.is_available ? 'Available' : 'Unavailable'}
                    </Badge>
                    <p>
                        Price of the stay: {data.price_of_stay.toLocaleString()} &euro;
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
