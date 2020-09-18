import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

//use react fragment to mix up/group together react components.. no need to add extra div
class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
                    </div>
             </Navbar>
             <Jumbotron>
                <div className="container">
                   <div className="row row-header">
                       <div className="col-12 col-sm-6">
                            <h1>Ristorant Con Fusion</h1>
                            <p>We take inspiration from the World's best Cuisines, and creat a unique fusion experience.  Our lipsmacking creatins will tickle your culinary senses!</p>
                       </div>                     
                    </div> 
                </div>
             </Jumbotron>
             </React.Fragment>
        );
    }
}

export default Header;