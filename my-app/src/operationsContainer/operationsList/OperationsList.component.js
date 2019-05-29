import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class OperationsList extends Component {

  render() {
    const { operationsData } = this.props;
          
    const classes = makeStyles(theme => ({
        root: {
          width: '100%',
          marginTop: theme.spacing(3),
          overflowX: 'auto',
        },
        table: {
          minWidth: 650,
        },
      }));

    return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell align="left">Id</TableCell>
          <TableCell align="right">Operation type</TableCell>
          <TableCell align="right">Amount (euro)</TableCell>
          <TableCell align="right">Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {operationsData.map(operation => (
          <TableRow key={operation.id}>
            <TableCell scope="row" >{operation.id}</TableCell>
            <TableCell align="right">
              {operation.type}
            </TableCell>
            <TableCell align="right">{operation.amount}</TableCell>
            <TableCell align="right">{operation.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
   );
 }
};

OperationsList.propTypes = {
    operationsData: PropTypes.array.isRequired
};

export default OperationsList;
