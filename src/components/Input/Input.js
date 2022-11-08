import React from "react";

import Button from "react-bootstrap/Button";

import styles from "./Input.module.scss";

function Input() {
    return (
        <form>
            <label htmlFor="shorten" className="sr-only">
                Shorten a link here
            </label>
            <input
                type="text"
                id="shorten"
                placeholder="Shorten a link here..."
            />
            <Button variant="success" className={styles.btn}>
                Shorten it!
            </Button>
        </form>
    );
}

export default Input;
