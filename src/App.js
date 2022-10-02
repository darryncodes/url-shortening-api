import React from "react";
import Navigation from "./components/Navigation/Navigation";

import Container from "react-bootstrap/Container";

function App() {
    return (
        <>
            <Container>
                <Navigation />
                <h1>Homepage</h1>
            </Container>
        </>
    );
}

export default App;
