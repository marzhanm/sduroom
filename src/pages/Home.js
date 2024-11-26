import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from "./profile";

const Home = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/profile" element={Profile} />
                </Routes>
            </div>
        </Router>
    )
}

export default Home;