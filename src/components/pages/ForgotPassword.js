import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../contexts/AuthContext";

import { Link } from "react-router-dom";

function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions");
        } catch {
            setError("Failed to reset password");
        }
        setLoading(false);
    }

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div>
                <Card className="px-4" style={{ minWidth: "19rem" }}>
                    <Card.Body>
                        <h2 className="text-center">Password reset</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                    </Card.Body>
                    <Form className="pb-4" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className="mt-2">Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className="w-100 mt-4"
                            variant="success"
                            type="submit"
                        >
                            Reset password
                        </Button>
                    </Form>
                    <p className="w-100 text-center">
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            Log in
                        </Link>
                    </p>
                </Card>
                <p className="w-100 text-center mt-2">
                    Nedd an account?{" "}
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                        Sign up
                    </Link>
                </p>
            </div>
        </Container>
    );
}

export default ForgotPassword;
