import React, { PropTypes as RPT } from 'react';

class LoanTable extends React.Component {
  static propTypes = {
    totalPrincipal: RPT.number,
    term: RPT.number,
    totalCostOfCredit: RPT.number,
    totalRepayableAmount: RPT.number,
    monthlyPayment: RPT.number
  }

  render() {
    const { totalPrincipal, term, totalCostOfCredit, totalRepayableAmount, monthlyPayment } = this.props;
    return (
      <div>
        <tbody>
          <tr>
            <td>Total Principal</td>
            <td>{totalPrincipal}</td>
          </tr>
          <tr>
            <td>Term</td>
            <td>{term}</td>
          </tr>
          <tr>
            <td>Total cost of credit</td>
            <td>{totalCostOfCredit}</td>
          </tr>
          <tr>
            <td>Total repayable amount</td>
            <td>{totalRepayableAmount}</td>
          </tr>
          <tr>
            <td>Monthly payment</td>
            <td>{monthlyPayment}</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default LoanTable;
