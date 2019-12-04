import React, { Component } from 'react';
import ErrorCatch from './ErrorCatch';

class ErrorFound extends Component {

    render() {
        return (
            <div>
                <ErrorCatch>
                    {this.props.abc.value}
                </ErrorCatch>
            </div>
        );
    }
}

export default ErrorFound;