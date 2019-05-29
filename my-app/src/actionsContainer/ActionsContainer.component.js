import React from 'react';

import ActionForm from './actionForm';
import './ActionsContainer.css';

function ActionsContainer(props) {
  const onOperationSubmit = (type, amount) => {
    props.onOperationSubmit(type,amount)
  }

  return (
      <div className='actionsContainer'>
          <ActionForm title='Deposit' submitActionForm = {onOperationSubmit} type ='deposit'/>
          <div className="divider" />
          <ActionForm title='Withdrawal' submitActionForm = {onOperationSubmit} type ='withdrawal'/>
      </div>
  );
}

export default ActionsContainer;
