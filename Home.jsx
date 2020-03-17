import React from 'react';
import Dropzone from './Dropzone';
import '../styles/Tabs.css';
import logo from '../assets/logo.png';
import Header from './Header';
import Circle from 'react-circle';

export default class Home extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            confidence: 0,
            classification: ''
        };
    }
    
    handleFileInput = (file) => {
        console.log("Do something with the file: ", file.name);
        // Make call to endpoint and get prediction/confidence value
        this.setState({confidence: 0.6, classification: 'Colonial'});
    }

    refreshRes = () => {
        this.setState({confidence: 0, classification: ''});
    }

    render() {
        return (
            <div className="container">
                <Header />
                <img alt="logo" className="logo" src={logo}/>
                <p className="content">This application is an AI system that understands house styles. It's trained on many of the popular architectural home styles as well as on the images you provide here!</p>
                <Dropzone handleFileInput={this.handleFileInput} refresh={this.refreshRes}/>
                <div id="prediction">
                    {
                        <div id="classification"><strong>{this.state.classification ? this.state.classification : "Input an image!"}</strong></div>
                    }
                    { 
                        <Circle id="confidence"
                            progress={this.state.confidence * 100} 
                            size={200}
                        />
                    }
                </div>
            </div>
        )
    }
}