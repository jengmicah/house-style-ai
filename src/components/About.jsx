import React from 'react';
import '../styles/Tabs.css';
import logo from '../assets/logo.png';
import Header from './Header';

export default class About extends React.Component  {
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
                <h1 className="title">About Us</h1>
                <p className="content">
                    A recent development in the deep learning, opened up a new era of possibilities that were
                    difficult to achieve with conventional methods. Specifically, image recognition has been widely
                    applied in various area. However, it is very rare to see the new methods are applied to
                    architecture area. One of the major hurdles of utilizing image recognition in the architecture area
                    is the various architectural styles that were varied by culture, location, time, etc. For that reason,
                    it is difficult to identify architectural style by non-trained clients and sometimes certain building
                    compose different styles that difficult to identify as one style by experts.
                </p>
                <p className="content">
                    This tool focus on single housing as an architecture type to investigate. Even though new
                    materials, structure, and design are available, an existing or new single house in the US market
                    does not follow one major style. Unlike townhouse, multi-resident or high-rise resident, a single
                    house in the US builds in various styles depending on the interest of the buyer. Depending on the
                    location one style can dominate the single housing, however, looking at a macro scale, various
                    styles are co-existing in the market. So that no one style dominates the architecture style.
                </p>
                <p className="content">
                    There is a various definition of building style can be found. It can be various to a couple of
                    dozens to less than a dozen of styles. It is important to notice that similar styles can be called in
                    various ways in different locations. In <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/List_of_house_styles">Wikipedia</a>, 
                    Pueblo, and Spanish colonial are in the same group of Mediterranean, Spanish, Italian. 
                    Also, neoclassical and Greek Revival are grouped together.
                </p>
                <p className="content">
                    For reducing complexity and clear distinguish between styles, the tool identified nine styles that
                    single house architecture style can be categorized. Nine styles might be too small categories that
                    difficult to encapsulate all possible styles exist in a single housing. However, we believes it can
                    represent most of the single house existed in the US market.
                    This tool is now in trial version and accuracy is not high due to the lack of image datasets,
                    however, our experimental results show that our model is performing reasonable predictions on
                    the test set. With your support and help, we are hoping to improve its accuracy.
                </p>
            </div>
        )
    }
}