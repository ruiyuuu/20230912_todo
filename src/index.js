import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '../src/router/AppRouter';
import './styles/style.scss'
// import "react-datepicker/dist/react-datepicker.css";

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
