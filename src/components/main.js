import Interval from './interval';
import React, { PropTypes as RPT } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchConstraints } from '../common/actions';

@connect(
  ({ appReducer: reducer }) => ({
    amountInterval: reducer.get('amountInterval'),
    termInterval: reducer.get('termInterval')
  }),
  dispatch => bindActionCreators({ fetchConstraints }, dispatch)
)

class App extends React.Component {
  static propTypes = {
    amountInterval: RPT.object,
    fetchConstraints: RPT.func,
    termInterval: RPT.object
  }

  componentDidMount() {
    const { fetchConstraints } = this.props;
    fetchConstraints();
  }

  render() {
    const { amountInterval, termInterval } = this.props;

    return (
      <div>
        <Interval id={1} min={amountInterval.get('min')} max={amountInterval.get('max')} step={amountInterval.get('step')} />
        <Interval id={1} min={termInterval.get('min')} max={termInterval.get('max')} step={termInterval.get('step')} />
      </div>
    );
  }
}

export default App;
