import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hub from "./pages/Hub";
import ExtraInfo from "./pages/ExtraInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      width="400px"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      m="auto"
      sx={{ width: { xl: "1488px" } }}
    >
      <Navbar />
      <Routes>
        {/* ExerciseDB BodyParts */}
        <Route path="/" element={<Hub />} />
        {/* ExerciseDB details + Youtube Search and Download */}
        <Route path="/exercise/:id" element={<ExtraInfo />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
