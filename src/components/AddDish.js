import React from "react";
import {Modal, Button, Form} from "react-bootstrap";

export class AddDish extends React.Component {
    state = {
        dish:'',
        dishes: JSON.parse(localStorage.getItem('dishes')) || [],
        value: '',
        textareaValue: ''
    };

    handleChangeInput = (event) => {
        this.setState({value: event.target.value});
        this.setState({dish: {
                strMeal: this.state.value,
                strInstructions: this.state.textareaValue
            }})
    }
    handleChangeTextarea = (event) => {
        this.setState({textareaValue: event.target.value});
        this.setState({dish: {
                strMeal: this.state.value,
                strInstructions: this.state.textareaValue
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
    }

    render() {
        const {value, textareaValue} = this.state;

        return(
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add custom dish</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Dish title</Form.Label>
                            <Form.Control type="title" placeholder="Pasta" onChange={this.handleChangeInput}  value={value}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dish instruction</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={this.handleChangeTextarea} value={textareaValue}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={this.saveDish} href="/favorite">Save dish</Button>
                </Modal.Footer>
            </Modal>)
    }
}
