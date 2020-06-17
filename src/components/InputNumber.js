import React, { Component } from 'react';

export default class InputNumber extends Component {
  handleNumberInput = (event) => {
    const fullSalary = event.target.value;

    this.props.onChangeNumber(fullSalary);
  };
  render() {
    const { salaryValue } = this.props;
    return (
      <div className="input-field col s12">
        <input
          type="number"
          id="salary"
          value={salaryValue}
          min="1000"
          step="100"
          onChange={this.handleNumberInput}
        />
        <label className="active" htmlFor="salary">
          Salário bruto
        </label>
      </div>
    );
  }
}
