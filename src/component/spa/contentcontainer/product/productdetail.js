import React from 'react';
// import axios from 'axios';
import { createHashHistory } from 'history'


class ProductDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            name:this.props.name,
            price:this.props.price,
            rating:this.props.rating,
            stock:this.props.stock
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
      
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.state.price}</td>
                <td>{this.state.rating}</td>
                <td>{this.state.stock}</td>
                <td>
                    <button onClick={this.stockAdd}>Stock + </button>
                </td>
                <td>
                    <button onClick={this.stockSub}>Stock - </button>
                </td>
                <td>
                    <button onClick={this.editProductWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentProduct}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default ProductDetail;
export const history = createHashHistory()