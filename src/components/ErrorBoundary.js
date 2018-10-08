import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    //if anything errors out, lifecycle hook is run
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops, just ran into an error</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;