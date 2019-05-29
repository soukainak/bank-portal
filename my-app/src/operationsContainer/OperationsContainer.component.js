import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import OperationsList from './operationsList';
import './OperationsContainer.css';


class OperationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOperationsListOpen: false,
        };
    }

    toggleOperationsList = () => {
        this.setState({isOperationsListOpen : !this.state.isOperationsListOpen})
    }

    render() {
        const {isOperationsListOpen} = this.state;
        const operationsButtonTitle = isOperationsListOpen ? 'Close my operations' : 'See my operations';
        const ColorButton = withStyles(theme => ({
            root: {
              backgroundColor: '#bcaaa4',
            },
          }))(Button);

        return (
            <div className="operationsContainer">
                <ColorButton variant="contained" onClick={this.toggleOperationsList}>
                    {operationsButtonTitle}
                </ColorButton>
                {isOperationsListOpen && <OperationsList operationsData={this.props.operationsData}/>}
            </div>
        );
    }
}

OperationsContainer.propTypes = {
    operationsData: PropTypes.array.isRequired,
};

export default OperationsContainer;
