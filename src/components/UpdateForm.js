import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

class Updateform extends React.Component {
render(){
    return(
      <div>
<Modal show={this.props.show} onHide={this.props.close}>
  <Modal.Header closeButton>
    <Modal.Title>Update Form</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={this.props.updateFav}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" name="strDrink" defaultValue={this.props.strDrink}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Instructions</Form.Label>
    <Form.Control type="text" placeholder="Password"  name="strInstructions" defaultValue={this.props.strInstructions}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>img Url</Form.Label>
    <Form.Control type="text" placeholder="Password" name="strDrinkThumb" defaultValue={this.props.strDrinkThumb}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
  </Modal.Body>

  <Modal.Footer>
  </Modal.Footer>
</Modal>
          
      </div>
    );
}

 }
  export default Updateform;