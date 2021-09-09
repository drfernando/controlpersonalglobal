import './Header.css';
import React from 'react';
import logo from '../../../assets/img/logo-globalr.png';


export default class Header extends React.Component{
    render() {
        return (<nav className="navbar transparent-bk"><img className="logo" src={logo} alt="globalr_logo"></img></nav>)
      }
}