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
        <Interval
          defaultValue={amountInterval.get('defaultValue')}
          id={1}
          max={amountInterval.get('max')}
          min={amountInterval.get('min')}
          step={amountInterval.get('step')}
        />
        <Interval
          defaultValue={termInterval.get('defaultValue')}
          id={1}
          max={termInterval.get('max')}
          min={termInterval.get('min')}
          step={termInterval.get('step')}
        />
      </div>
    );
  }
}

export default App;
