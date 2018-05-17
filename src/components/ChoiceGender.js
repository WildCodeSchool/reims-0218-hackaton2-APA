import React from 'react'

const ChoiceGender = ({change, gender}) => 
<div>
<p>Gender :{gender}</p>
<button onClick={ () => change('male') }
  >Male</button>
<button onClick={ () => change('female') }
  >Female</button>

</div>


export default ChoiceGender;