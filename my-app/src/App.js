import React, { Component } from 'react';

import Balance from './balance';
import { getBalanceAmount } from './operations.effect';
import { getOperations, postOperation } from './operations.server';
import ActionsContainer from './actionsContainer';
import OperationsContainer from './operationsContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      operations:[],
      isAlertMessageOpen: false
    };
  }

  componentDidMount () {
    getOperations().then((operations) => this.setState({operations:operations}))
    getBalanceAmount().then((balance) => this.setState({balance: balance}))
  }

  onOperationSubmit = (type, amount) => {
    const { balance, isAlertMessageOpen, operations } = this.state;
    const isLowBalance = type === 'withdrawal' && balance < -200;
    const isLowBalanceAfterOperation = type === 'withdrawal' && (balance - amount) < -200;

    if(isLowBalance || isLowBalanceAfterOperation){
      this.setState({isAlertMessageOpen: !isAlertMessageOpen})
      return
    }
    postOperation(type, amount).then((operation) => this.setState({operations:[...operations, operation]}, (newState) => {
      getBalanceAmount().then((balance) => this.setState({balance: balance}))
    }));
  }

  toggleOperationsList = () => {
    this.setState({isOperationsListOpen : !this.state.isOperationsListOpen})
  }

  render() {
    const { operations, balance, isAlertMessageOpen } = this.state;

    return (
      <div>
        <header className="App-header">
            MY BANK PORTAL
        </header>
        <Balance balance={balance} />
        {isAlertMessageOpen && <div className='balanceErrorMessage'>Minimum balance allowed : 200 euros</div>}
        <ActionsContainer onOperationSubmit={this.onOperationSubmit} />
        <OperationsContainer operationsData={operations} />
      </div>
    );
  }
}

export default App;
