import React from 'react';
import Dashboard from '../dashboard/dashboard';


class Home extends React.Component {
    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
      
        this.getChartData();
      }

   
    
      getChartData(){
        // Ajax calls here
        console.log(this.state.products);
        this.setState({
          chartData:{
            labels: ['One plus Nord 5G', 'Redmi Note 8', 'Samsung Galaxy M31', 'OPPO F15'],
            datasets:[
              {
                label:'Stock Available',
                data:[
                  107,
                  162,
                  186,
                  146
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                //   'rgba(153, 102, 255, 0.6)',
                //   'rgba(255, 159, 64, 0.6)',
                //   'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }
    
      render() {
        const dash={
          textAlign:'center',
          backgroundColor:'lightblue',
          fontSize:'bold',
          fontSize:'50px',
          fontFamily:'cursive'
        }
        return (
         
          <div >
            <h3 style={dash}>Dashboard</h3>
            <Dashboard chartData={this.state.chartData} location="Inventory" legendPosition="top"/>
          </div>
        );
      }
    }
export default Home;