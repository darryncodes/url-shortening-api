import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../contexts/AuthContext";

import { Link, useNavigate } from "react-router-dom";

function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        const promises = [];
        setLoading(true);
        setError("");
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises)
            .then(() => {
                navigate("/dashboard");
            })
            .catch(() => {
                setError("Failed to update account");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div>
                <Card className="px-4" style={{ minWidth: "19rem" }}>
                    <Card.Body>
                        <h2 className="text-center">Update profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                    </Card.Body>
                    <Form className="pb-4" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className="mt-2">Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                                defaultValue={currentUser.email}
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className="mt-2">Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                placeholder="Leave blank to keep the same"
                            />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label className="mt-2">
                                Password confirmation
                            </Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordConfirmRef}
                                placeholder="Leave blank to keep the same"
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className="w-100 mt-4 mb-2"
                            variant="success"
                            type="submit"
                        >
                            Update
                        </Button>
                    </Form>
                </Card>
                <p className="w-100 text-center mt-2">
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        Cancel
                    </Link>
                </p>
            </div>
        </Container>
    );
}

export default UpdateProfile;
