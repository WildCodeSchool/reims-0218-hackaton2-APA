import React,{Component} from 'react'

class ChoiceGender extends Component {
  constructor() {
    super()
    this.state= {
      type : ''
    }
  }

  displayMale(){
    console.log('male')
    
  }
  displayFemale(){
    console.log('female')
    
  }

  render(){
      return(
        <div>
          <p>Gender :{this.state.type}</p>
          <button onClick={this.displayMale}>Male</button>
          <button onClick={this.displayFemale}>Female</button>
          </div>
      );
  }

}
export default ChoiceGender;