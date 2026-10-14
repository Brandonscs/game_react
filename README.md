🕹️ Game-React
Game-React es una aplicación web modular desarrollada con React, TypeScript y Vite, con una estética retro arcade y cuatro minijuegos interactivos integrados.
El proyecto está diseñado para ser desplegado automáticamente en Firebase Hosting mediante un flujo de integración continua (CI/CD) con GitHub Actions.
---
🚀 Características
🎮 Pantalla de Inicio Retro: Menú interactivo con diseño neón/arcade.
🪙 Minijuego 1 (Clicker Arcade): Contador rápido de monedas.
🧩 Minijuego 2 (Escape del Laberinto): Control D-Pad bien alineado para guiar la ficha hasta la meta.
👻 Minijuego 3 (Atrapa al Fantasma): Juego de velocidad y reflejos con posiciones aleatorias.
🧠 Minijuego 4 (Simón Dice): Juego de memoria visual con secuencias de colores.
📦 Estructura Modular: Cada pantalla y juego cuenta con sus propios archivos de lógica (`.tsx`) y estilos (`.css`) independientes en `src/game/`.
---
📂 Estructura del Proyecto
```text
game_react/
├── src/
│   ├── game/
│   │   ├── inicio.tsx       # Pantalla principal retro
│   │   ├── inicio.css
│   │   ├── game1.tsx        # Minijuego 1: Clicker Arcade
│   │   ├── game1.css
│   │   ├── game2.tsx        # Minijuego 2: Escape del Laberinto
│   │   ├── game2.css
│   │   ├── game3.tsx        # Minijuego 3: Atrapa al Fantasma
│   │   ├── game3.css
│   │   ├── game4.tsx        # Minijuego 4: Simón Dice
│   │   └── game4.css
│   ├── App.tsx              # Ruteador principal de pantallas
│   ├── App.css
│   └── main.tsx
├── public/
├── package.json
├── vite.config.ts
└── README.md
```
---
🛠️ Instalación y Configuración Local
Prerrequisitos
Tener instalado Node.js (versión 18 o superior).
Tener un gestor de paquetes como `npm` o `yarn`.
Pasos para ejecutar
Clonar el repositorio (o entrar a la carpeta del proyecto):
```bash
   git clone https://github.com/TU_USUARIO/game_react.git
   cd game_react
   ```
Instalar dependencias:
```bash
   npm install
   ```
Iniciar el servidor de desarrollo:
```bash
   npm run dev
   ```
Abre tu navegador e ingresa a `http://localhost:5173`.
---
🚀 Despliegue en Firebase Hosting con GitHub Actions
1. Inicializar Firebase en el proyecto
Asegúrate de tener instalada la CLI de Firebase e inicia sesión:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```
Durante la configuración de Firebase:
Selecciona tu proyecto de Firebase existente o crea uno nuevo.
Define el directorio público como: `dist`
Configura la app como una SPA (Single Page Application): Sí (`y`)
Configura builds y despliegues automáticos con GitHub: Sí (`y`)
2. Automatización con GitHub Actions
El proceso de `firebase init hosting` creará automáticamente los archivos en `.github/workflows/`:
`firebase-hosting-pull-request.yml`: Previsualización al abrir un Pull Request.
`firebase-hosting-merge.yml`: Despliegue automático a producción al hacer `push` a la rama `main`.
---
📜 Tecnologías Utilizadas
React 18
TypeScript
Vite
CSS3 (Flexbox & Grid)
Firebase Hosting
GitHub Actions