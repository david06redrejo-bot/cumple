import { useState, useEffect } from 'react';
import { calculateDistance } from '../utils/haversine';
import { TARGET_COORDINATES, UNLOCK_DISTANCE_METERS } from '../config/constants';

/**
 * Custom Hook: useGeolocation
 * 
 * Encapsula la lógica determinista para interactuar con la Web API de GPS 
 * (navigator.geolocation) en tiempo real.
 * Compara constantemente la posición del dispositivo móvil del cliente con las coordenadas
 * del objetivo (TARGET_COORDINATES), utilizando un cálculo de Haversine puro. 
 * 
 * Expone un flag booleano reactivo (isUnlocked) estrictamente condicionado 
 * al umbral de metros (UNLOCK_DISTANCE_METERS).
 * Funciona de manera reactiva para que el Agente 2 (UI) pueda consumirlo
 * limpiamente sin preocuparse por la matemática ni el API asíncrona subyacente.
 * 
 * @returns {Object} Un estado reactivo con los resultados del tracker continuo: {
 *    currentDistanceMeters: number | null,  // Distancia restante en metros precisos. Null si no calculada.
 *    isUnlocked: boolean,                   // True únicamente si currentDistance <= UNLOCK_DISTANCE_METERS.
 *    error: string | null                   // Si el usuario deniega permisos o falla la antena, retorna un string.
 * }
 * 
 * @example
 * // Implementación para el Agente 2 & 3 en la UI o App.jsx:
 * const { currentDistanceMeters, isUnlocked, error } = useGeolocation();
 * 
 * if (error) return <ErrorMessage message={error} />;
 * if (isUnlocked) return <MotivesViewer />;
 * return <Counter distance={currentDistanceMeters} />;
 */
export const useGeolocation = () => {
    const [currentDistanceMeters, setCurrentDistanceMeters] = useState(null);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Validar soporte en el navegador para fallar decentemente
        if (!navigator.geolocation) {
            setError('Error Crítico: Geolocalización no es soportada por este navegador.');
            return;
        }

        // Callback de éxito asíncrono instanciado cada vez que el satélite reporta cambios
        const handleSuccess = (position) => {
            const currentPos = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            // Inyector matemático: Calcular metraje actual
            const dist = calculateDistance(currentPos, TARGET_COORDINATES);

            // Redondear para enviar enteros limpios a la capa UI (Agente 2)
            const roundedDist = Math.round(dist);

            setCurrentDistanceMeters(roundedDist);

            // Evaluación determinista del core: ¿Llegó al umbral requerido?
            // Esta es la métrica vital para liberar el cumpleaños
            if (roundedDist <= UNLOCK_DISTANCE_METERS) {
                setIsUnlocked(true);
            } else {
                setIsUnlocked(false);
            }

            // Limpiar errores si se recuperó señal
            setError(null);
        };

        // Callback de fallback / rechazo del usuario
        const handleError = (err) => {
            // Códigos posibles: 1 (PERMISSION_DENIED), 2 (POSITION_UNAVAILABLE), 3 (TIMEOUT)
            setError(`Se requiere acceso al GPS para continuar. (Código: ${err.code}) - ${err.message}`);
        };

        // Opciones del rastreador GPS para forzar la máxima precisión
        const options = {
            enableHighAccuracy: true, // Forzar uso de chipset GPS real (ignorar wifi/ip fallbacks si es posible)
            timeout: 10000,           // 10s máximo de espera por cada ping
            maximumAge: 0             // No cachear lecturas anteriores, forzar ubicación estricta en tiempo real
        };

        // Levantar el watcher continuo en el montaje del componente UI que consuma el hook
        const watcherId = navigator.geolocation.watchPosition(
            handleSuccess,
            handleError,
            options
        );

        // Phase de desmontaje reactivo: Matar el watcher si el componente muere para no leakear memoria
        return () => {
            navigator.geolocation.clearWatch(watcherId);
        };
    }, []); // Se ejecuta sólo al montar debido al array vacío.

    return { currentDistanceMeters, isUnlocked, error };
};
