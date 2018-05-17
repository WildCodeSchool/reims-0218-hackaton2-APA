import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'

class StarLover extends Component {
    render() {
        return <ListGroupItem>StarLover</ListGroupItem>
    }

    componentDidMount() {
        console.log(`nous sommes connectés à l'API`)
    }
}
export default StarLover