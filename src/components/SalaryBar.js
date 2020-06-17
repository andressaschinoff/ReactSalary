import React, { Component } from 'react';

import Bar from './Bar';

export default class SalaryBar extends Component {
  render() {
    const { discountINSS, discountIRPF, netSalary, fullSalary } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Bar
          className="bar-color"
          value={discountINSS}
          fullSalary={fullSalary}
          color="#FD5D10"
        />
        <Bar
          className="bar-color"
          value={discountIRPF}
          fullSalary={fullSalary}
          color="#ff2717"
        />
        <Bar
          className="bar-color"
          value={netSalary}
          fullSalary={fullSalary}
          color="#009688"
        />
      </div>
    );
  }
}
