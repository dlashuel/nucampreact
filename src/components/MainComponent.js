import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponen';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './Home.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites.js'; // data



class Main extends Component{
    constructor(props){
        super(props);
        this.state= {
            campsites: CAMPSITES,
            selectedCampsite: null
        }
    }
    onCampsiteSelect(campsiteId){
        this.setState({selectedCampsite: campsiteId})
    }

    render(){
        const HomePage = () => {
            return (
                <Home />
            )
        }
        return(
            <div className="App">
                <Header />
                <Directory campsites={this.state.campsites} onClick= {campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
                <Footer />
            </div>
        )
    }
}

export default Main

