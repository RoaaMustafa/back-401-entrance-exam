import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Item extends React.Component {

render(){
    return(
      <div>
<Card style={{ width: '18rem' }} key={this.props.idx}>
  <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{this.props.item.strDrink}</Card.Title>
    <Card.Text>
    {this.props.item.strInstructions}
    </Card.Text>
    <Button variant="primary">Add To Favorite</Button>
  </Card.Body>
</Card>
          
      </div>
    );
}

 }
  export default Item;