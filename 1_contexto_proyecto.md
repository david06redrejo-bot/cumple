# 1. Contexto del Proyecto: SPA de Geolocalización "Cumple Erika"

## 1.1 Visión y Misión del Proyecto
La aplicación es un regalo interactivo de cumpleaños basado en geolocalización dinámica. El objetivo principal es guiar a la usuaria (Erika) mediante un contador en vivo de distancia hacia unas coordenadas físicas específicas (lugar de su primer beso con el Product Owner). Toda la arquitectura es **Client-Side** (Single Page Application pura) sin requerir bases de datos ni backend, maximizando la velocidad y encapsulamiento.
Al llegar a una distancia < 30 metros del objetivo, el flujo cambia: el contador se destruye y desbloquea el regalo real, un visor interactivo que contiene "21 motivos", culminando en una pantalla exclusiva para el motivo 21.

## 1.2 Stack Tecnológico
- **Core / Framework:** React 18+
- **Tooling y Build:** Vite (por rápidez de desarrollo y HMR)
- **Estilos:** TailwindCSS (centrado en la paleta `purple`)
- **Web API Nativa:** `navigator.geolocation.watchPosition` (rastreo GPS continuo)
- **Módulos Lógicos:** Función matemática de Haversine pura en JS.

## 1.3 Directrices de Diseño (UI/UX)
- **Tono Visual:** Diseño limpio, moderno, con espacios en blanco ("breathable design"), minimalista y romántico (evitar clichés sobresaturados y corazones agresivos).
- **Paleta de Colores (Obligatorio uso de "purple"):**
  - **Superficies / Fondos:** `bg-purple-50` o lavanda neutro que evite fatiga visual en pantallas de móviles.
  - **Acentos y Botonera:** `purple-600` hasta `purple-800` para generar contraste.
  - **Tarjetas y Glasmorphism:** Bordes con transparencia, sombras moradas (`shadow-purple-200 / 300`).
- **Estados Visuales:** Toda interacción debe estar suavizada (`transition-all duration-500 fade-in`). Componentes críticos deben tener una entrada y salida armónica.

## 1.4 Flujo de Usuario y Pantallas
1. **Fase 1 - Bloqueo / Rastreo:** 
   Al montar la aplicación e inicializar el GPS, se muestra la distancia restante en tiempo real. La interfaz dibuja un componente (`Counter`) con un número gigante actualizable en vivo.
2. **Fase 2 - Transición de Desbloqueo (< 30 m):**
   El cálculo iterativo detecta que el umbral de los 30 metros fue superado con éxito. El componente contador se "funde" o "destruye" de forma orgánica.
3. **Fase 3 - Visor de Motivos (Display interactivo):**
   La UI ahora dibuja las tarjetas pre-cargadas (motivos 1 al 20). Es indispensable que la vista esté **paginada** con 2 elementos por vista (un total de 10 páginas). El usuario navega con botones "Anterior/Siguiente".
4. **Fase 4 - El Clímax (Motivo 21):**
   Al completarse la lectura de los 20 motivos, se da paso al motivo 21 en una **vista exclusiva final**. Un diseño de impacto, único en la pantalla que enlaza las palabras finales.

## 1.5 Manejo del Estado y Arquitectura de Datos
Se prescribe el uso del patrón tecnológico de **Lifting State Up**, evitando dependencias externas complejas (como Redux) que romperían la simplicidad de la SPA:
- Un estado principal en `App.jsx` que recibe de un Custom Hook la propiedad `distance` y un flag `isUnlocked`.
- Renderizado condicional en la jerarquía: si `!isUnlocked` se propaga `distance` al UI Counter. Si `isUnlocked` transiciona a los Viewers de los motivos.

## 1.6 Estructura de Carpetas (Separación de Preocupaciones)
```text
/src
  /assets         # Medios y utilidades estáticas
  /components
    Counter.jsx        # Capa UI de bloqueo: Contador Numérico
    MotivesViewer.jsx  # Capa UI desbloqueo: Visor de Tarjetas paginadas (2 en 2)
    FinalMotive.jsx    # Capa UI cumbre: Vista en solitario del Motivo 21
  /config
    constants.js       # Coordenadas DESTINO (Lugar del Beso) y UMBRAL de 30 metros
  /data
    motivos.js/json    # Base local con el JSON de los 21 textos mock
  /hooks
    useGeolocation.js  # Lógica del interceptor GPS web (`watchPosition`)
  /utils
    haversine.js       # Matemática pura: Devuelve distancia en metros de Lat/Lng a Lat/Lng
  App.jsx          # Componente Orquestador de la jerarquía Visual
  main.jsx         # Entrypoint React
  index.css        # Directivas de Tailwind / Fonts adicionales
```

## 1.7 Fórmula de Haversine
Debe existir un módulo exportado simple que reciba las coordenadas absolutas actuales provenientes del GPS y las contraste iterativamente contra las coordenadas objetivo almacenadas en `/config`. Todo cálculo se hace sobre la estimación de 6371km del radio de la tierra para devolver una métrica útil (en metros).
