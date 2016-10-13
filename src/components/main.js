import React, { PropTypes as RPT } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchConstraints } from '../common/actions';

@connect(
  () => ({
  }),
  dispatch => bindActionCreators({ fetchConstraints }, dispatch)
)

class App extends React.Component {
  static propTypes = {
    fetchConstraints: RPT.func
  }

  componentDidMount() {
    const { fetchConstraints } = this.props;
    fetchConstraints();
  }

  render() {
    return (
      <div>
        Main
      </div>
    );
  }
}

export default App;
