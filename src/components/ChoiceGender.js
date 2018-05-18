import React from 'react'
import { Button } from 'reactstrap';

const ChoiceGender = ({change, gender}) => 
<div>
  <p>Choose your preferred gender: </p>
  <Button className="mb-2 mr-2 bouton1" size="lg" outline color="link"  onClick={ () => change('male') }
    >Male</Button>
  <Button className="mb-2 mr-2 bouton1" size="lg" outline color="link" onClick={ () => change('female') }
    >Female</Button>
</div>


export default ChoiceGender;