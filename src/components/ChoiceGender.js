import React from 'react'
import { Button } from 'reactstrap';

const ChoiceGender = ({change, gender}) => 
<div>
  <p>Choisissez votre genre :</p>
  <Button className="mb-2 mr-2" size="lg" color="primary" onClick={ () => change('male') }
    >Male</Button>
  <Button className="mb-2 mr-2" size="lg" color="danger" onClick={ () => change('female') }
    >Female</Button>
</div>


export default ChoiceGender;