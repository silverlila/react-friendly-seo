import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./articles/Article";
import { Home } from "./home";

export default function Index() {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}
