import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../contexts/AuthContext";

import { Link, useNavigate } from "react-router-dom";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard");
        } catch {
            setError("Failed to log in");
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
                        <h2 className="text-center">Log in</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
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
                        <Form.Group id="password">
                            <Form.Label className="mt-2">Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className="w-100 mt-4 mb-2"
                            variant="success"
                            type="submit"
                        >
                            Log in
                        </Button>
                    </Form>
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

export default Login;
