import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Header.css";

class Header extends React.Component  {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="div">
                <ul className="header">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;
