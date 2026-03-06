import React, { useState } from 'react';
import { useGeolocation } from './hooks/useGeolocation';
import Counter from './components/Counter';
import MotivesViewer from './components/MotivesViewer';
import FinalMotive from './components/FinalMotive';

function App() {
    const { currentDistanceMeters: distance, isUnlocked, error } = useGeolocation();
    const [isViewingFinal, setIsViewingFinal] = useState(false);
    const [isBypassed, setIsBypassed] = useState(false);

    const hasUnlocked = isUnlocked || isBypassed;

    return (
        <div className="min-h-screen w-full bg-purple-50 flex flex-col items-center justify-center overflow-hidden font-sans">
            {!hasUnlocked ? (
                <Counter
                    distance={distance}
                    error={error}
                    onBypass={() => setIsBypassed(true)}
                />
            ) : !isViewingFinal ? (
                <MotivesViewer onComplete={() => setIsViewingFinal(true)} />
            ) : (
                <FinalMotive />
            )}
        </div>
    );
}

export default App;
