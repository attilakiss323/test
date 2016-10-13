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
            <td className="loanTable-values">{totalPrincipal}</td>
          </tr>
          <tr>
            <td>Term</td>
            <td className="loanTable-values">{term}</td>
          </tr>
          <tr>
            <td>Total cost of credit</td>
            <td className="loanTable-values">{totalCostOfCredit}</td>
          </tr>
          <tr>
            <td>Total repayable amount</td>
            <td className="loanTable-values">{totalRepayableAmount}</td>
          </tr>
          <tr>
            <td>Monthly payment</td>
            <td className="loanTable-values">{monthlyPayment}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default LoanTable;
