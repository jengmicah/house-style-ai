import React from 'react';
import '../styles/Tabs.css';
import logo from '../assets/logo.png';
import Header from './Header';

export default class Styles extends React.Component  {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Header />
                <img alt="logo" className="logo" src={logo}/>
                <h1 className="title">Styles</h1>
                <div className="support-grid"></div>
                  <div className="band">
                    <div className="item-1">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.housebeautiful.com/design-inspiration/a24516732/what-is-a-cape-cod-style-house/" className="card">
                            <div className="thumb"></div>
                            <article>
                              <h1>Cape Cod</h1>
                              <p>A low, broad, single-story frame building with a steep pitched shallow overhang roof, very little ornamentation, and have dormers.</p>
                            </article>
                          </a>
                    </div>
                    <div className="item-2">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.angieslist.com/articles/what-colonial-style-house.htm" className="card">
                            <div className="thumb"></div>
                            <article>
                              <h1>Colonial</h1>
                              <p>(without specific country refers to English Colonial) Has sash windows, pitch roof with median angel around 38 degrees and one window above entry door, in terms of layout simple rectangular layout with variation like saltbox shape.</p>
                            </article>
                          </a>
                    </div>
                    <div className="item-3">
                      <a target="_blank" rel="noopener noreferrer" href="https://freshome.com/contemporary-home-style/" className="card">
                        <div className="thumb"></div>
                        <article>
                          <h1>Modern and Contemporary</h1> 
                          <p>Can be identified by its bigger windows and more rectangular shapes that has more straight lines and overlap of volumes.</p>
                        </article>
                      </a>
                    </div>
                    <div className="item-4">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.housebeautiful.com/design-inspiration/a25227127/craftsman-style-houses/" className="card">
                          <div className="thumb"></div>
                            <article>
                              <h1>Craftsman</h1> 
                              <p>Characterized by its rustic texture of the building materials broad overhangs with exposed rafter tails at the eaves, and often extensive pergolas and trellises over the porched. Decorative beams or braces under gables and dormer windows, the porch columns are often battered or sloped near the ground. Originated in California in 1890.</p>
                            </article>
                          </a>
                    </div>
                    <div className="item-5">
                          <a target="_blank" rel="noopener noreferrer" href="https://architecturestyles.org/georgian-1700-1850/" className="card">
                          <div className="thumb"></div>
                            <article>
                              <h1>American Georgian (Georgian)</h1>
                              <p>Based on Stuart architecture from late seventeenth- century. Windows were large and regularly placed on a grid, to open these large windows the sash window were widely used with dormer windows.</p>
                            </article>
                          </a>
                    </div>
                    <div className="item-6">
                      <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Queen_Anne_style_architecture" className="card">
                        <div className="thumb"></div>
                        <article>
                          <h1>Victorian and Queen Anne</h1>
                          <p>May include asymmetrical façade, overhanging eaves, round, square, or polygonal towers, a porch covering part or all of the front facade, including the primary entrance area.</p>
                        </article>
                      </a>
                    </div>
                    <div className="item-7">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.thoughtco.com/spanish-style-homes-in-the-new-world-178209" className="card">
                        <div className="thumb"></div>
                        <article>
                          <h1>Spanish</h1>
                          <p>Influenced by cultural and climate conditions. Low pitched red roofs, simple form of subtly embellished at doorways and the ornamental ironwork serving as protective barrier over windows are common detail.</p>
                        </article>
                      </a>
                    </div>
                    <div className="item-8">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.housebeautiful.com/design-inspiration/a24516941/tudor-style-house/" className="card">
                        <div className="thumb"></div>
                        <article>
                          <h1>Tudor</h1>
                          <p>Has decorative trims on 2nd floors, prominent cross gables, Casement windows and windows grouped in rows of three or more.</p>
                        </article>
                      </a>
                    </div>
                  </div>
                  <div className="links">
                    <h2>[  REFERENCES  ]</h2><br/>
                    <span> [ 1 ] </span> <a href="https://www.partselect.com/JustForFun/Iconic-Home-Design-Styles.aspx">Iconic Home Design Styles</a><br/>
                    <span> [ 2 ] </span> <a href="https://www.amazon.com/American-House-Styles-Concise-Guide/dp/0393323250">American House Styles: A Concise Guide / John Milnes Baker, AIA.</a><br/>
                    <span> [ 3 ] </span> <a href="https://en.wikipedia.org/wiki/Queen_Anne_style_architecture_in_the_United_States">Queen Anne Style Architecture in the USA</a><br/>
                  </div>
            </div>
        )
    }
}