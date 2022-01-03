import React from 'react';
import { Outlet } from "react-router-dom";
import { Container, Row, Col, Nav, Stack } from 'react-bootstrap';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <>
            <section>
                <Container className="min-height">
                    <Row>
                        <Col md={3} className="p-3 bg-green min-height">
                            <Nav className="me-auto">
                                <Stack gap={2} className="col-md-5 px-4 mt-5">
                                    <Nav.Link href="manageProducts" className="text-white border-bottom">Manage Products</Nav.Link>
                                    <Nav.Link href="addProduct" className="text-white border-bottom">Add product</Nav.Link>
                                    <Nav.Link href="users" className="text-white border-bottom">Manage Users</Nav.Link>
                                </Stack>
                            </Nav>
                        </Col>

                        <Col md={9}>
                            <h2 className="text-uppercase border-bottom">Bazar now</h2>
                            <Outlet />
                        </Col>

                    </Row>

                </Container>
            </section>
        </>
    );
};

export default Dashboard;