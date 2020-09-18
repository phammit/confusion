import React, { Component, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


//main component will be responsible to things related to state
class Main extends Component {
//course uses class component to deal with state.  can use funtion component and state with hooks
//useState is a hook that lets you use state in a function component
// const[] is called "array destructuring"
//const[dishes, setDishes] = useState(DISHES);
//const[selectedDish, setSelectedDish] = useState(null);

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
        };
    }

    render() {

        //2 ways to return a function component.. here and inline  we haven't imported our Home Component yet
        const HomePage = () => {
            return(
                <Home />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;