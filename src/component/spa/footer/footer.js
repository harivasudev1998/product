import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    
    render() { 
        const logout = {
            color:"red",
            backgroundColor:"pink",
            display:'inline',
            padding: '10px',
            margin: ''
          
            
        }
        return ( 
            <div className="foot">

   
               

                <span>
                <ul style={{listStyleType:'none',position:"fixed",bottom:"0"}}>
                    <li style={logout}>
                        <Link to="/login" style={{ textDecoration:'none'}}>Logout</Link>
                    </li>
                </ul>
            </span>

                </div>
         );
    }
}
 
export default Footer;