import React from 'react';
import NavigationBar from './navbar';
import '../contentcontainer/css/App.css'
import { Navbar, Nav } from 'react-bootstrap'

class Header extends React.Component {
   
    render() { 
     

        return ( 
           
            <div className="head ">
            
             <NavigationBar ></NavigationBar>       
          
    
            </div>
           
         );
    }
}
 
export default Header;