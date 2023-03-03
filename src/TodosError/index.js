import React from 'react';
import "./TodoError.css"

function TodosError({error}) {
  return(
    <div className='TodoError__container'>
      <p>{error}</p>
    </div>
  );
};

export {TodosError};