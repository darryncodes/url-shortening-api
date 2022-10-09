import React from "react";
// import Navigation from "./Navigation/Navigation";
import Signup from "./Signup/Signup";
import { AuthProvider } from "../contexts/AuthContext";

import Container from "react-bootstrap/Container";

function App() {
    return (
        <AuthProvider>
            <Container>
                {/* <Navigation />
                <h1>Homepage</h1> */}
                <Signup />
            </Container>
        </AuthProvider>
    );
}

export default App;
