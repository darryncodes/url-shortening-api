import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import styles from "./Hero.module.scss";
import heroImage from "../../img/illustration-working.svg";

function Hero() {
    return (
        <Container>
            <header>
                <div>
                    <img src={heroImage} alt="" />
                </div>
                <div className={styles.intro}>
                    <h1>More than just shorter links</h1>
                    <p>
                        Build your brand's recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <Button variant="success" className={styles.focus}>
                        Get started
                    </Button>
                </div>
            </header>
        </Container>
    );
}

export default Hero;
