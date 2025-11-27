import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { versesData } from '../data/verses';

const MoodPage: React.FC = () => {
    const { moodName } = useParams<{ moodName: string }>();
    const [verseIndex, setVerseIndex] = useState(0);

    const moodData = versesData.find(m => m.mood === moodName);

    if (!moodData) {
        return <Navigate to="/" replace />;
    }

    const currentVerse = moodData.verses[verseIndex];

    const handleNextVerse = () => {
        setVerseIndex((prevIndex) => (prevIndex + 1) % moodData.verses.length);
    };

    return (
        <Layout>
            <div className="relative min-h-[calc(100vh-4rem-5rem)] flex items-center justify-center p-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`/images/${currentVerse.imageName}`}
                        alt={moodData.mood}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1507692049790-de58293a4697?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 max-w-3xl w-full text-center text-white px-4">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-8 transition-colors">
                        &larr; Back to Moods
                    </Link>

                    <div className="mb-12">
                        <h2 className="text-5xl md:text-6xl font-serif font-medium leading-tight mb-6 drop-shadow-lg">
                            "{currentVerse.text}"
                        </h2>
                        <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">
                            {currentVerse.reference}
                        </p>
                        <span className="inline-block mt-2 text-xs uppercase tracking-widest opacity-60 border border-white/30 px-2 py-1 rounded">
                            {currentVerse.translation}
                        </span>
                    </div>

                    <button
                        onClick={handleNextVerse}
                        className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <span>Next Verse</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default MoodPage;
