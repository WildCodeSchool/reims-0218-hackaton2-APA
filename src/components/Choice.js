import React, { Component } from 'react'


class Choice extends Component {

  render() {
    return <div>Ta liste intergalactique sera : </div>
  }

  componentDidMount() {
    console.log('StarLover did mount')
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    fetch(url)
    .then(res => res.json())
    .then(loverRes => {this.setState(prevState => ({lovers :loverRes}))})
    .then(loversRes => console.log(loversRes))
  }

}


export default Choice

