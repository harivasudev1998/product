import React from 'react';
import Product from './product';



class AllProducts extends React.Component {
   
    render() {
        const prstyle={
            color:"red",
            textAlign:"center",
            fontSize:'50px',
            fontFamily:'cursive'
        } 
        return (  
            <div style={{backgroundColor:"lightgoldenrodyellow",paddingTop:'10px',paddingBottom:'200px'}}>
                
                
                <h2 style={prstyle}>Products</h2>
                <br></br>
                <Product></Product>

                
            </div>
        );
    }
}
 
export default AllProducts;