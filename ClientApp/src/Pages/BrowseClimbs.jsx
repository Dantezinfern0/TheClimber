import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class BrowseClimbs extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      info: []
    })
  }

  componentDidMount(){
    axios.get('api/climb/getall').then(resp => {
      this.setState({
        info: resp.data
      })
    })
  }
  render() {
    return (
      <div>
      <h2>List Of Climbs</h2>
      <ul>
        {this.state.info.map(m => {
          return (
            <Link props={m.Id} to={`/${m.routeName}`}>
              <li> {m.routeName} </li>
            </Link>
          )
        })}
      </ul>
      </div>
    );
  }
}

export default BrowseClimbs;




// import React, { useState, useEffect } from 'react'

// export default function BrowseClimbs() {
//   const [theClimbs, setTheClimbs] = useState([])

//   useEffect(() => {
//     axios.get('api/climb/getall').then(resp => {
//       setTheClimbs(resp.data)
//       console.log(resp.data)
//     })
//   }, [])

//   return (
//     <div>
//       <h2>List Of Climbs</h2>
//       <ul>
//         {theClimbs.map(m => {
//           return (
//             <Link props={m.routeId} to={`/${m.routeName}`}>
//               <li> {m.routeName} </li>
//             </Link>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }
