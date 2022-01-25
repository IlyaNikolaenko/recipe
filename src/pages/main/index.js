import React from "react";
import {Navi} from "../../components/Navi";
import {Card, Button} from "react-bootstrap";
import logo from "../../logo.svg";

export class Main extends React.Component {
    state = {
        dish: '',
        dishes: JSON.parse(localStorage.getItem('dishes')) || []
    };

    getDish = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((data) => data.json())
            .then((result) => this.setState({dish: result.meals[0]}))
            .catch((error) => console.log(error));
    }
    saveDish = () => {
        this.setState({
            dishes: this.state.dishes.concat(this.state.dish)
        },() => {
            localStorage.setItem('dishes', JSON.stringify(this.state.dishes))
        });
        this.getDish();
    }
    componentDidMount() {
        this.getDish();
    }
    render() {
        const {dish} = this.state;
        return (
            <>
                <Navi />
                <br/><br/>
                <Card style={{width: "30rem"}} bg="light" className='mx-auto my-3 '>
                    <Card.Img variant="top" src={dish.strImageSource || logo} />
                    <Card.Body>
                        <Card.Title>{dish.strMeal}</Card.Title>
                        <Card.Text>{dish.strInstructions}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button className='px-5 mx-2' variant='dark' onClick={this.getDish}>Skip</Button>
                        <Button className='px-5 mx-2' variant='dark' onClick={this.saveDish}>Like</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}