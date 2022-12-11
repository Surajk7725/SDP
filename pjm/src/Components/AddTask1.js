import React from 'react';
import Button from './AddTask5';
import "./AddTask4.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <h2 className="app-header">Task Manager App</h2>
          <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text=     {changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}
export default Header;