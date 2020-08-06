import React from 'react';
import axios from 'axios';


class EditProduct extends React.Component {
   
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            price:0,
            id: 0,
            rating:0,
            stock:0
        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allproducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.name,
                        price:response.data.price,
                        id: response.data.id,
                        rating:response.data.rating,
                        stock:response.data.stock,
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})
    }

    getRating=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({rating: event.target.value})
    }

    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock: event.target.value})
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})

    }

    editProduct=()=>{
        console.log('Edit product via axios and put')
        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "rating":this.state.rating,
            "stock":this.state.stock
        }
        axios.put('http://localhost:3000/allproducts/'+this.state.id, productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Pl. go to from home page!!!! </h1>
                </div>
            )
        }
        return ( 
            <div>
                <h1>Edit product with id:{this.props.location.state.myid}  </h1>
                <div>
                <h3>Edit Product!!!!</h3>
                <form>
                    <label>Id: </label>
                    <input type="text" value={this.state.id} readOnly></input>
                    <br></br>
                    <label>Name: </label>
                    <input type='text' id="productname" value={this.state.name}  onChange={this.getName}></input>
                    <br></br>
                    <label>Price: </label>
                    <input type='number' id="productprice" value={this.state.price}  onChange={this.getPrice}></input>
                    <br></br>
                    <label>Rating: </label>
                    <input type='number' id="productrating" value={this.state.rating}  onChange={this.getRating}></input>
                    <br></br>
                    <label>Stock: </label>
                    <input type='number' id="productstock" value={this.state.stock}  onChange={this.getStock}></input>
                    <br></br>
                    <button type="button" onClick={this.editProduct}>Edit Product</button>
                    <br></br>
                    {/* <div>
                        <h4>Preview</h4>
                        Product Name: {this.state.productname}
                        <br></br>
                        Product Price: {this.state.productprice}
                        <br></br>
                        Product Rating: {this.state.productrating}
                        <br></br>
                        Product Stock: {this.state.productstock}
                        <br></br>
                    </div> */}
                    
                </form>
            </div>
            </div>
         );
    }
}
 
export default EditProduct;