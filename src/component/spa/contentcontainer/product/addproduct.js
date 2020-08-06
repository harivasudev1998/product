import React from 'react';
import axios from 'axios';

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            productname:'',
            productprice:0,
            productrating:0,
            productstock:0
        }
    }


    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productname: event.target.value})

    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productprice: event.target.value})
    }

    getRating=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productrating: event.target.value})
    }

    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productstock: event.target.value})
    }

    addProduct=()=>{
        console.log('Add product via axios and post')
        let productRequestBody = {
            "name": this.state.productname,
            "price": this.state.productprice,
            "rating":this.state.productrating,
            "stock":this.state.productstock
        }
        axios.post('http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }
    
    render() { 
      
        
        return (
            <div>
                <h3>Add Product!!!!</h3>
                <form>
                    <label>Name: </label>
                    <input type='text' id="productname" onChange={this.getName}></input>
                    <br></br>
                    <label>Price: </label>
                    <input type='number' id="productprice" onChange={this.getPrice}></input>
                    <br></br>
                    <label>Stock: </label>
                    <input type='number' id="productstock" onChange={this.getStock}></input>
                    <br></br>
                    <label>Rating: </label>
                    <input type='number' id="productrating" onChange={this.getRating}></input>
                    <br></br>
                    <button type="button" onClick={this.addProduct}>Add Product</button>
                    <br></br>
                    <div>
                        <h4>Preview</h4>
                        Product Name: {this.state.productname}
                        <br></br>
                        Product Price: {this.state.productprice}
                        <br></br>
                        Product stock: {this.state.productstock}
                        <br></br>
                        Product Rating: {this.state.productrating}
                        <br></br>
                    </div>
                    
                </form>
            </div>
          );
    }
}
 
export default AddProduct;