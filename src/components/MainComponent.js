import React, { Component } from 'react';
import Menu  from './MenuComponent.js';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props){
    super(props)
    this.state = {
      dishes : DISHES,
    };
  }

  render(){

    const HomePage = () => <Home/>

    return(
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes = {this.state.dishes}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
      )
  }
}

export default Main;
