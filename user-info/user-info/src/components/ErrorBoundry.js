import { Component } from "react";
class ErrorBoundry extends Component {
    // This method will be triggered whenever any child component throws an error.
    componentDidCatch() {}

    render() {
        return this.props.children;
    }
}

export default ErrorBoundry;