import React from 'react';
import axios from "axios";
import { createHashHistory } from 'history'
import { withRouter } from "react-router-dom";




import ProductDetail from './productdetail';

class Product extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            deleteSuccess:false,
            myid:0,
            Stock:0
        }

       
    }
    


    intializeState=()=>{
        setTimeout(()=>{
            this.setState({deleteSuccess: false})
        }, 2000)
    }

    componentWillMount(){
        this.getAllProducts()
    }

    componentDidMount(){
        console.log("props");
        console.log(this.props)    
    }

    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({products: response.data})
                    console.log(this.state.products);
                }, error=>{
                    console.error(error);
                })
    }

    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/allproducts/' + id)
                .then(response=>{
                     console.log(response)
                     //show deleteSuccess message
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     //remove deleteSuccess message after 2000 millisecond
                     this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }

    addStockWithId=(id)=>{
        console.log('add stock for received id: ' + id);
        axios.get('http://localhost:3000/allproducts/'+id)
        .then(response=>{
            console.log(parseInt(response.data.stock)+1)
            axios.patch('http://localhost:3000/allproducts/' + id,
            {
                'stock':parseInt(response.data.stock)+1}
            )
        
            // this.setState({since:parseInt(response.data.since)+1})
                     this.getAllProducts()
                     window.location.reload(false);
                    },error=>{
                        console.log(error.error)
                    })
     }

    subStockWithId=(id)=>{
                    console.log('sub stock for received id: ' + id);
                    axios.get('http://localhost:3000/allproducts/'+id)
                    .then(response=>{
                        console.log(parseInt(response.data.stock)+1)
                        axios.patch('http://localhost:3000/allproducts/' + id,
                        {
                            'stock':parseInt(response.data.stock)-1}
                        )
                    
                        // this.setState({since:parseInt(response.data.since)+1})
                                 this.getAllProducts()
                                 window.location.reload(false);
                                },error=>{
                                    console.log(error.error)
                                })
     }

    renderAllProducts=()=>{
        return this.state.products.map(product=>{
            return(
              
                    <ProductDetail
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        stock={product.stock}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                        addId={this.addStockWithId}
                        subId={this.subStockWithId}
                    >

                    </ProductDetail>
                
            )
        })
    }

    openAddProduct=()=>{
        
        // this.props.history.push('/addproduct')
        history.push('/addproduct');
        
    }

    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit product with myid: ' + this.myid);
        console.log('Edit product with id: ' + id);
        
       this.props.history.push({
                                    pathname: '/editproduct', 
                                    state: {myid: id}
                                    
                                })
    }
  
    render() { 
        return ( 
    
               <div>
                    <button onClick={this.openAddProduct}>Add Product</button>
                    <br></br>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Stock</th>
                                <th colSpan='4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                {this.renderAllProducts()}
                        
                        </tbody>

                    </table>
                    {this.state.deleteSuccess &&
                    <div>
                          <h3>Product deleted success!!!!</h3>  
                    </div>
                    }
                </div>
      
         );
    }
}
 
// export default Product;
export default withRouter(Product);
export const history = createHashHistory();