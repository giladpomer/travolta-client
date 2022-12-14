import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

//types
import { Location } from '../../types/location';
import { SearchParameters } from '../../types/search-parameters';

//modules
import { destinationAsString, stringAsDestination } from '../../modules/destination-formatter';
import { getFutureDate } from '../../modules/date-utils';
import { formatDateAsInputValue } from '../../modules/date-formatter';

interface SearchBarProps {
    destinations: Location[],
    search: (searchParameters: SearchParameters) => void,
    isSearchClickedOnce: boolean
}

export default function SearchBar({ destinations, search, isSearchClickedOnce }: SearchBarProps) {
    const [_isDateInvalidNoteVisible, setIsDateInvalidNoteVisible] = React.useState<boolean>(false);

    const _destinationRef = React.useRef<HTMLSelectElement | null>(null);
    const _checkInDateRef = React.useRef<HTMLInputElement | null>(null);
    const _checkOutDateRef = React.useRef<HTMLInputElement | null>(null);
    const _adultsAmountRef = React.useRef<HTMLInputElement | null>(null);

    function onSearchClicked() {
        const isCheckoutDateInvalid: boolean = !isCheckInDateBeforeCheckOutDate();
        setIsDateInvalidNoteVisible(isCheckoutDateInvalid);

        if (isCheckoutDateInvalid) {
            return;
        }

        search({
            destination: stringAsDestination(_destinationRef.current?.value ?? ''),
            timeframe: {
                from: new Date(_checkInDateRef.current?.value ?? ''),
                until: new Date(_checkOutDateRef.current?.value ?? ''),
            },
            adultsAmount: parseInt(_adultsAmountRef.current?.value ?? '0')
        });
    }

    function isCheckInDateBeforeCheckOutDate(): boolean {
        return new Date(_checkInDateRef.current?.value ?? '') < new Date(_checkOutDateRef.current?.value ?? '');
    }

    return (
        <Container className="search-bar">
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

                    <Overlay target={_checkOutDateRef.current} show={_isDateInvalidNoteVisible} placement="bottom">
                        {(props) => (
                            <Tooltip {...props}>
                                Check out date can't be earlier than (or same as) check in date
                            </Tooltip>
                        )}
                    </Overlay>
                </Col>
                <Col lg={2}>
                    <InputGroup>
                        <Form.Control type="number" defaultValue="2" ref={_adultsAmountRef} />
                        <InputGroup.Text>Adults</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col lg={2} className="d-grid">
                    <Button variant="primary" onClick={onSearchClicked}>
                        {isSearchClickedOnce ? 'Update Search' : 'Search'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}