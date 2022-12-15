import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Router, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    productInfo: { title: "Products List" },
    categoryInfo: { title: "Category List" },
    productList: [],
    currentCategory: "",
    cart: [],
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    const checkItem = newCart.find((c) => c.product === product);
    if (checkItem) {
      checkItem.quantity = checkItem.quantity + 1;
    } else {
      newCart.push({ product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart ", 1);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  componentDidMount() {
    this.productList();
  }

  productList = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "/?categoryId=" + categoryId;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res }));
  };

  changeCategory = (category) => {
    this.productList(category.id);
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    return (
      <div>
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navi>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.state.categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
              <Route exact path="/" render={props=>(
              <ProductList
                {...props}
                addToCart={this.addToCart}
                productList={this.state.productList}
                currentCategory={this.state.currentCategory}
                info={this.state.productInfo}
              ></ProductList> 
              )}></Route>
              <Route exact path="/cart" render={props=>(
              <CartList
                {...props}
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              ></CartList>)}></Route>
              <Route exact path="/form1" component={FormDemo1}></Route>
              <Route exact path="/form2" component={FormDemo2}></Route>
              <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
