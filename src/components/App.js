import React from 'react';
import {Route, Routes} from "react-router-dom";
import Nav from "./Nav";
import Home from './Home';
import Popular from "./Popular";
import Battle from "./Battle";

class App extends React.Component {
    render() {
        return (
            <div className = "container">
                <Routes>
                    <Route path='/' element={<Nav/>}>
                        <Route index path = '/' element = {<Home/>}/>
                        <Route path = "popular" element = {<Popular/>} />
                        <Route path = "battle" element = {<Battle/>} />
                    </Route>
                </Routes>
           </div>
        )
    }
}

export default App;