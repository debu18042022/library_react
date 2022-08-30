// import logo from './logo.svg';
import "./App.css";
import NavBar from "./NavBar";
import { NavLink, Route, Routes } from "react-router-dom";
import BookStore from "./BookStore.js";
import SinglePage from "./SinglePage";
import PrimarySearchAppBar from "./NavBar";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { light } from "@mui/material/styles/createPalette";

function App() {
 

  // const Darktheme = createTheme({
  //   palette: {
  //     mode: mode_value,
  //   },
  // });

  return (
    // <ThemeProvider values={{ mode_value, setMode }}>
      <div bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<NavBar/>}></Route> */}
          <Route path="/" element={<BookStore />}></Route>
          <Route path="/single_page" element={<SinglePage />}></Route>
        </Routes>
        <Footer />
      </div>
    // </ThemeProvider>
  );
}

export default App;
