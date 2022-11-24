import React from "react";

import styles from "./Navigation.module.scss";
import logo from "../../img/logo.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Container>
            <Navbar collapseOnSelect expand="md" className="pt-2 pt-md-4">
                <Navbar.Brand href="/" className={styles.nav__focus}>
                    <img src={logo} alt="Shortly logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className={styles.nav__toggle}
                />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className={styles.nav__mobile}
                >
                    <Nav className={styles.nav__link}>
                        <Nav.Link
                            href="#features"
                            className={styles.nav__focus}
                        >
                            Features
                        </Nav.Link>
                        <Nav.Link href="#pricing" className={styles.nav__focus}>
                            Pricing
                        </Nav.Link>
                        <Nav.Link
                            href="#resource"
                            className={styles.nav__focus}
                        >
                            Resources
                        </Nav.Link>
                    </Nav>
                    <Nav className={`${styles.nav__link} ms-auto`}>
                        <Nav.Link
                            className={`${styles.nav__login} ${styles.nav__focus}`}
                            to="/login"
                            style={{ textDecoration: "none" }}
                        >
                            Log in
                        </Nav.Link>
                        <Link
                            to="/signup"
                            style={{ textDecoration: "none" }}
                            className={styles.nav__btn}
                        >
                            Sign up
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;
