import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"pink",
            display:'inline',
            padding: '10px',
            margin: '5px'
            
        }


        return (  
            <Navbar>
            <span className="navbarview">
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                        <Link to="/" style={{ textDecoration:'none'}}>Home</Link>
                    </li>

                    <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>Products</Link>
                    </li>

                

                    <li style={menuitem}>
                        <Link to="/addproduct" style={{ textDecoration:'none'}}>Add product</Link>
                    </li>

                    <li style={menuitem}>
                        <Link to="/register" style={{ textDecoration:'none'}}>Register</Link>
                    </li>
                    
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none'}}>Login</Link>
                    </li>
                    
                </ul>
            </span>
</Navbar>
        );
    }
}
 
export default NavigationBar;