import React from 'react'
import { Button } from 'reactstrap';


const ChoiceSpecie = ({change, species}) => 
<div>
<p>Choose your preferred species :</p>
<Button className="mb-2 mr-2" size="lg" color="link" outline onClick={ () => change('human') }
  >Human</Button>
<Button className="mb-2 mr-2" size="lg" color="link"  outline onClick={ () => change('droid') }
  >Droid</Button>
<Button className="mb-2 mr-2" size="lg" color="link"  outline onClick={ () => change('wookiee') }
  >wookiee</Button>
<Button className="mb-2 mr-2" size="lg" color="link"  outline onClick={ () => change('rodian') }
  >rodian</Button>
<Button className="mb-2 mr-2" size="lg" color="link"  outline onClick={ () => change('hutt') }
  >hutt</Button>
</div>


export default ChoiceSpecie;