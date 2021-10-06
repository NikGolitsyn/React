import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(formatDate(getTimeWithOffset(offset)));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatDate(getTimeWithOffset(offset)));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  location: PropTypes.string,
  offset: PropTypes.number,
};

Clock.defaultProps = {
  location: 'Some city',
  offset: 0,
};
