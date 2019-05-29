import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './ActionForm.css';


class ActionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      amount : '0',
    };
  }
  
  handleChange = () => event => {
    this.setState({ amount: event.target.value });
  };

  submitForm = (event: SyntheticInputEvent<EventTarget>) => {
    const { type, submitActionForm } = this.props;
    event.preventDefault();
    submitActionForm(type, this.state.amount);
    this.setState({ amount : '0'})
  };

  render() {
    const { amount } = this.state;
    const { title } = this.props;
    const ColorButton = withStyles(theme => ({
      root: {
        backgroundColor: '#bdbdbd',
      },
    }))(Button);

    return (
      <div className="container">
        <p>{title}</p>
        <form onSubmit={this.submitForm} className="form">
          <TextField
          id="standard-number"
          label="Amount (euro)"
          onChange={this.handleChange()}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          value={amount}
          />
          <div className="submitButton">
            <ColorButton variant="contained" type="submit">
              Submit
            </ColorButton>
          </div>
        </form>
      </div>
    );
  }
}

ActionForm.propTypes = {
  title: PropTypes.string.isRequired,
  submitActionForm: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default ActionForm;
