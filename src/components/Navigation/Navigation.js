import React from "react";

import styles from "./Navigation.module.scss";
import logo from "../../img/logo.svg";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="md">
            <Navbar.Brand href="#home">
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
                    <Nav.Link href="#pricing">Resources</Nav.Link>
                </Nav>
                <Nav className={`${styles.nav__link} ms-auto`}>
                    <Nav.Link className={styles.nav__login} href="#login">
                        Login
                    </Nav.Link>
                    <Button className={styles.nav__btn} variant="success">
                        Sign up
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;