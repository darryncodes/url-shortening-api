import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import styles from "./Input.module.scss";

function Input(props) {
    const [shortLink, setShortLink] = useState("");
    const [input, setInput] = useState("");
    const [timer, setTimer] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

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

        if (input.length) {
            setMessage("");
            setError(false);
        }

        // eslint-disable-next-line
    }, [input]);

    function isValidUrl(url) {
        let validUrl =
            /(ftp:\/\/|www\.|https?:\/\/){1}[a-zA-Z0-9u00a1-\uffff0-]{2,}\.[a-zA-Z0-9u00a1-\uffff0-]{2,}(\S*)/;
        return validUrl.test(url);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (input.trim().length === 0) {
            setMessage("Please add a link");
            setError(true);
            return;
        }

        if (isValidUrl(input) === false) {
            setMessage("Please enter a valid url");
            setError(true);
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
                    value={input.toLowerCase()}
                    onChange={handleInput}
                    className={error && styles.error}
                />
                {message && <span className={styles.message}>{message}</span>}
                <Button variant="success" className={styles.btn} type="submit">
                    Shorten it!
                </Button>
            </form>
        </div>
    );
}

export default Input;
