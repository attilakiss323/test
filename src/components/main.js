import autobind from 'autobind-decorator';
import Interval from './interval';
import LoanTable from './loanTable';
import React, { PropTypes as RPT } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchConstraints, changeValue, calculateLoan } from '../common/actions';
import './style.css';

@connect(
  ({ appReducer: reducer }) => ({
    amountInterval: reducer.get('amountInterval'),
    termInterval: reducer.get('termInterval'),
    loanInfo: reducer.get('loanInfo'),
    apiError: reducer.get('apiError')
  }),
  dispatch => bindActionCreators({ fetchConstraints, changeValue, calculateLoan }, dispatch)
)

class App extends React.Component {
  static propTypes = {
    amountInterval: RPT.object,
    apiError: RPT.string,
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
    const { calculateLoan } = this.props;
    setTimeout(() => {
      calculateLoan();
    }, 100);
  }

  render() {
    const { amountInterval, termInterval, changeValue, loanInfo, apiError } = this.props;

    return (
      <div>
        <p>Amount</p>
        <Interval
          changeValue={changeValue}
          defaultValue={amountInterval.get('defaultValue')}
          handleCalculateLoan={this.handleCalculateLoan}
          id={1}
          max={amountInterval.get('max')}
          min={amountInterval.get('min')}
          name="amountInterval"
          step={amountInterval.get('step')}
          value={amountInterval.get('value')}
        />
        <p>Term</p>
        <Interval
          changeValue={changeValue}
          defaultValue={termInterval.get('defaultValue')}
          handleCalculateLoan={this.handleCalculateLoan}
          id={1}
          max={termInterval.get('max')}
          min={termInterval.get('min')}
          name="termInterval"
          step={termInterval.get('step')}
          value={termInterval.get('value')}
        />
        <LoanTable
          monthlyPayment={loanInfo.get('monthlyPayment')}
          term={loanInfo.get('term')}
          totalCostOfCredit={loanInfo.get('totalCostOfCredit')}
          totalPrincipal={loanInfo.get('totalPrincipal')}
          totalRepayableAmount={loanInfo.get('totalRepayableAmount')}
        />
        { apiError && <div>{apiError}</div>}
      </div>
    );
  }
}

export default App;
