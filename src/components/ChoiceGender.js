import React from 'react'

const ChoiceGender = ({change, gender}) => 
<div>
<p>Gender :{gender}</p>
<button onClick={ () => change('Male') }
  >Male</button>
<button onClick={ () => change('Female') }
  >Female</button>

</div>


export default ChoiceGender;