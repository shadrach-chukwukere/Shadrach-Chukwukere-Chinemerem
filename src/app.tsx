import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";
import ScrollToTop from "./utility";
import NotFound from "./pages/NotFound";
import Suspenses from "./components/Loading";
import Toasters from "./components/Toaster";

function AppContent() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const startApp = () => {
      // Wait 2 seconds *after* document fully loads
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    };

    if (document.readyState === "complete") {
      // Document already loaded
      startApp();
    } else {
      // Wait for full load
      window.addEventListener("load", startApp);
      return () => window.removeEventListener("load", startApp);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toasters />
      {loaded ? <AppContent /> : <Suspenses />}
    </BrowserRouter>
  );
}
