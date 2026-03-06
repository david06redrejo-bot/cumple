import React, { useState } from 'react';
import useGeolocation from './hooks/useGeolocation';
import Counter from './components/Counter';
import MotivesViewer from './components/MotivesViewer';
import FinalMotive from './components/FinalMotive';

function App() {
    const { distance, isUnlocked, error } = useGeolocation();
    const [isViewingFinal, setIsViewingFinal] = useState(false);

    return (
        <div className="min-h-screen w-full bg-purple-50 flex flex-col items-center justify-center overflow-hidden font-sans">
            {!isUnlocked ? (
                <Counter distance={distance} error={error} />
            ) : !isViewingFinal ? (
                <MotivesViewer onComplete={() => setIsViewingFinal(true)} />
            ) : (
                <FinalMotive />
            )}
        </div>
    );
}

export default App;
