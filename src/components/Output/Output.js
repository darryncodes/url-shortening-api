import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';

import styles from './Output.module.scss';

function Output(props) {
    const shortLink = useRef('');
    const [localLinks, setLocalLinks] = useState([]);

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(shortLink.current.innerText);
        e.target.textContent = 'Copied!';
        setTimeout(() => {
            e.target.textContent = 'Copy';
        }, 1750);
    };

    useEffect(() => {
        const saveToLocalStorage = () => {
            localStorage.setItem(
                'links',
                JSON.stringify([...localLinks, ...props.output])
            );
        };
        if (props.output.length !== 0) {
            saveToLocalStorage();
        }
    }, [localLinks, props.output]);

    useEffect(() => {
        const checkLocalStorage = () => {
            const links = JSON.parse(localStorage.getItem('links'));
            if (links) {
                setLocalLinks(links);
            }
        };
        checkLocalStorage();
    }, []);

    const finalLinks = [...localLinks, ...props.output];

    const handleDelete = (e) => {
        e.target.parentElement.parentElement.remove();

        const text = e.target.parentElement.firstChild.textContent;

        const linkIndex = finalLinks.findIndex((x) => x.short === text);

        finalLinks.splice(linkIndex, 1);
        localStorage.setItem('links', JSON.stringify(finalLinks));
    };

    return (
        <>
            {finalLinks.map((links) => (
                <div className={styles.output} key={links.id}>
                    <p className={styles.output__link}>{links.link}</p>
                    <div className={styles.output__result}>
                        <p
                            className={styles['output__shortened-link']}
                            ref={shortLink}
                        >
                            {links.short}
                        </p>
                        <Button
                            variant="success"
                            className={styles.output__btn}
                            onClick={copyToClipboard}
                        >
                            Copy
                        </Button>
                        <Button
                            variant="danger"
                            className={styles.output__btn}
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Output;
