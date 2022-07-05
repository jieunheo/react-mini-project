import { Component } from "react";


class ErrorBoundaries extends Component {
  state = {
    error: null,
    errorInfo: null
  }

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      errorInfo: info
    })
  }

  render() {
    if( this.state.error) {
      console.log(this.state);
      return (
        <div>
          <p>
            {this.state.error && this.state.error.toString()}
          </p>
          <p>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundaries;