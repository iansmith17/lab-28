import React from 'react';

class Form extends React.Component {
  handleFormSubmission = e => {
    e.preventDefault();
  }

  handleInputChange = currentValue => {
    this.props.do(currentValue);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input onChange={this.handleInputChange}></input>
      </form>
    );
  }

}

export default Form;
