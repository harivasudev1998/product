import React from 'react';
import axios from 'axios';
import 'C:/React-redux/react-app/reactspa/src/App.css';

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            productname:'',
            productprice:0,
            productrating:0,
            productstock:0,
            productimage:''
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
            "stock":this.state.productstock,
            "productimage":this.state.productimage
        }
        axios.post('http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
    }

    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({productimage: event.target.value.substr(12)})
    }
    
    render() { 
        const buttonclr={
            backgroundColor:"brown",
            color:"white",
            padding:'15px',
            // margin:'10px',
            border:'none',
            opacity: 0.9
           
            
        } 
        
        return (
            <div className="contain" style={{backgroundColor:"lightgoldenrodyellow",paddingTop:'10px',paddingBottom:'220px'}}>
                <h3 style={{color:"blue"}}>Add Product</h3>
                <form className="container">
                    <b><label>Name: </label></b>
                    <input type='text' id="productname" onChange={this.getName}></input>
                    <br></br>
                    <br></br>
                    <b><label>Price: </label></b>
                    <input type='number' id="productprice" onChange={this.getPrice}></input>
                    <br></br>
                    <br></br>
                    <b><label>Stock: </label></b>
                    <input type='number' id="productstock" onChange={this.getStock}></input>
                    <br></br>
                    <br></br>
                    <b><label>Product Image: </label></b>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br>
                    <br></br>
                    <b><label>Rating: </label></b>
                    <input type='number' id="productrating" onChange={this.getRating}></input>
                    <br></br>
                    <br></br>
                    <button type="button" onClick={this.addProduct} style={buttonclr}>Add Product</button>
                    <br></br>
                    <br></br>
                    {/* <div>
                        <h4>Preview</h4>
                        Product Name: {this.state.productname}
                        <br></br>
                        Product Price: {this.state.productprice}
                        <br></br>
                        Product stock: {this.state.productstock}
                        <br></br>
                        Product Rating: {this.state.productrating}
                        <br></br>
                    </div> */}
                    
                </form>
            </div>
          );
    }
}
 
export default AddProduct;