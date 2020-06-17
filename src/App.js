import React, { Component } from 'react';

import { calculateSalaryFrom } from './helpers/salary';

import InputNumber from './components/InputNumber';
import InputText from './components/InputText';
import SalaryBar from './components/SalaryBar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 1000,
      baseINSS: 1000,
      discountINSS: 75,
      baseIRPF: 925,
      discountIRPF: 0,
      netSalary: 925,
      netSalBar: 925,
      discInssBar: 75,
      discIrpfBar: 0,
    };
  }

  handleNumberInput = (fullSalary) => {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);

    this.setState({
      fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    });
  };

  handleChangeBar = (fullSalary) => {
    const { discountINSS, discountIRPF, netSalary } = this.state;

    const netSalBar = fullSalary - discountIRPF;
    const discInssBar = fullSalary - discountINSS;
    const discIrpfBar = fullSalary - netSalary;

    this.setState({ netSalBar, discInssBar, discIrpfBar });
  };

  render() {
    const {
      fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.state;

    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <InputNumber
            salaryValue={fullSalary}
            onChangeNumber={this.handleNumberInput}
          />
          <InputText value={baseINSS} id="inputBaseINSS" label="Base INSS" />
          <InputText
            value={discountINSS}
            id="inputDiscountINSS"
            fullSalary={fullSalary}
            label="Desconto INSS"
            color="#FD5D10"
          />
          <InputText value={baseIRPF} id="inputBaseIRPF" label="Base IRPF" />
          <InputText
            value={discountIRPF}
            id="inputDiscountIRPF"
            fullSalary={fullSalary}
            label="Desconto IRPF"
            color="#ff2717"
          />
          <InputText
            value={netSalary}
            id="inputNetSalary"
            fullSalary={fullSalary}
            label="Salário liquído"
            color="#009688"
          />
        </div>
        <SalaryBar
          discountINSS={discountINSS}
          discountIRPF={discountIRPF}
          netSalary={netSalary}
          fullSalary={fullSalary}
        />
      </div>
    );
  }
}
