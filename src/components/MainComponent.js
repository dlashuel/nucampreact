import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponen';
import CampsiteInfo from './CampsiteInfoComponent';
import Contact from './ContactComponent';
import About from './AboutComponent'
import Home from './HomeComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites.js'; // data
import { COMMENTS } from '../shared/COMMENTS.js';
import { PARTNERS } from '../shared/PARTNERS';
import { PROMOTIONS } from '../shared/PROMOTIONS';


class Main extends Component{
    constructor(props){
        super(props);
        this.state= {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        }
    }


    render(){
        const CampsiteWithId = ({match}) => {
            console.log("match: ", match);
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.find(campsite => campsite.id === +match.params.id)}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.id)}
                />
            );
        };    
        const HomePage = () => {
            return (
                <Home 
                campsite={this.state.campsites.find(campsite => campsite.featured)}
                promotion={this.state.promotions.find(promotion => promotion.featured)}
                partner={this.state.partners.find(partner => partner.featured)}
                />
            )
        }
        return(
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path ='/directory' render={()=> <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:id' component={CampsiteWithId} />
                    <Route exact path='/about' render={()=> <About partners={this.state.partners}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main

