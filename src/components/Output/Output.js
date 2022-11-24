import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";

import styles from "./Output.module.scss";

function Output(props) {
    const shortLink = useRef("");
    const [copySuccess, setCopySuccess] = useState("Copy");

    const copyToClipbpard = () => {
        navigator.clipboard.writeText(shortLink.current.innerText);
        setCopySuccess("Copied!");
        setTimeout(() => {
            setCopySuccess("Copy");
        }, 1750);
    };

    return (
        <>
            {props.output.map((links) => (
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
                            onClick={copyToClipbpard}
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
