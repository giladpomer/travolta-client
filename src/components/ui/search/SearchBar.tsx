import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function SearchBar() {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Form.Select>
                        <option>What is your desdination?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col lg={2}>
                    <Form.Control type="date" placeholder="Check In" />
                </Col>
                <Col lg={2}>
                    <Form.Control type="date" placeholder="Check Out" />
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