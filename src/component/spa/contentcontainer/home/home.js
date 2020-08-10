import React from 'react';
import { Chart } from 'react-google-charts'
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        stockList:{}
        
        
    }
}
componentWillMount() {
  this.stockData()
}

stockData = () => {
  axios.get('http://localhost:3000/allproducts')
      .then(response => {
          console.log(response.data)
          this.setState({ stockList: response.data.stock })
      }, error => { console.error(error) })
  
}

render() {

  return (
      <span className="chart">
          <Chart
              width='500px'
              height='270px'
              chartType="Bar"
              loader={<span>Loading Chart</span>}
              data={[
                  ['Stock',this.state.stockList]
               
              ]}
              options={{
                  chart: {
                      title: 'Stock of each products',
                     
                  },
              }}
          />
      </span>
  );
}
}
export default Home;