import React from 'react'
import { Button } from 'reactstrap';


const ChoiceSpecie = ({change, specie}) => 
<div>
<p>Choisissez votre espèce :{specie}</p>
<Button className="mb-2 mr-2" size="lg" color="success" disable  onClick={ () => change('Human') }
  >Human</Button>
  <Button className="mb-2" size="lg" color="warning" disable  onClick={ () => change('Droid') }
  >Droid</Button>

</div>


export default ChoiceSpecie;