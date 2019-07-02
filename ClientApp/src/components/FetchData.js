// import React, { Component } from 'react';

// export class FetchData extends Component {
//   static displayName = FetchData.name;
  
//   constructor (props) {
//     super(props);
//     this.state = {
//       forecasts: [],
//       loading: true,
//       temperature: {},
//       userInput: '33704'
//     }
//   }
  
//   // convert kelvin to F
//   // let t = Math.ceil((temperature - 273.15) * 9) / 5 + 32
  
//   // fetch('api/SampleData/WeatherForecasts')
//   //   .then(response => response.json())
//   //   .then(data => {
//     //     this.setState({ forecasts: data, loading: false });
//     //   });
//     static renderForecastsTable (forecasts) {
//       const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'
      
//         fetch('HTTPS://api.openweathermap.org/data/2.5/weather?q=' + userInput + apiKey)
//           .then(resp => {
//             return resp.json()
//           })
//           .then(weather => {
//             console.log(weather)
//             this.setState({
//               temperature : weather.main.temp
    
//             })
//           }
//         }
//     return (
//       <div>
//         <button>Search</button>
//         <input type="text" onChange={userInput} />
//       </div>
//       <table className='table table-striped'>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Temp. (C)</th>
//             <th>Temp. (F)</th>
//             <th>Summary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {forecasts.map(forecast =>
//             <tr key={forecast.dateFormatted}>
//               <td>{forecast.dateFormatted}</td>
//               <td>{forecast.temperatureC}</td>
//               <td>{forecast.temperatureF}</td>
//               <td>{forecast.summary}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     )
  
  
//   render () {
//     let contents = this.state.loading
//     ? <p><em>Loading...</em></p>
//     : FetchData.renderForecastsTable(this.state.forecasts);
    
//     return (
//       <div>
//         <h1>Weather forecast</h1>
//         <p>This component demonstrates fetching data from the server.</p>
//         {contents}
//       </div>
//     );
//   }
// }
