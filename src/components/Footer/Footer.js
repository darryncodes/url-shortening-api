import React from 'react';

import logo from './../../img/logo-footer.svg';
import styles from './Footer.module.scss';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className="d-flex flex-column align-items-center flex-md-row align-items-md-start justify-content-md-end">
                <div className={styles.footer__img}>
                    <img src={logo} alt="" />
                </div>
                <Col>
                    <h3 className={styles.footer__heading}>Features</h3>
                    <ul>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out more about our link shortening feature"
                            >
                                Link shortening
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out more about our branded links feature"
                            >
                                Branded links
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out more about our analytics feature"
                            >
                                Analytics
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h3 className={styles.footer__heading}>Resources</h3>
                    <ul>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Read our blog"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Resources for developers"
                            >
                                Developers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out more about our support"
                            >
                                Support
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h3 className={styles.footer__heading}>Company</h3>
                    <ul>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out about us"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out more about our team"
                            >
                                Our team
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out more about a career at Shortly"
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#"
                                className={styles.footer__link}
                                aria-label="Find out how to contact us"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul className="d-flex">
                        <li>
                            <a href="/#" aria-label="Follow us on Facebook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/#" aria-label="Follow us on Twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/#" aria-label="Follow us on Pinterest">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    width="24"
                                    height="24"
                                    className={styles.footer__icon}
                                >
                                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/#" aria-label="Follow us on Instagram">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                    ></line>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Container>
        </footer>
    );
}

export default Footer;
