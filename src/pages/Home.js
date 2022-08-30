import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const data = useSelector(state => state)
    console.log(data);
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Home;