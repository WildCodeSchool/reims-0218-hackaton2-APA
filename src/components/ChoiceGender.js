import React from 'react'
import { Button } from 'reactstrap';

const ChoiceGender = ({change, gender}) => 
<div>
<<<<<<< HEAD
  <p>Choisissez votre genre :{gender}</p>
  <Button className="mb-2 mr-2" size="lg" color="primary" onClick={ () => change('Male') }
    >Male</Button>
  <Button className="mb-2 mr-2" size="lg" color="danger" onClick={ () => change('Female') }
    >Female</Button>
=======
<p>Gender :{gender}</p>
<button onClick={ () => change('Male') }
  >Male</button>
<button onClick={ () => change('Female') }
  >Female</button>

>>>>>>> cb5d9f215391e9c873dcf03394564ba810ddfba1
</div>


export default ChoiceGender;