import autobind from 'autobind-decorator';
import React, { PropTypes as RPT } from 'react';

class Interval extends React.Component {
  static propTypes = {
    changeValue: RPT.func,
    defaultValue: RPT.number,
    id: RPT.number,
    name: RPT.string,
    max: RPT.number,
    min: RPT.number,
    step: RPT.number,
    value: RPT.string,
    handleCalculateLoan: RPT.func
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

  @autobind
  handleSelectBoxChange(event) {
    const { changeValue, name, handleCalculateLoan } = this.props;
    changeValue(event.target.value, name);
    handleCalculateLoan();
  }

  @autobind
  handleSliderChange(event) {
    const { changeValue, name } = this.props;
    changeValue(event.target.value, name);
  }

  @autobind
  handleStopSlide() {
    const { handleCalculateLoan } = this.props;
    handleCalculateLoan();
  }

  render() {
    const { id, min, max, step, defaultValue, value } = this.props;
    return (
      <div>
        <select onChange={this.handleSelectBoxChange} value={value || defaultValue}>
          {
            this.selectBoxValues().map((val, index) =>
              <option key={index} value={val}>
                {val}
              </option>
            )
          }
        </select>
        <div>{min}</div>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value || defaultValue}
          onChange={this.handleSliderChange}
          onMouseUp={this.handleStopSlide}
        />
        <div>{max}</div>
      </div>
    );
  }
}

export default Interval;
