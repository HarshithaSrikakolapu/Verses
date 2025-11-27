import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { versesData } from '../data/verses';

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        How are you feeling today?
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Select a mood to find comfort, inspiration, and guidance from the Scriptures.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {versesData.map((moodData) => (
                        <Link
                            key={moodData.mood}
                            to={`/mood/${moodData.mood}`}
                            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-center h-48 border border-gray-100"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 text-2xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                                {moodData.mood}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
