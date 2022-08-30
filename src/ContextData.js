import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const myContextData = createContext();
function ContextData(props) {
  const [book_array, setBook_array] = useState([]);
  const [bookName, setBookName] = useState("");
  const [mode_value, setMode] = useState("");
  const [mode_text_color, setMode_text_color] = useState("");
  const [size_text, set_size_text] = useState("");

  return (
    <myContextData.Provider
      value={{
        bookName,
        setBookName,
        book_array,
        setBook_array,
        mode_value,
        setMode,
        mode_text_color,
        setMode_text_color,
        size_text,
        set_size_text,
      }}
    >
      {props.children}
    </myContextData.Provider>
  );
}

export default ContextData;
