import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Input from "../Input/Input";
import Output from "../Output/Output";

import styles from "./Body.module.scss";

function Body() {
    const [links, setLinks] = useState([]);

    const linkHandler = (originalLink, shortLink) => {
        setLinks((prevState) => {
            return [
                ...prevState,
                {
                    link: originalLink,
                    short: shortLink,
                    id: Math.random().toString(),
                },
            ];
        });
    };

    return (
        <section className={styles.body}>
            <Container className="position-relative">
                <Input input={linkHandler} />
                <Output output={links} />
                <div className={styles.body__header}>
                    <h2>Advanced statistics</h2>
                    <p>
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </p>
                </div>
                <div className={styles.body__cards}>
                    <div
                        className={`${styles.body__card} ${styles["body__card--one"]}`}
                    >
                        <h3>Brand Recognition</h3>
                        <p>
                            Boost your brand recognition with each click.
                            Generic links don’t mean a thing. Branded links help
                            instil confidence in your content.
                        </p>
                    </div>
                    <div
                        className={`${styles.body__card} ${styles["body__card--two"]}`}
                    >
                        <h3>Detailed Records</h3>
                        <p>
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your
                            content helps inform better decisions.
                        </p>
                    </div>
                    <div
                        className={`${styles.body__card} ${styles["body__card--three"]}`}
                    >
                        <h3>Fully Customizable</h3>
                        <p>
                            Improve brand awareness and content discoverability
                            through customizable links, supercharging audience
                            engagement.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Body;
