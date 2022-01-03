import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';

const Login = () => {
    return (
        <Container>
            <Row className="m-5 justify-content-center">
                <Col md={5}>
                    <Form className="m-3 form-div">
                        <Form.Label>Login</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="shadow-none" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted p-3">
                                **We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control className="shadow-none" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Login;