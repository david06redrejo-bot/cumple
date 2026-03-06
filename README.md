# 📍 Cumple - Geolocation Gift SPA

A React-based Single Page Application focused on delivering a personalized, geolocation-unlocked experience. Built specifically as an interactive birthday gift, this SPA tracks user coordinates in real-time to unlock special content only upon reaching a specific real-world target destination.

## 🚀 Features

- **Real-Time Geolocation Tracking:** Utilizes the native browser `navigator.geolocation` API to watch user movements with high accuracy.
- **Haversine Formula Implementation:** Calculates the precise distance (in meters) between the user's current GPS location and the target coordinates.
- **Dynamic Unlock System:** The primary UI remains locked displaying a live distance counter until the user's coordinates fall within the specified radius threshold (30 meters) of the destination.
- **Polished, Modern UI/UX:** Built with Tailwind CSS, featuring smooth transitions, glassmorphism elements, custom CSS pulse animations, and a responsive, mobile-first design tailored for an engaging user experience.

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Core APIs:** Browser Geolocation API

## 📋 Project Structure

- `/src/components/`: Modular React UI components (`Counter.jsx`, `MotivesViewer.jsx`, `FinalMotive.jsx`).
- `/src/hooks/`: Custom React Hooks (`useGeolocation.js` for abstracting complex GPS state logic).
- `/src/utils/`: Pure helper functions, including the mathematical Haversine distance script.
- `/src/data/`: JSON structures acting as a mock database for the unlocked content.
- `/src/config/`: Global constants configuring distances and target coordinates.
- `/docs/`: Architectural documentation and autonomous agent generation prompts (original Spanish project context).

## 💡 Architecture & Development Process

This application was conceptualized and planned using a multi-agent AI architecture. The development process was orchestrated by assigning distinct responsibilities—Core Logic, UI Components, and Integration/Infrastructure—to specialized autonomous developer agents to avoid merge conflicts and ensure modularity. You can find the architectural planning notes in the `/docs` folder.

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/david06redrejo-bot/cumple.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Target Setup: Configure your specific latitude and longitude destination in `src/config/constants.js`.
4. Start the development server (requires HTTPS or localhost to allow browser geolocation permissions):
   ```bash
   npm run dev
   ```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
