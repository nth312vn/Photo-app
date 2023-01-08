import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import LoadingPage from "./pages/loading";
import Photo from "./pages/photo/Photos";
const Home = React.lazy(() => import("./pages/homePage/Home"));
const NotFound = React.lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos/*" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
