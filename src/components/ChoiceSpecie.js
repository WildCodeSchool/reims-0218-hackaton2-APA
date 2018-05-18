import React from 'react'
import { Button } from 'reactstrap';


const ChoiceSpecie = ({change, species}) => 
<div>
<p>Choisissez votre espèce :</p>
<Button className="mb-2 mr-2" size="lg" color="link" outline onClick={ () => change('human') }
  >Human</Button>
  <Button className="mb-2" size="lg" color="link"  outline onClick={ () => change('droid') }
  >Droid</Button>

</div>


export default ChoiceSpecie;