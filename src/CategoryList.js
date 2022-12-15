import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount(){
    this.getCategories();
  }

  getCategories = ()=>{
    fetch("http://localhost:3000/categories").then(res => res.json()).then(res => this.setState({categories:res})).catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
        <h3> {this.props.info.title} </h3>
        <ListGroup>
            {this.state.categories.map(categories =>{
            return <ListGroupItem active={categories.categoryName === this.props.currentCategory?true:false } key={categories.categoryId} onClick={()=>{this.props.changeCategory(categories)}}> {categories.categoryName} </ListGroupItem>
            })}
        </ListGroup>
        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
