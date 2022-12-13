import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

//types
import { Destination } from '../../types/destination';
import { SearchParameters } from '../../types/search-parameters';

//modules
import { destinationAsString, stringAsDestination } from '../../modules/destination-formatter';
import { getFutureDate } from '../../modules/date-utils';
import { formatDateAsInputValue } from '../../modules/date-formatter';

interface SearchBarProps {
    destinations: Destination[],
    onSearchClicked: (searchParameters: SearchParameters) => void,
    isSearchClickedOnce: boolean
}

export default function SearchBar({ destinations, onSearchClicked, isSearchClickedOnce }: SearchBarProps) {
    const _destinationRef = React.useRef<HTMLSelectElement | null>(null);
    const _checkInDateRef = React.useRef<HTMLInputElement | null>(null);
    const _checkOutDateRef = React.useRef<HTMLInputElement | null>(null);
    const _adultsAmountRef = React.useRef<HTMLInputElement | null>(null);

    function search() {
        onSearchClicked({
            destination: stringAsDestination(_destinationRef.current?.value ?? ''),
            checkInDate: new Date(_checkInDateRef.current?.value ?? ''),
            checkOutDate: new Date(_checkOutDateRef.current?.value ?? ''),
            adultsAmount: parseInt(_adultsAmountRef.current?.value ?? '0')
        });
    }

    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Form.Select ref={_destinationRef}>
                        <option disabled>What is your desdination?</option>
                        {
                            destinations.map(destination => <option
                                key={destinationAsString(destination)}
                                value={destinationAsString(destination)}>
                                {destinationAsString(destination)}
                            </option>)
                        }
                    </Form.Select>
                </Col>
                <Col lg={2}>
                    <Form.Control
                        type="date"
                        placeholder="Check In"
                        defaultValue={formatDateAsInputValue(getFutureDate(7))}
                        ref={_checkInDateRef}
                    />
                </Col>
                <Col lg={2}>
                    <Form.Control
                        type="date"
                        placeholder="Check Out"
                        defaultValue={formatDateAsInputValue(getFutureDate(7 + 7))}
                        ref={_checkOutDateRef}
                    />
                </Col>
                <Col lg={2}>
                    <InputGroup>
                        <Form.Control type="number" defaultValue="2" ref={_adultsAmountRef} />
                        <InputGroup.Text>Adults</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col lg={2} className="d-grid">
                    <Button variant="primary" onClick={search}>
                        {isSearchClickedOnce ? 'Update Search' : 'Search'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}