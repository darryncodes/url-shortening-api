import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";

import styles from "./Output.module.scss";

function Output(props) {
    const shortLink = useRef("");
    const [copySuccess, setCopySuccess] = useState("Copy");
    const [localLinks, setLocalLinks] = useState([]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortLink.current.innerText);
        setCopySuccess("Copied!");
        setTimeout(() => {
            setCopySuccess("Copy");
        }, 1750);
    };

    useEffect(() => {
        const saveToLocalStorage = () => {
            localStorage.setItem("links", JSON.stringify(props.output));
        };
        if (props.output.length !== 0) {
            saveToLocalStorage();
        }
    }, [props.output]);

    useEffect(() => {
        const checkLocalStorage = () => {
            const links = JSON.parse(localStorage.getItem("links"));
            if (links) {
                setLocalLinks(links);
            }
        };
        checkLocalStorage();
    }, []);

    const finalLinks = [...localLinks, ...props.output];

    return (
        <>
            {finalLinks.map((links) => (
                <div className={styles.output} key={links.id}>
                    <p className={styles.output__link}>{links.link}</p>
                    <div className={styles.output__result}>
                        <p
                            className={styles["output__shortened-link"]}
                            ref={shortLink}
                        >
                            {links.short}
                        </p>
                        <Button
                            variant="success"
                            className={styles.output__btn}
                            onClick={copyToClipboard}
                        >
                            {copySuccess}
                        </Button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Output;
