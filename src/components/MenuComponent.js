import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


//class vs function component
class Menu extends Component {
    //all class components need to call super
    constructor(props) {
        super(props);

        console.log("Menu Components constructor is invoked");
    }

    componentDidMount() {
        console.log("ComponentDidMount is invoked");
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }


    //all class componets need to implement render () method
    //want to display list of dishes
    //Media component from 'reactstrap'
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>                      
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Menu Components render is invoked");

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>          
            </div>
        );
    }

}

export default Menu;