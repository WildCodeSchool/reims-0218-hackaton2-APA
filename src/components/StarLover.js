import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'

class StarLover extends Component {
    render() {
        return <ListGroupItem>StarLover</ListGroupItem>
    }

    componentDidMount() {
        console.log(`nous sommes connectés à l'API`)
        const url = 'https://akabab.github.io/starwars-api/api/all.json'
        fetch(url)
        .then(res => res.json())
        .then(starwars => console.log(starwars))
    }
}
export default StarLover