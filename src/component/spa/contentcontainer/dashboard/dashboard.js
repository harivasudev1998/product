import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Dashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          chartData:props.chartData
        }
      }
    
      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'Inventory'
      }
    
      render(){
        return (
          <div className="chart" style={{width:"60%",marginBottom:"80px"}}>
            <Bar
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Products Bought from  '+this.props.location,
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
            />
    
            <Line
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Products Bought from  '+this.props.location,
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
            />
    

            <Pie 
              data={this.state.chartData}
              options={{
                maintainAspectRatio:true,
                
                title:{
                  display:this.props.displayTitle,
                  text:'Products Bought from  '+this.props.location,
                  fontSize:25,
                //   maintainAspectRatio:100*200,
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
            />
           
          </div>
        )
      }
    }

export default Dashboard;
