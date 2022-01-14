import { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LadingScreen, ProfileScreen } from '../screens';

class RoutesComponent extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<LadingScreen/>}/>
                <Route path="/profile" element={<ProfileScreen/>}/>
                <Route path="/profile/:id?" element={<ProfileScreen/>}/>
                <Route path="/*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
        );
    }
}

export {
    RoutesComponent
};