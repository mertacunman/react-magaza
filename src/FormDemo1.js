import React, { Component } from 'react'
import {Button, Form,Input} from 'reactstrap'

export default class FormDemo1 extends Component {

    state={userName:'',city:""}

    onChangeHandeler = (event)=>{

        let name = event.target.name;
        let value = event.target.value
        
        this.setState({[name]:value})
    }

    alertUsername = (event)=>{
        event.preventDefault(); 
        alert(this.state.userName +" " + this.state.city)
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.alertUsername}>
            <h2>Username</h2>
            <Input name='userName' onChange={this.onChangeHandeler} type='text'></Input>
            <h3>User Name is {this.state.userName}</h3>


            <h2>City</h2>
            <Input name='city' onChange={this.onChangeHandeler} type='text'></Input>
            <h3>City {this.state.city}</h3>

            <Button color="success" type='submit'>Onayla</Button>
        </Form> 
      </div>
    )
  }
}
