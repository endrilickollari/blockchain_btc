import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search'
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Search></Search>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;
