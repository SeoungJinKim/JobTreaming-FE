/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

const Wrapper = styled.div`
  .DateRangePicker {
    border-radius: 66px;
    border: solid 1px #000000;
    padding: 10px 0px 10px 30px;
  }
  .DateRangePickerInput {
    border-radius: 66px;
  }
  .DateInput_input {
    border-radius: 66px;
  }
`;

export default class CustomSingleDate extends Component {
  constructor(props) {
    super(props);
    moment.locale('ko');

    this.state = {
      startDate: null,
      focused: true,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange() {
    this.setState({ focused: true });
  }

  alertPickedData = () => {
    const { date } = this.state;
    // eslint-disable-next-line no-alert
    alert(date);
  };

  render() {
    const { focused, date } = this.state;

    return (
      <Wrapper>
        <SingleDatePicker
          withPortal
          displayFormat="yyyy.MM.DD"
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate }) => this.setState({ startDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          regular
          numberOfMonths={1}
        />
      </Wrapper>
    );
  }
}
