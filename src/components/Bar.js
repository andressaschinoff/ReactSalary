import React, { Component } from 'react';

import { percentage } from '../helpers/format';

export default class Bar extends Component {
  render() {
    const { fullSalary, value, color } = this.props;
    const per = percentage(fullSalary, value);
    return (
      <div
        style={{
          marginTop: '40px',
          width: per + '%',
          height: '30px',
          backgroundColor: color,
        }}
      />
    );
  }
}
