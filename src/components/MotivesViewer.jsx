import React, { useState } from 'react';
import motivosData from '../data/motivos.json';

const MotivesViewer = ({ onComplete }) => {
    // Solo visualizamos los primeros 20 motivos (el 21 es el final)
    const motives20 = motivosData.slice(0, 20);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(motives20.length / itemsPerPage);

    const startIdx = currentPage * itemsPerPage;
    const currentMotives = motives20.slice(startIdx, startIdx + itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(p => p + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(p => p - 1);
    };

    return (
        <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-between p-6 md:p-10 transition-opacity duration-1000 fade-in font-inter">
            {/* Encabezado */}
            <div className="w-full max-w-5xl pt-4 pb-8 flex flex-col items-center text-center">
                <span className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">Tus Recuerdos</span>
                <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-6 font-poppins drop-shadow-sm">
                    21 Motivos por los que te amo
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-purple-300 to-purple-600 rounded-full shadow-sm"></div>
            </div>

            {/* Grid de 4 en 4 */}
            <div className="flex-1 w-full max-w-6xl flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
                    {currentMotives.map((motivo) => {
                        const textClean = motivo.text.replace(/^Motivo \d+: /, '');
                        return (
                            <div
                                key={motivo.id}
                                className="bg-white/80 backdrop-blur-xl border border-purple-100/60 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-purple-400/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col relative group overflow-hidden"
                            >
                                {/* Elementos decorativos */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

                                <span className="text-6xl font-poppins font-black text-purple-200/50 absolute top-4 left-6 group-hover:text-purple-300/40 transition-colors duration-500">
                                    "
                                </span>

                                <p className="text-purple-900 text-lg md:text-xl font-medium leading-relaxed relative z-10 pt-6">
                                    {textClean}
                                </p>

                                <div className="mt-auto pt-8 flex justify-end">
                                    <span className="font-poppins font-black text-4xl text-purple-200 group-hover:text-purple-400 transition-colors duration-500 relative z-10">
                                        #{motivo.id}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navegación y Paginación */}
            <div className="w-full max-w-5xl pb-4 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-purple-200 text-purple-700 font-bold shadow-sm hover:bg-purple-50 hover:border-purple-300 hover:text-purple-900 focus:ring-4 focus:ring-purple-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    Anterior
                </button>

                <div className="flex flex-col items-center">
                    <span className="text-purple-800 font-bold font-poppins tracking-wider bg-white/60 shadow-inner px-6 py-2 rounded-full text-sm border border-purple-100">
                        {currentPage + 1} / {totalPages}
                    </span>
                </div>

                {currentPage === totalPages - 1 ? (
                    <button
                        onClick={onComplete}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-purple-600 text-white font-black tracking-wider uppercase shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:shadow-purple-600/50 hover:-translate-y-0.5 focus:ring-4 focus:ring-purple-300 transition-all duration-300 animate-pulse"
                    >
                        Desbloquear Final
                    </button>
                ) : (
                    <button
                        onClick={nextPage}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:shadow-purple-600/50 hover:-translate-y-0.5 focus:ring-4 focus:ring-purple-300 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        Siguiente
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default MotivesViewer;
