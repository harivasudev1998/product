import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    
    render() { 
        const logout = {
            color:"red",
            backgroundColor:"pink",
            display:'inline',
            marginLeft:'70%',
            width:'100px',
            height:'30px',
            textDecoration:'none',
            border:'none'
            
        }
        return ( 
            <div className="foot">

   
               

                <span>
             
                <button style={logout}><Link to="/login" style={{ textDecoration:'none'}}>Logout</Link></button>
            </span>

                </div>
         );
    }
}
 
export default Footer;