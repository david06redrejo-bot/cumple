/**
 * Módulo puro matemático para calcular distancias esféricas terrestres.
 */

/**
 * Calcula la distancia en metros entre dos coordenadas geográficas
 * utilizando la fórmula del Haversine.
 * 
 * @param {Object} point1 - Primer punto cartográfico { latitude, longitude }
 * @param {Object} point2 - Segundo punto cartográfico { latitude, longitude }
 * @returns {number} La distancia calculada en metros.
 */
export const calculateDistance = (point1, point2) => {
    if (!point1 || !point2) return 0;

    const R = 6371e3; // Radio de la Tierra en metros

    // Convertir grados a radianes
    const lat1 = point1.latitude * Math.PI / 180;
    const lat2 = point2.latitude * Math.PI / 180;

    const deltaLat = (point2.latitude - point1.latitude) * Math.PI / 180;
    const deltaLon = (point2.longitude - point1.longitude) * Math.PI / 180;

    // Aplicación de la fórmula matemática de Haversine
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Resultado devuelve metros
};
