// Import useState from react and Outlet from react-router-dom.
import { useState } from "react";
import { Outlet } from "react-router-dom";
// Import App.css.
import "./app.css";
// Import Header and Footer components.
import NavTabs from "./components/ui/navTabs";
import Footer from "./components/footer";

// Export the function App to the main.jsx file for rendering.
export default function App() {
const [currentPage, setCurrentPage] = useState("About");
  // Return the JSX for the App component.
  return (
    <div id="app">
      <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}