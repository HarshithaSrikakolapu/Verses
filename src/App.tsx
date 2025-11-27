import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoodPage from './pages/MoodPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mood/:moodName" element={<MoodPage />} />
            </Routes>
        </Router>
    );
};

export default App;
