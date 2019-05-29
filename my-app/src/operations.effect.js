import { getOperations } from './operations.server';

export const getBalanceAmount = () => {
   let balance;
   return getOperations().then((operations)=> {
      balance = operations.reduce((amount, operation) => (
          operation.type === 'deposit' ? amount + parseInt(operation.amount, 10) : amount - parseInt(operation.amount, 10)
      ),
      0);
      return balance;
   })
}