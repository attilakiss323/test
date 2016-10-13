import autobind from 'autobind-decorator';
import React, { PropTypes as RPT } from 'react';

class Interval extends React.Component {
  static propTypes = {
    id: RPT.number,
    min: RPT.number,
    max: RPT.number,
    step: RPT.number
  }

  @autobind
  selectBoxValues() {
    const { max, step, min } = this.props;
    const options = [];
    for (let i = min; i < max; i += step) {
      options.push(i);
    }
    return options;
  }

  render() {
    const { id, min, max, step } = this.props;
    return (
      <div>
        <select>
          {
            this.selectBoxValues().map((value, index) =>
              <option key={index} value={value}>{value}</option>)
          }
        </select>
        <input id={id} type="range" min={min} max={max} step={step} />
      </div>
    );
  }
}

export default Interval;
