import React from 'react'


const ChoiceSpecie = ({change, specie}) => 
<div>
<p>Specie :{specie}</p>
<button onClick={ () => change('Human') }
  >Human</button>
  <button onClick={ () => change('Droid') }
  >Droid</button>

</div>


export default ChoiceSpecie;