import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { myContextData } from "./ContextData";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookStore() {
  const [expanded, setExpanded] = React.useState(false);

  const { bookName, setBookName, book_array, setBook_array } =
    useContext(myContextData);

  book_array.length > 0 ? console.log(book_array) : <></>;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {console.log(book_array)}
      {book_array.map((item, index) => (
        <Card sx={{ maxWidth: 345, m: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.title}
            
            subheader={item.publish_year ? item.publish_year[0] : 1998}
          />

          <div
            style={{
              width: "99%",
              height: "65%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <NavLink to='/single_page' state={{'id':item.key}} style={{width:"100%",height:"100%"}}>
            <img
              style={{ width: "100%" }}
              src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
              alt="abc"
            ></img>
            </NavLink>
          </div>
          <CardContent>
            <h3 style={{ display: "inline-block" }}>Author : </h3>
           {item.author_name ?
           <h4 style={{ display: "inline-block" }}>{item.author_name}</h4>
           : null}
           
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
