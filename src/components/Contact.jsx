import React from 'react';
import Dropzone from './Dropzone';
import '../styles/Home.css';
import logo from '../assets/logo.png';
import Header from './Header';

class Contact extends React.Component  {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    handleFileInput = (file) => {
        console.log(file);
    }

    render() {
        return (
            <div className="container">
                <Header />
                <img className="logo" src={logo}/>
                <p className="content">Contact Form</p>
            </div>
        )
    }
}

export default Contact;