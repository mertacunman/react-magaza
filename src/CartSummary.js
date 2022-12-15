import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class cartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz - {this.props.cart.length}
        </DropdownToggle>

        <DropdownMenu end>
          {this.props.cart.map((cart) => (
            <DropdownItem key={cart.product.id}>
            <Badge onClick={()=>this.props.removeFromCart(cart.product)} color="danger">X</Badge>
              {cart.product.productName}
              <Badge color="success">{cart.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider></DropdownItem>
          <DropdownItem >
           <Link to="cart">Go to Cart</Link>
            </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
}

    renderEmptyCart(){
        return(
        <NavItem>
            <NavLink>Sepet Boş</NavLink>
        </NavItem>
        )
    }
  
  render() {
    return (
      <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}</div>
    );
  }
}
