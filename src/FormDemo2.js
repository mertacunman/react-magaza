import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input ,} from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", city: "", description: "", password: "" };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " saved on db!");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email giriniz"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Şifrenizi Giriniz"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Descripton</Label>
            <Input
              type="textarea"
              name="password"
              id="password"
              placeholder="Şifrenizi Giriniz"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>


          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.onChangeHandler}>
                <option>İstanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
                <option>Bursa</option>
                <option>Yozgat</option>
            </Input>  
          </FormGroup>

          <Button color="success" type="submit">Onayla</Button>
        </Form>

        
      </div>
    );
  }
}
