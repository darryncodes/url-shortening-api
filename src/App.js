import React from "react";
import Navigation from "./components/Navigation/Navigation";

import Container from "react-bootstrap/Container";

function App() {
    return (
        <>
            <Container>
                <Navigation />
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
            </Container>
        </>
    );
}

export default App;
