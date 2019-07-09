import React from 'react';
import Dropzone from './Dropzone';
import '../styles/Home.css';
import logo from '../assets/logo.png';

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
                Contact
                <img className="logo" src={logo}/>
                <p className="content">This application is an AI system that understands house styles. It's trained on many of the popular architectural home styles as well as on the images you provide here!</p>
                <Dropzone handleFileInput={this.handleFileInput}/>
            </div>
        )
    }
}

export default Contact;