import React from "react";

import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import Body from "../Body/Body";
import Links from "../Links/Links";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <Body />
            <Links />
            <Footer />
        </>
    );
}

export default Home;
