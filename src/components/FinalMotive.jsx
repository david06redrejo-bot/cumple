import React from 'react';
import motivosData from '../data/motivos.json';

const FinalMotive = () => {
    // Obtener el motivo 21 explícitamente, o hacer un fallback confiable
    const finalMotive = motivosData.find(m => m.id === 21) || {
        id: 21,
        text: "Motivo 21: Porque eres mi destino absoluto. Aquí, en este punto exacto bajo el cielo y la ciudad donde tuvimos nuestro primer beso, supe inmediatamente que eras el gran y único amor de mi vida. Todo empezó aquí y ahora todo nuestro futuro es posible."
    };

    // Limpiamos el texto para que solo se muestre la frase hermosa
    const textClean = finalMotive.text.replace(/^Motivo 21: /, '');

    return (
        <div className="min-h-screen bg-purple-950 flex flex-col items-center justify-center p-6 md:p-12 transition-all duration-1000 fade-in font-poppins relative overflow-hidden">

            {/* Background radial glows e inmersión visual */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-purple-800 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Cabecera Clímax */}
                <div className="inline-flex items-center justify-center gap-4 mb-12">
                    <div className="h-px w-12 border-t border-purple-400/40"></div>
                    <span className="text-purple-300 font-medium tracking-[0.4em] uppercase text-xs">
                        El Clímax
                    </span>
                    <div className="h-px w-12 border-t border-purple-400/40"></div>
                </div>

                {/* Quote Minimalista */}
                <div className="relative px-8 md:px-16">
                    <svg className="absolute -top-12 -left-4 w-16 h-16 text-purple-400/20 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L16.09 18H2v-6h11.91l-1.99-3H24v12zm-12 0l2.073-3H2v-6h11.91l-1.99-3H12v12z" /></svg>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-500 leading-tight drop-shadow-2xl z-10 relative">
                        {textClean}
                    </h1>

                    <svg className="absolute -bottom-12 -right-4 w-16 h-16 text-purple-400/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L16.09 18H2v-6h11.91l-1.99-3H24v12zm-12 0l2.073-3H2v-6h11.91l-1.99-3H12v12z" /></svg>
                </div>

                {/* Botón de cierre - Transición armoniosa */}
                <div className="mt-24 opacity-0 animate-[fadeIn_1.5s_ease-out_1.5s_forwards]">
                    <button className="px-10 py-5 rounded-full bg-white text-purple-900 font-black tracking-widest uppercase text-sm hover:bg-purple-100 hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_80px_rgba(168,85,247,0.7)] group flex items-center gap-3">
                        <span>Es nuestro momento</span>
                        <svg className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinalMotive;
