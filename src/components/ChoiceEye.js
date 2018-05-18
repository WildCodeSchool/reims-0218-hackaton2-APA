import React from 'react'
import { Button } from 'reactstrap';

const ChoiceGender = ({change, gender}) => 
<div>
  <p>Un regard ténébreux préféré :</p>
  <Button className="mb-2 mr-2" size="lg" color="primary" onClick={ () => change('brown') }
    >Marron</Button>
  <Button className="mb-2 mr-2" size="lg" color="danger" onClick={ () => change('blue') }
    >Blue</Button>
</div>


export default ChoiceGender;
