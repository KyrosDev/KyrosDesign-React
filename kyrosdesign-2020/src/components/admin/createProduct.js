import React, { Component } from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);
    this.onChangeWorktime = this.onChangeWorktime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);

    this.state = {
      image: '',
      name: '',
      description: '',
      price: '',
      availability: '',
      worktime: ''
    }
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDesc(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangeAvailability(e) {
    this.setState({
      availability: e.target.value
    })
  }

  onChangeWorktime(e) {
    this.setState({
      worktime: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      image: this.state.image,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      availability: this.state.availability,
      worktime: this.state.worktime,
    }

    axios.post('http://localhost:5000/products/new', product)
      .then(res => console.log(res.data));

    this.setState({
      image: '',
      name: '',
      description: '',
      price: '',
      availability: '',
      worktime: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <ImageUploader withIcon={false}
                buttonText='Choose images'
                imgExtension={['.jpg', "jpeg" , '.png',]}
                maxFileSize={5242880} />
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDesc}
                />
            <label>Price: </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.price}
                onChange={this.onChangePrice}
                /><br/>
            <label>Availability: </label>
            <input  type="text"
                className="form-control"
                value={this.state.availability}
                onChange={this.onChangeAvailability}
                />
            <label>Worktime: </label>
            <input  type="text"
                value={this.state.worktime}
                onChange={this.onChangeWorktime}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create a product" className="" />
          </div>
        </form>
      </div>
    )
  }
}