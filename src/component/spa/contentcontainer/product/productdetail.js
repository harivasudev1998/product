import React from 'react';
// import axios from 'axios';
import { createHashHistory } from 'history'
import '../css/App.css';;



class ProductDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            name:this.props.name,
            price:this.props.price,
            rating:this.props.rating,
            stock:this.props.stock,
            img:this.props.productimage
        }
       
    }



    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editProductWithId=()=>{
        console.log("edit product with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

  
    stockAdd=()=>{
        console.log("edit product with id: " + this.props.id);
        this.props.addId(this.props.id)
        history.push('/products')
        
    

}

    stockSub=()=>{

        console.log("edit product with id: " + this.props.id);
        this.props.subId(this.props.id)
        history.push('/products')
    } 
    render() { 
        let imgStyle ={
            width:'100%',
            borderRadius:'10px'
        }
     
            
            
        // } 
      
      
        return ( 
      
        <div className="card">
        <span className=" cards left">
                <img className="cardimg" src={"images/" + this.props.img} style={imgStyle}
                alt="productImage"></img>
        </span>
        <span className="cards right">
            <br></br><h3 className="cardtitle">{this.props.name}</h3><br></br>
            <h4 className="carditem"><span className="left">Rs: {this.props.price}</span></h4><br></br>
            <h4 className="carditem"><span className="left">Stock: {this.props.stock}</span><span className="right">Rating: {this.props.rating}</span></h4><br></br>
            <h4 className="carditem"><span><button className="left buttonClr" onClick={this.stockAdd} >Stock +</button>
            <button className="left buttonClr" onClick={this.stockSub} >Stock -</button></span></h4>
            <h4 className="carditem"><span>
            <button className="right buttonClr" onClick={this.deleteCurrentProduct} >Delete</button><button className="right buttonClr" onClick={this.editProductWithId} >Edit</button></span></h4>
        </span>
    </div>
        )
    }
       
}
 
export default ProductDetail;
export const history = createHashHistory()