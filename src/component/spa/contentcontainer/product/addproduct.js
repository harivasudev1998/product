import React from 'react';
import axios from 'axios';
import '../css/App.css';;

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            name:'',
            price:0,
            rating:0,
            stock:0,
            image:'',
            "validation": true,

        
        }
    }


    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
        this.validationfn()

    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})
        this.validationfn()
    }

    getRating=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({rating: event.target.value})
        this.validationfn()
    }

    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock: event.target.value})
        this.validationfn()
    }

    addProduct=()=>{
        console.log('Add product via axios and post')
        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "rating":this.state.rating,
            "stock":this.state.stock,
            "image":this.state.image
        }
        axios.post('http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.validationfn()
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
    }

    validationfn = () => {
        setTimeout(() => {
            console.log(this.state)
            if ( (this.state.name === "") || this.state.price === "" || this.state.rating ===""||this.state.image==="" || this.state.price <= 0 || this.state.stock <= 0 ) {
                console.log("fail")
                this.setState({ validation: true })
            } else {
                console.log("success")
                this.setState({ validation: false })
            }
        }, 10)


    }
    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({image: event.target.value.substr(12)})
        this.validationfn()
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
                {this.state.validation && <h3 className="error">All the below details are required </h3>}
                <form className="container">
                    <b><label>Name: </label></b>
                    <input type='text' id="name" onChange={this.getName}></input>
                    
                    <br></br>
                    <br></br>
                    <b><label>Price: </label></b>
                    <input type='number' id="price" onChange={this.getPrice}></input>
                    
                    <br></br>
                    <br></br>
                    <b><label>Stock: </label></b>
                    <input type='number' id="stock" onChange={this.getStock}></input>
                    
                    <br></br>
                    <br></br>
                    <b><label>Product Image: </label></b>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br>
                    <br></br>
                    <b><label>Rating: </label></b>
                    <input type='number' id="rating" onChange={this.getRating}></input>
                    
                    <br></br>
                    <br></br>
                    <button type="button" disabled={this.state.validation} onClick={this.addProduct} style={buttonclr}>Add Product</button>
                    <br></br>
                    <br></br>
                   
                    
                </form>
            </div>
          );
    }
}
 
export default AddProduct;