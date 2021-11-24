import React from 'react';
import { useAlert } from './AlertContext';

const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;

  return <div onClick={alert.toggle}>It is a very important message</div>;
};

export default Alert;
