import React from "react";

import Button from "react-bootstrap/Button";

import styles from "./Links.module.scss";

function Links() {
    return (
        <section className={styles.links}>
            <h2 className={styles.links__heading}>Boost your links today</h2>
            <Button variant="success" className="mt-2">
                Get started
            </Button>
        </section>
    );
}

export default Links;
