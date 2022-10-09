import React from "react";

import styles from "./Navigation.module.scss";
import logo from "../../img/logo.svg";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="md">
            <Navbar.Brand href="/">
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
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#resource">Resources</Nav.Link>
                </Nav>
                <Nav className={`${styles.nav__link} ms-auto`}>
                    <Nav.Link className={styles.nav__login} href="#login">
                        Login
                    </Nav.Link>
                    <Button className={styles.nav__btn} variant="success">
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                            Sign up
                        </Link>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
