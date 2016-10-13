import autobind from 'autobind-decorator';
import Interval from './interval';
import LoanTable from './loanTable';
import React, { PropTypes as RPT } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchConstraints, changeValue, calculateLoan } from '../common/actions';

@connect(
  ({ appReducer: reducer }) => ({
    amountInterval: reducer.get('amountInterval'),
    termInterval: reducer.get('termInterval'),
    loanInfo: reducer.get('loanInfo')
  }),
  dispatch => bindActionCreators({ fetchConstraints, changeValue, calculateLoan }, dispatch)
)

class App extends React.Component {
  static propTypes = {
    amountInterval: RPT.object,
    calculateLoan: RPT.func,
    changeValue: RPT.func,
    fetchConstraints: RPT.func,
    loanInfo: RPT.object,
    termInterval: RPT.object
  }

  componentDidMount() {
    const { fetchConstraints } = this.props;
    fetchConstraints();
  }

  @autobind
  handleCalculateLoan() {
    const { calculateLoan, amountInterval, termInterval } = this.props;
    const amountValue = amountInterval.get('value') || amountInterval.get('defaultValue');
    const termValue = termInterval.get('value') || termInterval.get('defaultValue');
    calculateLoan(amountValue, termValue);
  }

  render() {
    const { amountInterval, termInterval, changeValue, loanInfo } = this.props;

    return (
      <div>
        <p>Amount</p>
        <Interval
          handleCalculateLoan={this.handleCalculateLoan}
          changeValue={changeValue}
          defaultValue={amountInterval.get('defaultValue')}
          id={1}
          max={amountInterval.get('max')}
          min={amountInterval.get('min')}
          name="amountInterval"
          step={amountInterval.get('step')}
          value={amountInterval.get('value')}
        />
        <p>Term</p>
        <Interval
          handleCalculateLoan={this.handleCalculateLoan}
          changeValue={changeValue}
          defaultValue={termInterval.get('defaultValue')}
          id={1}
          max={termInterval.get('max')}
          min={termInterval.get('min')}
          name="termInterval"
          step={termInterval.get('step')}
          value={termInterval.get('value')}
        />
        <LoanTable
          totalPrincipal={loanInfo.get('totalPrincipal')}
          term={loanInfo.get('term')}
          totalCostOfCredit={loanInfo.get('totalCostOfCredit')}
          totalRepayableAmount={loanInfo.get('totalRepayableAmount')}
          monthlyPayment={loanInfo.get('monthlyPayment')}
        />
      </div>
    );
  }
}

export default App;
