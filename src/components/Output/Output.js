import React from "react";
import Button from "react-bootstrap/Button";

import styles from "./Output.module.scss";

function Output() {
    return (
        <div className={styles.output}>
            <p className={styles.output__link}>
                https://www.test/test-link.com
            </p>
            <div className={styles.output__result}>
                <p className={styles["output__shortened-link"]}>
                    https://rel.ink/k41Kyk
                </p>
                <Button variant="success" className={styles.output__btn}>
                    Copy
                </Button>
            </div>
        </div>
    );
}

export default Output;
