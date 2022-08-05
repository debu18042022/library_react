import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
export const myContextData = createContext();
function ContextData(props) {
  const [book_array,setBook_array] = useState([]);
  const [bookName,setBookName] = useState('');

   
  return (
    <myContextData.Provider value={{bookName,setBookName,book_array,setBook_array}}>
       {props.children}
    </myContextData.Provider>
  )
}

export default ContextData