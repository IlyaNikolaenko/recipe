import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {AddDish} from "./AddDish";


export class Navi extends React.Component {
    state = {show: false}
    handleShow(val) {
        this.setState({show: val})
    }
    render() {
        const {fav} = this.props
        return (
            <Navbar className='justify-content-lg-center' fixed='top' bg="dark" variant='dark'>
                    <Nav>
                        <Nav.Link href="#/">Random dish</Nav.Link>
                        <Nav.Link href="#/favorite">Favorite dishes</Nav.Link>
                        {fav &&
                            <>
                                <Nav.Link onClick={() => this.handleShow(true)}>Add dish</Nav.Link>
                                <AddDish handleShowFunc = {(val) => this.handleShow(val)} show ={this.state.show}/>
                            </>
                        }
                    </Nav>
            </Navbar>
        )
    }
}