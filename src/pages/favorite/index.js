import React from "react";
import {Navi} from "../../components/Navi";
import {Card, Col, Row} from "react-bootstrap";
import logo from "../../logo.svg";

export class Favorite extends React.Component {
    state = {dishes: JSON.parse(localStorage.getItem('dishes')) || []}

    render() {
        const {dishes} =this.state;
        return (
            <>
                <Navi fav={true}/>
                <br/><br/>
                <Row sm={1} md={2} lg={3} xl={4} className="mt-2 mx-auto">
                    {dishes.map((item, index) => (
                        <Col key={index}>
                            <Card style={{width: "20rem"}} bg="light" className='my-2 mx-auto'>
                                <Card.Img variant="top" src={item.strImageSource || logo} />
                                <Card.Body>
                                    <Card.Title>{item.strMeal}</Card.Title>
                                    <Card.Text>{item.strInstructions}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}