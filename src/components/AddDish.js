import React from "react";
import {Modal, Button, Form} from "react-bootstrap";

export class AddDish extends React.Component {
    state = {
        dish:'',
        dishes: JSON.parse(localStorage.getItem('dishes')) || [],
    };

    handleChangeInput = (event) => {
        this.setState({dish: {
                ...this.state.dish,
                strMeal: event.target.value
            }})
    }
    handleChangeTextarea = (event) => {
        this.setState({dish: {
                ...this.state.dish,
                strInstructions: event.target.value
            }})
    }
    handleClose = () => {
        this.props.handleShowFunc(false);
    }
    saveDish = () => {
        this.setState({
            dishes: this.state.dishes.concat(this.state.dish)
        },() => {
            localStorage.setItem('dishes', JSON.stringify(this.state.dishes))
        });
        this.handleClose();
        window.location.reload();
    }

    render() {
        return(
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add custom dish</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Dish title</Form.Label>
                            <Form.Control type="title" placeholder="Pasta" onChange={this.handleChangeInput} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dish instruction</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={this.handleChangeTextarea} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={this.saveDish} >Save dish</Button>
                </Modal.Footer>
            </Modal>)
    }
}
