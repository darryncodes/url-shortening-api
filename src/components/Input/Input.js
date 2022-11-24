import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import styles from "./Input.module.scss";

function Input(props) {
    const [shortLink, setShortLink] = useState("");
    const [input, setInput] = useState("");
    const [timer, setTimer] = useState("");

    function handleInput(e) {
        setInput(e.target.value);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://api.shrtco.de/v2/shorten?url=${input}`
                );
                const data = await response.json();
                setShortLink(data.result.full_short_link);
            } catch (err) {}
        };

        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            if (input.length) {
                getData();
            }
        }, 500);
        setTimer(newTimer);
        // eslint-disable-next-line
    }, [input]);

    function handleSubmit(e) {
        e.preventDefault();

        if (input.trim().length === 0) {
            return;
        }

        props.input(input, shortLink);
        setInput("");
    }

    return (
        <div className={styles["link-shortener"]}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="shorten" className="sr-only">
                    Shorten a link here
                </label>
                <input
                    type="text"
                    id="shorten"
                    placeholder="Shorten a link here..."
                    value={input}
                    onChange={handleInput}
                />
                <Button variant="success" className={styles.btn} type="submit">
                    Shorten it!
                </Button>
            </form>
        </div>
    );
}

export default Input;
