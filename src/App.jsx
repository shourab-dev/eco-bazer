import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import Homepage from "./pages/Homepage";
import Test from "./pages/Test";
import Error404 from "./pages/Error404";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
