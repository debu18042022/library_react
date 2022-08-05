// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { NavLink, Route, Routes } from 'react-router-dom';
import BookStore from './BookStore.js';
import SinglePage from './SinglePage';
function App() {
  return (
    <div className="">
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<NavBar/>}></Route> */}
        <Route path="/" element={<BookStore/>}></Route>
        <Route path="/single_page" element={<SinglePage/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
