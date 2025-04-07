
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mount the app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(<App />);

// Log to help debug GitHub Pages deployment
console.log("Application initialized", {
  environment: import.meta.env.MODE,
  baseUrl: import.meta.env.BASE_URL,
});
