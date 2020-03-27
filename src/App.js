import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import './styles/styles.scss';

function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;