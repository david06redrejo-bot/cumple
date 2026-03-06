import React from 'react';

const Counter = ({ distance }) => {
    return (
        <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6 transition-opacity duration-700 fade-in font-inter overflow-hidden relative">
            {/* Decorative Blob Backgrounds */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 w-full max-w-sm">
                <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl shadow-purple-200 border border-white/50 text-center flex flex-col items-center">
                    <div className="w-20 h-20 mb-8 rounded-full bg-purple-100 flex items-center justify-center shadow-inner">
                        <svg className="w-10 h-10 text-purple-600 drop-shadow-sm" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-black text-purple-950 mb-3 font-poppins tracking-tight">Destino Cercano</h1>
                    <p className="text-purple-600/80 mb-10 font-medium text-sm leading-relaxed">
                        Acércate al lugar de nuestro comienzo. El recuerdo se desbloqueará al llegar.
                    </p>

                    <div className="w-full bg-white/80 rounded-3xl p-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] border border-purple-100/50">
                        <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-purple-800 drop-shadow-sm font-poppins tracking-tighter">
                            {distance !== undefined && distance !== null ? `${Math.round(distance)}` : '...'}
                        </div>
                        <div className="block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-purple-400/80">
                            Metros Restantes
                        </div>
                    </div>

                    <div className="mt-10 flex gap-2.5 justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-300 animate-pulse"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse delay-75"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-700 animate-pulse delay-150"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
