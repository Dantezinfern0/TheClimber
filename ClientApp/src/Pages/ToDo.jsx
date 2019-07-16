import React, { Component } from 'react'
import Footer from '../components/Footer.jsx'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './ToDo.css'

const toDoUrl =
  'https://www.mountainproject.com/data/get-to-dos?email=danteharasz@gmail.com&key=200507880-8cf9c49dbbe6841799698503aad73a96'
const getById = 'https://www.mountainproject.com/data/get-routes?routeIds='
const apiKey = '&key=200507880-8cf9c49dbbe6841799698503aad73a96'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stuff: []
    }
  }
  componentDidMount() {
    axios.get(`${toDoUrl}`).then(resp => {
      console.log(resp.data)
      axios
        .get(`${getById}${resp.data.toDos.join(',')}${apiKey}`)
        .then(resp => {
          console.log(resp.data)
          this.setState({
            stuff: resp.data.routes
          })
        })
    })
  }
  render() {
    return (
      <div>
        <h2 className="title-effect">To Do List</h2>
        <h6>Brought to you by MountainProject.com</h6>
        <div className="thin-black-border">
        {this.state.stuff.map(m => {
          return <Link key={m.id} to={`/route/${m.id}`}>
            <p>{m.name}--{m.rating}--{m.type}</p>
            </Link>
        })}
        </div>
        <Footer />
      </div>
    )
  }
}

export default ToDo
