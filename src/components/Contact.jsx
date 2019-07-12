import React from 'react';
import '../styles/Tabs.css';
import logo from '../assets/logo.png';
import Header from './Header';

export default class Contact extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            email:"responsive-architecture@illinois.edu",
            address:"20a Architecture Building, 608 East Lorado Taft Drive, MC-621, Champaign, IL 61820 USA",
            phone:"+1 (217) 300-4886", 
            fax:"+1 (217) 244-2900"
        };
    }
    render() {
        return (
            <div className="container">
                <Header />
                <img alt="logo" className="logo" src={logo}/>
                <h1 className="title">Contact</h1>

                <p className="content">To request a consulting or more information regarding the tool, please contact the Team from following contact information below:</p>

                <form>
                    <div>
                      <label htmlFor="emailInput">Email</label>
                        <div type="text" name="name" value={this.state.email} id="emailInput"><a href={"mailto:" + this.state.email}>{this.state.email}</a></div>
                      </div>
                      <div>
                        <label htmlFor="addressInput">Address</label>
                        <textarea disabled name="address" type="text" value={this.state.address} id="addressInput" />
                      </div>
                      <div>
                        <label htmlFor="phoneInput">Phone</label>
                        <input disabled name="phone" type="text" value={this.state.phone} id="phoneInput"/>
                      </div>   
                      <div>
                        <label htmlFor="faxInput">Fax</label>
                        <input disabled name="fax" type="text" value={this.state.fax} id="faxInput"/>
                      </div>                     
                </form>
            </div>
        )
    }
}