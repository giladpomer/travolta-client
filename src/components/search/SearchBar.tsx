import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { Destination } from '../../types/destination';

import { destinationAsString } from '../../modules/destination-formatter';
import { getFutureDate } from '../../modules/date-utils';
import { formatDateAsInputValue } from '../../modules/date-formatter';

interface SearchBarProps {
    destinations: Destination[]
}

export default function SearchBar({ destinations }: SearchBarProps) {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Form.Select>
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
                    <Form.Control type="date" placeholder="Check In" defaultValue={formatDateAsInputValue(getFutureDate(7))} />
                </Col>
                <Col lg={2}>
                    <Form.Control type="date" placeholder="Check Out" defaultValue={formatDateAsInputValue(getFutureDate(7 + 7))} />
                </Col>
                <Col lg={2}>
                    <InputGroup>
                        <Form.Control type="number" defaultValue="2" />
                        <InputGroup.Text>Adults</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col lg={2} className="d-grid">
                    <Button variant="primary">Search</Button>
                </Col>
            </Row>
        </Container>
    );
}