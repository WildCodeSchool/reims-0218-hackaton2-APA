import React, { Component } from 'react'

class StarWarsApi extends Component {

  render() {
    return <div>StarLover:</div>
  }

  componentDidMount() {
    console.log('StarLover did mount')
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    fetch(url)
    .then(res => res.json())
    .then(starwars => console.log(starwars))
  }
}


export default StarWarsApi

