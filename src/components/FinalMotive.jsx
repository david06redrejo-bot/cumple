import React from 'react';
import motivosData from '../data/motivos.json';

const FinalMotive = () => {
    // Obtener el motivo 21 explícitamente, o hacer un fallback confiable
    const finalMotive = motivosData.find(m => m.id === 21) || {
        id: 21,
        text: "Motivo 21: Porque eres mi destino absoluto. Aquí, en este punto exacto bajo el cielo y la ciudad donde tuvimos nuestro primer beso, supe inmediatamente que eras el gran y único amor de mi vida. Todo empezó aquí y ahora todo nuestro futuro es posible."
    };

    // Limpiamos el texto tolerando formatos como "Motivo 21: " o "21: " o "21 "
    const textClean = finalMotive.text.replace(/^(Motivo \d+: |\d+: |\d+ )/i, '').trim();

    return (
        <div className="min-h-screen bg-purple-950 flex flex-col items-center justify-center p-6 md:p-12 transition-all duration-1000 fade-in font-poppins relative overflow-hidden">

            {/* Background radial glows e inmersión visual */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] sm:w-[50rem] sm:h-[50rem] bg-purple-800 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12">

                {/* Quote Minimalista pero elegante para texto largo */}
                <div className="relative px-6 md:px-12 py-10">
                    <svg className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 text-purple-400/20 transform -scale-x-100 -translate-y-1/2 -translate-x-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L16.09 18H2v-6h11.91l-1.99-3H24v12zm-12 0l2.073-3H2v-6h11.91l-1.99-3H12v12z" /></svg>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-400 leading-relaxed md:leading-loose drop-shadow-2xl z-10 relative">
                        {textClean}
                    </h1>

                    <div className="mt-8 flex justify-center gap-2 text-purple-300/60 animate-pulse">
                        <span>✨</span>
                        <span className="scale-125">💖</span>
                        <span>✨</span>
                    </div>

                    <svg className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 text-purple-400/20 translate-y-1/2 translate-x-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L16.09 18H2v-6h11.91l-1.99-3H24v12zm-12 0l2.073-3H2v-6h11.91l-1.99-3H12v12z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default FinalMotive;
