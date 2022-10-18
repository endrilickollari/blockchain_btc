import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search'
import {useEffect, useState} from "react";
import apiDetail from './api/api'

function App() {
    const [data, setData] = useState([]);
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
        </div>
    )
}

export default App;
