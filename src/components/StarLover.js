import React, { Component } from 'react'
//import { ListGroupItem } from 'reactstrap'

class StarLover extends Component {

    constructor() {
        super()
        this.state = {
            loading: true, //affichage conditionnel
            starlover: {
                name: ''
            }
        }
    }
    //on ajoute StarLover à Component / on surcharge 
    render() {
        return <div> 
            { this.state.loading && <p>Loading</p> }
            <p>StarLover: {this.state.starlover.name}</p>
        </div>
    }
             
    //on fait l'appel à l'API lorsque que le composant StarLover est présent dans App.js
    componentDidMount() {
        console.log(`nous sommes connectés à l'API`)
        const url = 'https://akabab.github.io/starwars-api/api/id/1.json'
        fetch(url)
        .then(res => res.json())
        .then(starwarsRes => {
            console.log(starwarsRes)
            return this.setState(
            prevState => ({ 
                loading: false,
                starlover: starwarsRes
            })
        )})
    }
}

export default StarLover