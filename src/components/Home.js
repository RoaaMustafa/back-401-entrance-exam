import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dataArr:[]
        }
    }
    componentDidMount=async()=>{
        const server=process.env.REACT_APP_SERVER;
    console.log(`${server}`)
         await axios.get(`${server}/allData`)
    //    this.setState({
    //     dataArr:result.data
    //    })
        .then((result)=>{
            this.setState({
                dataArr:result.data.drinks
            })
        })
        console.log(this.state.dataArr);
    }
    addToFav=async(idx)=>{
        const server=process.env.REACT_APP_SERVER;
        const obj={
            strDrink:this.state.dataArr[idx].strDrink,
            strInstructions:this.state.dataArr[idx].strInstructions,
            strDrinkThumb:this.state.dataArr[idx].strDrinkThumb,
        }
        await axios.Cancel.post(`${server}/addFav`,obj)
    }
render(){
    return(
      <div>
<h4>MY Collection</h4>
<Row xs={1} md={3} className="g-4">
{this.state.dataArr.map((item,idx)=>(
    <Col>
    <Item 
    key={idx}
    idx={idx}
    item={item}
    addToFav={this.addToFav}
    />
  </Col> 
))
}

</Row>

      </div>
    );
}

 }
  export default Home;