import React, { Component } from 'react'
import {Button, Table,} from "reactstrap";
export default class CartList extends Component {
    renderCart(){
        return(
        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Category Id</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>quantity</th>
                
                </tr>
            </thead>
            <tbody>
               {
                this.props.cart.map(cartItem =>(
                    <tr key={cartItem.product.id}>
                        <td>{cartItem.product.id}</td>
                        <td>{cartItem.product.categoryId}</td>
                        <td>{cartItem.product.productName}</td>
                        <td>{cartItem.product.unitPrice}</td>
                        <td>{cartItem.quantity}</td>
                        <td><Button onClick={()=>this.props.removeFromCart(cartItem.product)} color="danger" size='sm'>Sepetten Kaldır</Button></td>
                    </tr>
                ))
               }
            </tbody>
        </Table>
    )
    }


  render() {
    return (
      <div>{this.renderCart()}</div>
    )
  }
}
