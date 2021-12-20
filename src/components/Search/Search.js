import React from 'react';
import { Stack, Row, Col, Form, Button } from 'react-bootstrap';
const Search = () => {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col md="3">
                    <Form>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Group className="mt-3" controlId="formBasic">
                                <Form.Control type="text" placeholder="Search" />
                            </Form.Group>

                            <Button className="mt-3" variant="success" type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>



        </>
    );
};

export default Search;