import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/navbar/navbar.tsx";
const Home = lazy(() => import("./components/home/home.tsx"));

//Material style
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//custom style.
import "./App.css";

const Loading = () => {
  return (
    <Stack
      sx={{
        color: "grey.500",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="success" />
    </Stack>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter basename="/">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
