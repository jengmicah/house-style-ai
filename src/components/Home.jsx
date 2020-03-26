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
            confidence: [0,0,0,0], // Percentages
            classification: ['','','',''] // Strings
        };
    }

    randomly_populate_class = (num) => {
        let classes = ['Cape Cod', 'Colonial', 'Modern and Contemporary', 'Craftsman', 'Georgian', 'Victorian and Queen Anne', 'Spanish', 'Tudor']
        let classification = []
        for(let i = 0; i < num; i++) {
            let random_index = Math.floor(Math.random()*(8-i));
            classification.push(classes[random_index]);
            // console.log(classes, random_index);
            classes.splice(random_index, 1);
        }
        return classification
    }

    randomly_populate_conf = (num) => {
        let confidence = []
        let random_confidence = 100;
        for(let i = 0; i < num; i++) {
            random_confidence = Math.ceil(Math.random() * random_confidence);
            confidence.push(random_confidence);
        }
        return confidence
    }
    
    handleFileInput = (file) => {
        console.log("Do something with the file: ", file.name);
        // Make call to endpoint and get prediction/confidence value
        let classification = this.randomly_populate_class(4);
        let confidence = this.randomly_populate_conf(4);
        this.setState({confidence, classification});
    }
    

    refreshRes = () => {
        this.setState({confidence: [0,0,0,0], classification: ['','','','']});
    }

    render() {
        console.log(this.state);
        this.prediction_output = this.state.classification.map((item, key) =>
            <div className="prediction" id="first" key={key}>
                { <div id="classification"><strong>{item}</strong></div> }
                { 
                    <Circle id="confidence"
                        progress={this.state.confidence[key]} 
                        size={150}
                    />
                }
            </div>    
        );
        return (
            <div className="container">
                <Header />
                <img alt="logo" className="logo" src={logo}/>
                <p className="content">This application is an AI system that understands house styles. It's trained on many of the popular architectural home styles as well as on the images you provide here!</p>
                <Dropzone handleFileInput={this.handleFileInput} refresh={this.refreshRes}/>
                <div id="predict-container">{this.prediction_output}</div>
            </div>
        )
    }
}