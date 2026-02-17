# Modern React Portfolio

A high-performance, interactive, and data-driven portfolio application built with **React 19** and **Vite**. This project utilizes a clean, component-based architecture with advanced state management, custom SCSS styling, and smooth motion primitives to deliver a professional user experience.

## Project Overview

This repository houses a modern frontend solution for showcasing professional skills, projects, and certifications. Unlike static templates, this application is designed to be **dynamic**: it consumes content via a Context API provider, allowing for conditional rendering of sections based on available data. It features a robust custom styling system using SCSS modules and integrates sophisticated animation libraries for a polished feel.

## Unique Features & Technical Highlights

### 1. Data-Driven Component Rendering
The application does not rely on hardcoded text for its main sections. As seen in `src/views/pages/index.jsx`, the application utilizes a **Conditional Rendering Strategy**:
*   **Context-Based Data:** The `PortfolioContext` supplies a `content` object.
*   **Dynamic Sections:** Components like `About`, `Skills`, and `Projects` are only rendered if the specific data keys (e.g., `content?.about`) exist.
*   **Fallback Handling:** Includes a robust `NotFoundScreen` mechanism if the content payload is empty or fails to load.

### 2. Advanced State Management & Caching
*   **React Query Integration:** Utilizes `@tanstack/react-query` to handle server state, ensuring efficient data fetching, caching, and synchronization with the backend API.
*   **Custom Providers:**
    *   `PortfolioProvider`: Manages the global state of the portfolio content.
    *   `TrackProvider`: Implements a dedicated context for user tracking and analytics logic.

### 3. Modular SCSS Architecture (7-1 Pattern)
The project eschews generic CSS frameworks in favor of a highly maintainable, custom SCSS architecture located in `src/styles`:
*   **Utils:** Abstracted mixins and variables for `_colors`, `_grid`, `_flex`, and `_border`.
*   **Themes:** Dedicated support for theming (`_light.scss`) and responsive breakpoints (`_phone.scss`, `_tablet.scss`).
*   **Component Isolation:** Specific styles for distinct UI elements (e.g., `_accordin.scss`, `_cards.scss`) to prevent style leakage.

### 4. Interactive UX & Motion
*   **Animation Orchestration:** Combines **Framer Motion** for complex component transitions with **AOS (Animate On Scroll)** for scroll-triggered reveal effects.
*   **Audio Feedback:** Implements a custom utility `src/utils/Click.js` and `src/assets/son/click.mp3` to provide auditory feedback on user interactions.
*   **Carousel Logic:** Integrates `swiper` for touch-friendly project and certificate sliders.

### 5. Custom Service Layer
*   **Centralized API Handling:** `src/services/api.js` acts as a singleton for Axios configuration, ensuring consistent request headers and error handling.

## Architecture & Components

### Core Providers
*   **`PortfolioProvider`**: Wraps the application to supply CMS/API data to all views.

### Main Views (`src/views`)
*   **`RootLayout`**: The main wrapper component handling the router outlet.
*   **`Index`**: The primary landing page that orchestrates the rendering of sub-sections based on context data.
*   **`ScreenProjects`**: Dedicated view for a detailed project grid.
*   **`ScreenSkills`**: Dedicated view for extended skills display.
*   **`NotFoundScreen`**: Custom 404/Error state handler.

### Section Components (`src/components` & `src/views/sections`)
The application is divided into logical feature blocks:
*   **Hero**: Main entry point with search/intro capabilities.
*   **About**: Bio and personal details.
*   **Skills**: Visual representation of technical stack (uses `CardSkills`).
*   **Projects**: Portfolio showcase using `CarouselImages` and `Detail` views.
*   **Certificate**: Credentials display.
*   **Services**: Offerings/Services list.
*   **FAQ**: Accordion-style frequently asked questions.
*   **Contact/Media**: Contact forms and social media links.

### Routing
*   **`src/routers/web.jsx`**: Defines the application routes using `react-router-dom`.
*   **`src/routers/path.js`**: Centralized constant definitions for route paths to prevent hardcoded strings.

## Tech Stack

**Core:**
*   **Runtime:** React 19
*   **Build Tool:** Vite 7
*   **Language:** JavaScript (ESModules)

**Styling & UI:**
*   **Pre-processor:** SCSS (Sass)
*   **Icons:** Lucide React
*   **Notifications:** React Hot Toast

**Animations:**
*   Framer Motion
*   AOS (Animate On Scroll)

**Data & Network:**
*   @tanstack/react-query
*   Axios
*   Context API

**Utilities:**
*   Swiper (Carousels)
*   @google-cloud/translate (Localization support)

## Installation & Usage

### Prerequisites
*   Node.js (v18+ recommended)
*   npm or yarn

### Steps

1.  **Clone the repository**
    ```bash
    git clone https://github.com/bakhouya/modern-react-portfolio.git
    cd modern-react-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

5.  **Preview production build**
    ```bash
    npm run preview
    ```

