import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    //since we know the parameters being passes, just use their names
    //do need to enclose in { } if we are extracting them from props here
    function RenderMenuItem({dish, onClick}) {
        return(
            <Card onClick={() => onClick(dish.id)}>                      
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    //another way to implement a functional component
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });
    
        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>          
            </div>
        );
    }



export default Menu;