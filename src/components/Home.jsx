import React from 'react';
import Dropzone from './Dropzone';
import '../styles/Tabs.css';
import logo from '../assets/logo.png';
import Header from './Header';

export default class Home extends React.Component  {
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
                <img alt="logo" className="logo" src={logo}/>
                <p className="content">This application is an AI system that understands house styles. It's trained on many of the popular architectural home styles as well as on the images you provide here!</p>
                <Dropzone handleFileInput={this.handleFileInput}/>
            </div>
        )
    }
}