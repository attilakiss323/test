import React, { PropTypes as RPT } from 'react';

class LoanTable extends React.Component {
  static propTypes = {
    monthlyPayment: RPT.number,
    term: RPT.number,
    totalCostOfCredit: RPT.number,
    totalPrincipal: RPT.number,
    totalRepayableAmount: RPT.number
  }

  render() {
    const { totalPrincipal, term, totalCostOfCredit, totalRepayableAmount, monthlyPayment } = this.props;
    return (
      <table>
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
      </table>
    );
  }
}

export default LoanTable;
