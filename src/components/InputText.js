import React, { Component } from 'react';

import { formatNumber, percentage } from '../helpers/format';

export default class InputText extends Component {
  render() {
    const { value, label, id, fullSalary, color = 'black' } = this.props;

    let money = `R$ ${formatNumber(value)}`;
    if (fullSalary && value !== 0) {
      const per = formatNumber(percentage(fullSalary, value));
      money += ` (${per} %)`;
    }

    return (
      <div className="input-field col s6 m4 l3">
        <input
          style={{ color, fontWeight: '600' }}
          value={money}
          type="text"
          id={id}
          readOnly
        />
        <label className="active" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}
