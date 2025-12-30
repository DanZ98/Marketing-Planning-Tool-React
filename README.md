# Ace Hardware Marketing Planning Tool - React TypeScript

A static React TypeScript application of the Ace Hardware Tiles Dashboard, featuring a responsive marketing planning interface.

## 🚀 Features

-   **Responsive Design**: Bootstrap-integrated responsive layout that works across devices
-   **Real-time Investment Tracking**: Display of total invested and remaining budget
-   **Modular Component Structure**: Reusable React components
-   **SCSS Styling**: Maintained original design with organized SCSS architecture
-   **Type Safety**: Full TypeScript implementation for better development experience

## 🛠 Tech Stack

-   **Frontend Framework**: React 18.2.0
-   **Language**: TypeScript 5.2.2
-   **Build Tool**: Vite 5.0.8
-   **Styling**: SCSS with Bootstrap 5.3.0
-   **Linting**: ESLint with React-specific configurations
-   **Icons**: Font Awesome

## 📦 Installation

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Start the development server**

    ```bash
    npm run dev
    ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 🗂 Project Structure

```
src/
├── components/
│   ├── Header/Header.tsx
│   ├── ProjectedSalesSection/ProjectedSalesSection.tsx
│   ├── TilesSection/TilesSection.tsx
│   ├── TileCard/TileCard.tsx
│   ├── TotalInvestedCard/TotalInvestedCard.tsx
│   └── FooterSection/FooterSection.tsx
├── types/marketingData.ts
├── styles/
│   ├── abstracts/
│   ├── layouts/
│   └── main.scss
├── App.tsx
└── main.tsx
```

## 🎯 Key Components

-   **App.tsx**: Main application managing state and layout
-   **Header**: Marketing planning tool banner
-   **ProjectedSalesSection**: Sales data and pagination
-   **TilesSection**: Container for marketing initiative tiles
-   **TileCard**: Individual marketing tiles with interactions
-   **TotalInvestedCard**: Investment summary and priorities
-   **FooterSection**: Navigation and dashboard link

## 🔧 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## 🚀 Migration Benefits

This React TypeScript version adds:

1. **Component Modularity**: Easier maintenance
2. **Type Safety**: Compile-time error checking
3. **Modern Development**: Hot reload, ESLint
4. **State Management**: React hooks
5. **Scalability**: Easy feature extension

## 📄 Original Resources

-   Bootstrap: https://getbootstrap.com/
-   Google Fonts: https://fonts.google.com/
-   Sass: https://sass-lang.com/
