import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    commentSection = this.props.dish.comments.map((comment) => {
        return(
            <CardBody key={comment.id}>
                <CardText>{comment.comment}</CardText>
                <CardText>{comment.author}, {comment.date}</CardText>
            </CardBody>
        );  
    });

    render() {
       
            return(
                <div className="col-12 col-md-5 m-11">
                    <CardGroup>
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle>Comments</CardTitle>
                        {this.commentSection}
                    </Card>
                    </CardGroup>
                </div>
            );
        
    }   
     
}

export default DishDetail;