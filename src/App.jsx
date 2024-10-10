import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-inter";

import Layout from "./pages/Layout";
import HomeContainer from "./pages/home/HomeContainer";
import VideoContainer from "./pages/videos/VideoContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContainer />} />
          <Route path="/video/:movieID" element={<VideoContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
