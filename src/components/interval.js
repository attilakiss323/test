import autobind from 'autobind-decorator';
import React, { PropTypes as RPT } from 'react';

class Interval extends React.Component {
  static propTypes = {
    defaultValue: RPT.number,
    id: RPT.number,
    max: RPT.number,
    min: RPT.number,
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
    const { id, min, max, step, defaultValue } = this.props;
    return (
      <div>
        <select>
          {
            this.selectBoxValues().map((value, index) =>
              <option key={index} value={value} selected={value === defaultValue ? 'selected' : null}>
                {value}
              </option>
            )
          }
        </select>
        <input id={id} type="range" min={min} max={max} step={step} value={defaultValue} />
      </div>
    );
  }
}

export default Interval;
