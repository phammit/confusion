import React, { Component, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js';
import DishDetail from './DishDetailComponent';


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
            selectedDish: null
        };
      
    }

    
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }


    render(){
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                    {console.log(this.state.setSelectedDish)}
                    {this.state.selectedDish != null &&
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} />
                }
            </div>
        );
    }
}

export default Main;