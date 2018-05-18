import React from 'react'
import { Button } from 'reactstrap';

const ChoiceGender = ({change, gender}) => 
<div>
  <p>Un regard ténébreux préféré :</p>
  <Button className="mb-2 mr-2 bouttonmarron" size="lg" onClick={ () => change('brown') }
    >Marron</Button>
  <Button className="mb-2 mr-2" size="lg" color="primary" onClick={ () => change('blue') }
    >Bleu</Button>
    <Button className="mb-2 mr-2" size="lg" color="warning" onClick={ () => change('yellow') }
    >Jaune</Button>
    <Button className="mb-2 mr-2" size="lg" color="dark" onClick={ () => change('black') }
    >Noir</Button>
    <Button className="mb-2 mr-2" size="lg" color="success" onClick={ () => change('green') }
    >Vert</Button>
</div>



export default ChoiceGender;
