import React from 'react'
import { Button } from 'reactstrap';

const ChoiceGender = ({change, gender}) => 
<div>
  <p>Your favorite gloomy look :</p>
  <Button className="mb-2 mr-2 bouttonmarron" size="lg" onClick={ () => change('brown') }
    >Brown</Button>
  <Button className="mb-2 mr-2" size="lg" color="primary" onClick={ () => change('blue') }
    >Blue</Button>
    <Button className="mb-2 mr-2" size="lg" color="warning" onClick={ () => change('yellow') }
    >Yellow</Button>
    <Button className="mb-2 mr-2" size="lg" color="dark" onClick={ () => change('black') }
    >Black</Button>
    <Button className="mb-2 mr-2" size="lg" color="success" onClick={ () => change('green') }
    >Green</Button>
    <Button className="mb-2 mr-2" size="lg" color="warning" onClick={ () => change('orange') }
    >orange</Button>
    <Button className="mb-2 mr-2" size="lg" color="warning" onClick={ () => change('purple') }
    >purple</Button>
</div>



export default ChoiceGender;
