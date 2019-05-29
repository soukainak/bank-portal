import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Balance.css';


function Balance(props) {
  return (
  <div className='balanceContainer'>
    <Paper>
      <Typography variant="h5" component="h3">
      &nbsp;Your balance is : {props.balance} euros&nbsp;
      </Typography>
    </Paper>
  </div>
  );
}

export default Balance;