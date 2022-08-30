import React, { useContext } from "react";
import { myContextData } from "./ContextData";

import Box from "@mui/material/Box";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Switch,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { NavLink } from "react-router-dom";
import ModeNight from "@mui/icons-material/DarkMode";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function NavBar() {
  const {
    bookName,
    setBookName,
    book_array,
    setBook_array,
    setMode,
    setMode_text_color,
  } = useContext(myContextData);

  const GetBookName = (e) => {
    setBookName(e.target.value);
  };

  const searchbook = () => {
    alert(bookName);
    fetch(
      `https://openlibrary.org/search.json?q=${bookName}=&mode=ebooks&has_fulltext=true`
    )
      .then((res) => res.json())
      .then((json) => setBook_array(json.docs));
  };

  // (bookName).length > 0 ? console.log(bookName) : <></>

  const NightMode = (e) => {
    if (e.target.checked) {
      setMode("gray");
      setMode_text_color("white");
    } else {
      setMode("white");
      setMode_text_color("black");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        // border: "1px solid black",
      }}
    >
      {/* {console.log(book_array)} */}
      <AppBar position="static" sx={{ backgroundColor: "rgb(225,220,198)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ border: "1px solid black" }}
          >
            <MenuIcon />
          </IconButton>
          <img src="onlinelibrary.svg" alt="" width="200" height="100" />
          <Search sx={{ backgroundColor: "white", color: "black" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={GetBookName}
            />
          </Search>
          <Button
            onClick={searchbook}
            variant="contained"
            sx={{ backgroundColor: "rgb(116,158,192)" }}
          >
            Search
          </Button>
          <Box
            sx={{
              // border: "1px solid black",
              display: "grid",
              placeItems: "center",
              backgroundColor: "rgb(116,158,192)",
              borderRadius: "5px",
            }}
          >
            <Switch onClick={NightMode} />
            <Typography color="black">Change Mode</Typography>
          </Box>
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
