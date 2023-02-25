// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import News from './News';
 
export default class Navbar extends Component {
    const 
    constructor() {
        super();
        this.state = {
            searchtext: "ram",
        }
    }
    onchenge=(e)=>{
        this.setState({searchtext:e.target.value})
    }
    show=(e)=>{
        console.log("shiv",this.state.searchtext)
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">BaBa$News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" tabindex="-1" aria-disabled="true">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="d-flex" >
                                <input className="form-control me-2" type="text" placeholder="Search" value={this.state.searchtext} aria-label="Search" onChange={this.onchenge}/>
                                <button onClick={this.show}  className="btn btn-outline-success mx-0" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <News  value={this.props.state}/> */}
            </>
        )
    }
}
