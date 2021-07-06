import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Updateform from "./UpdateForm";

class Fav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favArr: [],
      index:-1,
      showModal:false,
      strDrink:"",
      strInstructions:"",
      strDrinkThumb:""
    };
  }
  closeHandler=()=>{
    this.setState({
      showModal:false
    })
  }

  componentDidMount = async() => {
    const server = process.env.REACT_APP_SERVER;
    await axios.get(`${server}/getFav`).then((result) => {
      this.setState({
        favArr: result.data,
      });
    });
  };
  deleteFav =async(id)=>{
    const server = process.env.REACT_APP_SERVER;
    await axios.delete(`${server}/deleteFav`)
    .then((result)=>{
        this.setState({
            favArr: result.data,
        })
    })
  }
  showUpdateModal=(idx)=>{
    this.setState({
      favArr:true,
      index:idx,
      strDrink:this.state.favArr[idx].strDrink,
      strInstructions:this.state.favArr[idx].strInstructions,
      strDrinkThumb:this.state.favArr[idx].strDrinkThumb,
    })
  }
  updateFav=async(e)=>{
    e.preventDefault();
    const server = process.env.REACT_APP_SERVER;
    const obj={
      strDrink:e.target.strDrink.value,
      strInstructions:e.target.strInstructions.value,
      strDrinkThumb:e.target.strDrinkThumb.value,
      id:this.state.favArr[this.state.index]['_id']
    }
    await axios.put(`${server}/updatFav`,obj)
    .then((result)=>{
      this.setState({
        favArr:result.data,
        showModal:false
      })
    })
  }
  render() {
    return (
      <div>
        <h4>My Favorite</h4>
        <Row xs={1} md={3} className="g-4">
            {this.state.favArr.map((item,idx)=>(
                <Col>
                <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" src={item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{item.drinks.strDrink}</Card.Title>
            <Card.Text>{item.drinks.strInstructions}</Card.Text>
            <Button variant="primary" onClick={()=>this.deleteFav(item._id)}>Delete</Button>
            <Button variant="primary" onClick={()=>this.showUpdateModal(idx)}>Update</Button>
          </Card.Body>
        </Card>
                </Col>
            ))}
        </Row>
        <Updateform
        show={this.state.showModal}
        close={this.closeHandler}
        updateFav={this.updateFav}
        idDrink={this.state.idDrink}
        strInstructions={this.state.strInstructions}
        strDrinkThumb={this.state.strDrinkThumb}
        />
      </div>
    );
  }
}
export default Fav;
