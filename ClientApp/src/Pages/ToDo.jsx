import React, { Component } from 'react';
import axios from 'axios'

const toDoUrl = 'https://www.mountainproject.com/data/get-to-dos?email=danteharasz@gmail.com&key=200507880-8cf9c49dbbe6841799698503aad73a96'
const getById = 'https://www.mountainproject.com/data/get-routes?routeIds='
const apiKey = '&key=200507880-8cf9c49dbbe6841799698503aad73a96'
class ToDo extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      stuff: []
    }
  }
  componentDidMount(){
    axios.get(`${toDoUrl}`).then(resp => {
      console.log(resp.data)
      this.setState({
        data: resp.data.toDos
      })
    })
    axios.get(`${getById}${data}${apiKey}`).then(resp => {
      console.log(resp.data)
      this.setState({
        stuff: resp.data
      })
    })
  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
      </div>
    );
  }
}

export default ToDo;