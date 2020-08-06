import React from 'react';
import Product from './product';
import Search from '../Search/search';


class AllProducts extends React.Component {
   
    render() { 
        return (  
            <div>
                <Search></Search>
                All products will be listed here!
                <Product price='10' rating='6' >HTML</Product>
                <Product price='20' rating='8'>Java</Product>

                
            </div>
        );
    }
}
 
export default AllProducts;