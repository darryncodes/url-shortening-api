import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { useAuth } from "../../contexts/AuthContext";

import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogOut() {
        setError("");

        try {
            await logout();
            navigate("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="primary">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link
                        to="/update-profile"
                        className="btn btn-success mt-3 w-100"
                    >
                        Update profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>
                    Log out
                </Button>
            </div>
        </Container>
    );
}

export default Dashboard;
