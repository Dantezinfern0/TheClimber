// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'

// export default function WeatherForcast() {
//   const [temperature, setTemperature] = useState({})
//   const [zipCode, setZipCode] = useState('33704')
//   const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'

//   useEffect(() => {
//     Axios.get(
//       'HTTPS://api.openweathermap.org/data/2.5/weather?q=' + zipCode + apiKey
//     ).then(weather => {
//       setTemperature(weather.main.temp)
//       console.log(temperature)
//     })
//   }, [])

//   return (
//     <div>
//       <div>
//         <button>Search</button>
//         <input
//           type="text"
//           onChange={(e) => {
//             e.setZipCode
//           }}
//         />
//       </div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Temp. (C)</th>
//             <th>Temp. (F)</th>
//             <th>Summary</th>
//           </tr>
//         </thead>
//       </table>
//     </div>
//   )
// }
